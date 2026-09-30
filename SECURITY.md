# Credential and security handling

This is a static, public website, not an authenticated financial platform. It has no database, payment processor, account service, or private market-data credentials. Every delivered HTML, JavaScript, image and public asset is readable by visitors.

## Secrets

- Never commit API keys, passwords, signing or encryption keys, tokens, private certificates, or service-account credentials. Keep `.env.example` limited to non-sensitive examples.
- Git excludes environment files except explicit examples, local credential/config files, private keys, and credential directories. Docker excludes these even when they exist outside Git. Do not force-add ignored files.
- `.gitignore` does not untrack committed files or erase history. `config.json` is excluded; legitimate framework files such as `tsconfig.json` and `next.config.ts` remain tracked.
- `NEXT_PUBLIC_*` values are embedded in browser bundles. Only the public WhatsApp number currently uses this mechanism. Never put secrets in them, `public/`, browser storage, query strings, or client components.
- Store future secrets in the hosting provider's server-side secret store. A static export cannot safely use a private API key: introduce a server-side endpoint with validation, rate limiting, and least-privilege credentials before adding private integrations.
- Never pass credentials as build arguments, bake them into Docker layers, or persist deployment tokens. Use short-lived, scoped credentials and secret mounts for future private build dependencies.

## Checks

Run `npm run security:test`, `npm run security:secrets`, and `npm run security:history`. CI runs these on pushes and pull requests with read-only repository permissions. The scanner reports rule names and paths, not matched values. It is a limited pattern check, not a guarantee; review binaries, archives, and new integrations separately.

Enable GitHub secret scanning and push protection in repository settings where available. Require the Credential checks workflow in branch protection if desired. These account-level controls must be verified separately. Review dependency alerts and run `npm audit` before releases.

## Contact form and operations

Enquiry name, email, optional phone, and message go over HTTPS to FormSubmit. The public mailbox address is not a credential. The form is not an encrypted financial-document vault; do not submit passwords, PAN/Aadhaar documents, account numbers, or payment details.

The honeypot is basic spam mitigation. Provider-side abuse controls, mailbox activation, access permissions, and retention require owner verification. A future backend or CRM should enforce server-side validation, size limits, rate limits, and an appropriate bot challenge.

Use MFA on GitHub, hosting, the domain registrar, and the enquiry mailbox. Review collaborators and token permissions. HTTPS is terminated by the hosting platform or reverse proxy; the Docker Nginx container itself listens on HTTP port 80.

## If a credential is exposed

1. Revoke or rotate it at the issuer immediately; deleting the file is insufficient.
2. Inspect provider logs and contain unauthorized access.
3. Replace it in the server-side secret store and redeploy affected artifacts.
4. Coordinate Git-history cleanup; do not force-push shared history without approval.
5. Re-scan and document the incident without copying secret values into reports.
