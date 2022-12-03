![OneSignal](https://github.com/OneSignal/.github/blob/439e36ade56b001643ff3b07eeaf95b20129f3e6/assets/onesignal-banner.png)

<div align="center">
  <a href="https://documentation.onesignal.com/docs/onboarding-with-onesignal" target="_blank">Quickstart</a>
  <span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
  <a href="https://onesignal.com/" target="_blank">Website</a>
  <span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
  <a href="https://documentation.onesignal.com/docs" target="_blank">Docs</a>
  <span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
  <a href="https://github.com/OneSignalDevelopers" target="_blank">Examples</a>
  <br />
  <hr />
</div>

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Supabase Sample Integration API

This API exists so the sample integration will work on both dev/local and production. 

The event-handler implemented in this project can be implemented in your Supabase project if preferred, but it may impact your dev experience because locally hosted instances of Supabase can only serve one edge function at a time. Hosting a seperate API allows us to avoid this limitation without resorting to pasting working logic from the Next API to a Supabase Edge Function.

## How it works

1. This API recieves successful Stripe webhook events
2. If the event matched the correct intent, an **Order** record is inserted into the database 
3. A Supabase Database Webhook, defined in the project calls a Supabase Edge Function when the record is inserted, calls a Supabase Edge Function which sends a request to the OneSignal API to create a push notificaiton.

### Function implementation

This enables us to Insert **Order** record before sending a message to the user. We may want to do this for a host of reason such as wanting to wait for shipping to process before alerting to wanting to make sure the payment is received before moving the customer to the next stage of their journey. Supabase Database Webhooks enable us to react to state changes from our source of truth: the database.

https://github.com/OneSignalDevelopers/onesignal-supabase-sample-integration-api/blob/0750a2b5a8cb87955aa5fca196db9ac6a5a4fd58/pages/api/on-stripe-event.ts#L15-L44

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

# ❤️ Developer Community

For additional resources, please join the [OneSignal Developer Community](https://onesignal.com/onesignal-developers).

Get in touch with us or learn more about OneSignal through the channels below.

- [Follow us on Twitter](https://twitter.com/onesignaldevs) to never miss any updates from the OneSignal team, ecosystem & community
- [Join us on Discord](https://discord.gg/EP7gf6Uz7G) to be a part of the OneSignal Developers community, showcase your work and connect with other OneSignal developers
- [Read the OneSignal Blog](https://onesignal.com/blog/) for the latest announcements, tutorials, in-depth articles & more.
- [Subscribe to us on YouTube](https://www.youtube.com/channel/UCe63d5EDQsSkOov-bIE_8Aw/featured) for walkthroughs, courses, talks, workshops & more.
- [Follow us on Twitch](https://www.twitch.tv/onesignaldevelopers) for live streams, office hours, support & more.

## Show your support

Give a ⭐️ if this project helped you, and watch this repo to stay up to date.

