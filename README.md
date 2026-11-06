# Naveed Ahmed — AI Automation Portfolio (Final / Formspree)

Next.js portfolio with four case studies, animated branding and hero, responsive layout, and dark/light themes.

## Start locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Contact form — already connected

The existing contact form sends a `POST` request directly to:

`https://formspree.io/f/mnpprgkq`

No Resend API key, `.env.local`, or custom domain is needed. The form retains its original design, validation, loading state, success/error feedback, and spam-trap field. The previous unused Resend API route has been removed.

**Important:** In the Formspree dashboard, verify the recipient email is `naveedsami5000@gmail.com`, enable email notifications, and complete any email confirmation. Then submit a test inquiry and confirm it appears in Formspree submissions and your Gmail inbox (check Spam). Email delivery cannot be verified without access to your Formspree account.

## Vercel deployment

Push this project to GitHub, import it into Vercel, and deploy. The Formspree endpoint works on Vercel's free `*.vercel.app` domains. No Vercel environment variables are required for the contact form.

## Customize

- Contact details and CV path: `data/site.ts`
- Project case studies and video links: `data/projects.ts`
- Services: `data/services.ts`
- Skill categories: `data/stack.ts`
- Theme and layout: `app/globals.css`
- Hero visualization: `components/AutomationVisual.tsx`
- Logo and favicon: `components/Portfolio.tsx` and `app/icon.svg`

Place your CV PDF at the configured `public/` path before publishing.
