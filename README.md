# SYDY Capital

Credential handling, automated checks and operational security limitations are documented in [SECURITY.md](SECURITY.md). Never put secrets in `NEXT_PUBLIC_*` values; they are visible to visitors.

Terminal-led investment intelligence experience built with Next.js App Router, Tailwind CSS, Shadcn-style Radix primitives, Framer Motion, static export and Docker/Nginx.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

To activate the WhatsApp CTA, add the business number in international format without `+` or spaces:

```bash
NEXT_PUBLIC_WHATSAPP_NUMBER=919876543210
```

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

All investment figures and calculator outputs are illustrative. The contact form sends enquiries through FormSubmit to ashish05beit@gmail.com and offers a prefilled email draft if delivery fails. FormSubmit requires the mailbox owner to activate the address using its first-use verification email before enquiries are delivered; see https://formsubmit.co/help. Test delivery with the owner before launch.
