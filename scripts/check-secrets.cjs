const { execFileSync } = require('node:child_process');
const fs = require('node:fs');
const assert = require('node:assert/strict');

// Dependency-free defence in depth. Reports locations and rule names, never values.
const rules = [
  ['private key', /-----BEGIN (?:RSA |EC |OPENSSH |DSA )?PRIVATE KEY-----/],
  ['GitHub token', /\b(?:gh[pousr]_[A-Za-z0-9]{30,}|github_pat_[A-Za-z0-9_]{30,})\b/],
  ['OpenAI key', /\bsk-(?:proj-|svcacct-)?[A-Za-z0-9_-]{30,}/],
  ['AWS access key', /\b(?:AKIA|ASIA)[A-Z0-9]{16}\b/],
  ['JWT', /\beyJ[A-Za-z0-9_-]{15,}\.[A-Za-z0-9_-]{15,}\.[A-Za-z0-9_-]{15,}/],
  ['credential URL', /\b(?:postgres(?:ql)?|mysql|mongodb(?:\+srv)?|https?):\/\/[^\s/:]+:[^\s/@]+@/],
  ['literal credential', /(?:api[_-]?key|password|secret|access[_-]?token|encryption[_-]?key)\s*["']?\s*[:=]\s*["'][^"'\r\n]{12,}["']/i],
];
const forbidden = /(?:^|\/)(?:\.env(?:\..*)?|config\.json|config\.local\.[^/]+|credentials(?:\.[^/]+)?\.json|secrets(?:\.[^/]+)?\.json|service[-]?account[^/]*\.json|\.npmrc|\.netrc|id_rsa[^/]*|id_ed25519[^/]*|[^/]+\.(?:pem|key|p12|pfx))$/i;
const privateDir = /(?:^|\/)(?:\.aws|\.ssh|\.vercel|secrets|credentials)\//;
const unsafeName = p => (forbidden.test(p) || privateDir.test(p)) && !/(?:^|\/)\.env(?:\.[^/]*)?\.example$/i.test(p);
const detect = text => rules.filter(([, pattern]) => pattern.test(text)).map(([name]) => name);

if (process.argv.includes('--self-test')) {
  for (const p of ['.env', '.env.production', 'nested/config.json', 'private.key', 'credentials.json', 'nested/.ssh/test']) assert(unsafeName(p), p);
  for (const p of ['.env.example', 'next.config.ts', 'tsconfig.json', '.openai/hosting.json']) assert(!unsafeName(p), p);
  assert(detect('gh' + 'p_' + 'a'.repeat(36)).includes('GitHub token'));
  assert(detect('-----BEGIN ' + 'PRIVATE KEY-----').includes('private key'));
  assert(detect('password' + ' = "' + 'x'.repeat(16) + '"').includes('literal credential'));
  assert.equal(detect('NEXT_PUBLIC_WHATSAPP_NUMBER=919876543210').length, 0);
  console.log('Secret scanner self-tests passed.');
  process.exit(0);
}

const git = (...args) => execFileSync('git', args, { maxBuffer: 64 * 1024 * 1024 });
const findings = new Set();
let scanned = 0;
function inspect(p, buf, ref = 'working tree') {
  if (unsafeName(p)) findings.add(`${ref}: ${p}: private file must not be tracked`);
  if (buf.includes(0)) return;
  scanned++;
  for (const rule of detect(buf.toString('utf8'))) findings.add(`${ref}: ${p}: ${rule}`);
}

try {
  if (process.argv.includes('--history')) {
    const seen = new Set();
    for (const commit of git('rev-list', '--all').toString().trim().split('\n').filter(Boolean)) {
      for (const entry of git('ls-tree', '-rz', commit).toString().split('\0').filter(Boolean)) {
        const tab = entry.indexOf('\t');
        const [, type, hash] = entry.slice(0, tab).split(' ');
        const p = entry.slice(tab + 1);
        if (type !== 'blob') continue;
        const key = `${hash}:${p}`;
        if (seen.has(key)) continue;
        seen.add(key);
        inspect(p, git('cat-file', 'blob', hash), commit.slice(0, 8));
      }
    }
  } else {
    for (const p of git('ls-files', '-z').toString().split('\0').filter(Boolean)) {
      if (fs.existsSync(p)) inspect(p, fs.readFileSync(p));
    }
  }
  if (findings.size) {
    console.error([...findings].join('\n'));
    process.exitCode = 1;
  } else {
    console.log(`No configured secret patterns detected in ${scanned} text blobs. This is not a complete security audit.`);
  }
} catch {
  console.error('Secret scan could not complete. Check Git availability and repository access.');
  process.exitCode = 1;
}
