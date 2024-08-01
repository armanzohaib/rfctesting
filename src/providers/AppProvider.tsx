"use client";
import React from "react";
import { createConfig, WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "@rainbow-me/rainbowkit/styles.css";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { useState } from "react";
import ChainContextProvider from "@/context/ChainContextProvider";
import { store } from "@/app/redux/store";
import { Provider } from "react-redux";
import { sepolia } from "viem/chains";
import { transports } from "@/config/chains";
import { DynamicContextProvider } from "@dynamic-labs/sdk-react-core";
import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";

export const config = createConfig({
  // appName: "RFC",
  // projectId: "db37d44309764844855849938cd51d0a",
  multiInjectedProviderDiscovery: false,
  // chains: [bscTestnet],
  //   chains: [mainnet, base],
  chains: [sepolia],
  ssr: true, // If your dApp uses server side rendering (SSR),
  transports: transports,
});

const evmNetworks = [
  {
    blockExplorerUrls: ["https://etherscan.io/"],
    chainId: 1,
    chainName: "Ethereum",
    iconUrls: ["https://app.dynamic.xyz/assets/networks/eth.svg"],
    name: "SepoEthereumlia",
    nativeCurrency: {
      decimals: 18,
      name: "Ether",
      symbol: "ETH",
    },
    networkId: 1,

    rpcUrls: [
      "https://eth-mainnet.g.alchemy.com/v2/R8Pb0NRNAXnuknuPryzfpltZ1k5-3LYu",
    ],
    vanityName: "Ethereum",
  },
  {
    blockExplorerUrls: ["https://basescan.org/"],
    chainId: 8453,
    chainName: "Base",
    iconUrls: ["https://app.dynamic.xyz/assets/networks/eth.svg"],
    name: "Base",
    nativeCurrency: {
      decimals: 18,
      name: "Ether",
      symbol: "ETH",
    },
    networkId: 8453,

    rpcUrls: [
      "https://base-mainnet.g.alchemy.com/v2/Rh7G4PtI4aedBskUd82L6xpuispq5-Wo",
    ],
    vanityName: "Base",
  },
  {
    blockExplorerUrls: ["https://basescan.org/"],
    chainId: 84532,
    chainName: "BaseTestnet",
    iconUrls: ["https://app.dynamic.xyz/assets/networks/eth.svg"],
    name: "Base Testnet",
    nativeCurrency: {
      decimals: 18,
      name: "Ether",
      symbol: "ETH",
    },
    networkId: 84532,
    rpcUrls: [
      "https://base-sepolia.g.alchemy.com/v2/_YWE7QBtIaJ2I721qC0yfxPo2M9uxIdC",
    ],
    vanityName: "Base",
  },
  {
    blockExplorerUrls: ["https://sepolia.etherscan.io/"],
    chainId: 11155111,
    chainName: "Sepolia",
    iconUrls: ["https://app.dynamic.xyz/assets/networks/eth.svg"],
    name: "Sepolia",
    nativeCurrency: {
      decimals: 18,
      name: "Ether",
      symbol: "ETH",
    },
    networkId: 11155111,
    rpcUrls: [
      "https://sepolia.infura.io/v3/_YWE7QBtIaJ2I721qC0yfxPo2M9uxIdC", // Replace with your Infura project ID or another Sepolia RPC URL
    ],
    vanityName: "Sepolia",
  },
];

const AppProvider = ({ children }: React.PropsWithChildren) => {
  const [client] = useState(new QueryClient());
  return (
    <>
      <DynamicContextProvider
        settings={{
          // Find your environment id at https://app.dynamic.xyz/dashboard/developer
          environmentId: "5ddd4c2c-fb01-4305-baba-6ba908912ba0",
          walletConnectors: [EthereumWalletConnectors],
          overrides: { evmNetworks },
        }}
      >
        <Provider store={store}>
          <WagmiProvider config={config}>
            <QueryClientProvider client={client}>
              <RainbowKitProvider>
                <ChainContextProvider>{children}</ChainContextProvider>
                <ReactQueryDevtools initialIsOpen={false} />
              </RainbowKitProvider>
            </QueryClientProvider>
          </WagmiProvider>
        </Provider>
      </DynamicContextProvider>
    </>
  );
};
export default AppProvider;
