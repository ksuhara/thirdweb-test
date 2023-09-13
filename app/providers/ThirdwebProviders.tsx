"use client";

import { ThirdwebProvider, metamaskWallet } from "@thirdweb-dev/react";

export function ThirdwebProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThirdwebProvider
      activeChain={"mumbai"}
      supportedWallets={[metamaskWallet()]}
      sdkOptions={{
        gasless: {
          openzeppelin: {
            relayerUrl: process.env.NEXT_PUBLIC_OPENZEPPELIN_URL || "",
          },
        },
      }}
      authConfig={{
        domain: process.env.NEXT_PUBLIC_THIRDWEB_AUTH_DOMAIN as string,
      }}
      clientId={process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID}
    >
      {children}
    </ThirdwebProvider>
  );
}
