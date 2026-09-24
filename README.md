# SYDY Capital

Terminal-led investment intelligence experience built with Next.js App Router, Tailwind CSS, Shadcn-style Radix primitives, Framer Motion, static export and Docker/Nginx.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production export

```bash
npm run build
```

The static site is emitted to `out/` and includes the homepage, blog index, three article routes, sitemap and robots file.

## Docker

```bash
docker build -t sydy-capital .
docker run --rm -p 8080:80 sydy-capital
```

Open `http://localhost:8080`.

All investment figures and calculator outputs are illustrative; this build contains no login, data provider or lead-submission integration.
