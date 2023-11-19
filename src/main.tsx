import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import AppProvider from "./AppContext.tsx";
import { WagmiConfig, createConfig, mainnet } from "wagmi";
import { createPublicClient, http } from "viem";

const config = createConfig({
  autoConnect: true,
  publicClient: createPublicClient({
    chain: mainnet,
    transport: http(),
  }),
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <WagmiConfig config={config}>
      <AppProvider>
        <App />,
      </AppProvider>
    </WagmiConfig>
  </React.StrictMode>
);
