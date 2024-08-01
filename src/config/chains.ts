import { http } from "viem";
import { base, mainnet, Chain, baseSepolia, sepolia } from "viem/chains";

// interface Chains extends readonly [Chain, ...Chain[]] = readonly [Chain, ...Chain[]]

export const supportedChains: readonly [Chain, ...Chain[]] = [
  // baseSepolia,
  base,
  // mainnet,
];
export const transports = {
  // [base.id]: http(
  //     "https://base-mainnet.g.alchemy.com/v2/Rh7G4PtI4aedBskUd82L6xpuispq5-Wo"
  // ),
  // [mainnet.id]: http(
  //     "https://eth-mainnet.g.alchemy.com/v2/R8Pb0NRNAXnuknuPryzfpltZ1k5-3LYu"
  // ),
  [baseSepolia.id]: http(
    "https://base-sepolia.g.alchemy.com/v2/_YWE7QBtIaJ2I721qC0yfxPo2M9uxIdC"
  ),
  [sepolia.id]: http(
    "https://sepolia.infura.io/v3/_YWE7QBtIaJ2I721qC0yfxPo2M9uxIdC" // Replace with your Infura project ID or another Sepolia RPC URL
  ),
};
export const defaultChain = base;
