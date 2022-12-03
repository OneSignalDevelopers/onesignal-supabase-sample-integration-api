This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Supabase Sample Integration API

This API exists so the sample integration will work on both dev/local and production. At the time of this integration's development, a locally hosted instance of Supabase could only serve one edge function at a time. Hosting a seperate API allows us to avoid this limitation without resorting to pasting working logic from the Next API to a Supabase Edge Function.

## 🚦Getting Started

First, make a copy of [`.env.example`](https://github.com/OneSignalDevelopers/onesignal-supabase-sample-integration-api/blob/main/.env.example) and set each variable

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
