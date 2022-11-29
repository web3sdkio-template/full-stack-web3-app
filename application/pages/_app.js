import { ChainId, Web3sdkioProvider } from "@web3sdkio/react";

// This is the chainId your dApp will work on.
const activeChainId = ChainId.Goerli;

function MyApp({ Component, pageProps }) {
  return (
    <Web3sdkioProvider desiredChainId={activeChainId}>
      <Component {...pageProps} />
    </Web3sdkioProvider>
  );
}

export default MyApp;
