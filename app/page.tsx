"use client";
import { ConnectWallet, useAddress, useContract } from "@thirdweb-dev/react";

export default function Home() {
  const loyaltyCardAddress = "0xfE0DAB47c09EB3950a490B7290B34bC439006F70";
  const address = useAddress();
  const { contract: loyaltyCard } = useContract(loyaltyCardAddress);
  const grantRoleTestloyaltyCard = async () => {
    if (!loyaltyCard || !address) return;
    const tx = await loyaltyCard.roles.grant(
      "admin",
      "0xB6Ac3Fe610d1A4af359FE8078d4c350AB95E812b"
    );
    console.log(tx);
    alert("Role Granted");
  };

  const NFTCollectionAddress = "0x1F924f25C8469d52E7c1DCdAbDCCE2831E6d72D1";
  const { contract: NFTCollection } = useContract(NFTCollectionAddress);

  const grantRoleTestNFTCollection = async () => {
    if (!NFTCollection || !address) return;
    const tx = await NFTCollection.roles.grant(
      "admin",
      "0xB6Ac3Fe610d1A4af359FE8078d4c350AB95E812b"
    );
    console.log(tx);
    alert("Role Granted");
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <ConnectWallet />
      <button
        className="mt-4 rounded-xl bg-indigo-600 p-4"
        onClick={grantRoleTestloyaltyCard}
      >
        Grant Role for TestloyaltyCard
      </button>
      <button
        className="mt-4 rounded-xl bg-indigo-600 p-4"
        onClick={grantRoleTestNFTCollection}
      >
        Grant Role for NFTCollection
      </button>
    </main>
  );
}
