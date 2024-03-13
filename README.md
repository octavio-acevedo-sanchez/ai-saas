# Next.js 14 - AI SaaS

AI SaaS application, uses TypeScript (StandardJS), Tailwind + Shadcn/UI, MongoDB, the application only has basic functionalities. This project is a test one, it was made based on https://github.com/AntonioErdeljac/next13-ai-saas.

- Authentication using clerk/nextjs v4.29.
- Generate conversations and code using OpenAI model 3.5turbo.
- Generate images, audio and video using Replicate AI.
- Integration with Stripe to receive webhooks and be able to update the subscription status.

## Configure environment variables

Rename the file **.env.template** to **.env.local**

- Clerk: Create an account on https://clerk.com, create an application and then go to Api Keys and copy the values of NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY and CLERK_SECRET_KEY

```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
```

- MongoDB URL:

```
DATABASE_URL="mongodb+srv://user:password@domain.com/name_bd"
```

- OpenAI: Go to openai.com, create an account, after logging in, choose the API option, on the screen go to the left side menu to the Api Keys option, there you must copy the SecretKey

```
OPENAI_API_KEY=
```

- Replicate: Go to replicate.com and sign up. After logging in, create an account. Then you must go to the top left and click on the menu and then go to API Tokens, there you must copy the token.

```
REPLICATE_API_TOKEN=
```

- Stripe: Go to stripe.com and sign up. After logging in, create an account. Then go to the Developers option and in the API Keys section you must copy the public and secret key. In the Webhook section you can test a local environment and then add an endpoint, where you must add the project URL, for example https://domain.com/api/webhooks, select the option to listen for events and select all the events. Then copy the content of the Signed Secret variable into STRIPE_WEBHOOK_SECRET

```
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
```

- Rebuild the node modules and build Next

```
npm install
npm run dev
```
