## Getting Started

Create a project using this example:

```bash
npx create-tw-app --example next-javascript-starter
```

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

On `pages/_app.js`, you'll find our `Web3sdkioProvider` wrapping your app, this is necessary for our hooks to work.

on `pages/index.js`, you'll find the `useMetamask` hook that we use to connect the user's wallet to MetaMask, `useDisconnect` that we use to disconnect it, and `useAddress` to check the user's wallet address once connected. 

## Learn More

To learn more about web3sdkio and Next.js, take a look at the following resources:

- [web3sdkio React Documentation](https://docs.web3sdk.io/react) - learn about our React SDK.
- [web3sdkio JavaScript Documentation](https://docs.web3sdk.io/react) - learn about our JavaScript/TypeScript SDK.
- [web3sdkio Portal](https://docs.web3sdk.io/react) - check our guides and development resources.
- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.

You can check out [the web3sdkio GitHub organization](https://github.com/web3sdkio) - your feedback and contributions are welcome!

## Join our Discord!

For any questions, suggestions, join our discord at [https://discord.gg/n33UhsfUKB](https://discord.gg/n33UhsfUKB).
