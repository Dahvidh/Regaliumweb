import { useAccount, useReadContract } from "wagmi";
import { CONTRACTS } from "../../blockchain/config";
import tokenAbi from "../../blockchain/abi/RegaliumToken.json";

export function useTokenBalance() {
  const { address } = useAccount();

  const { data, isLoading } = useReadContract({
    address: CONTRACTS.token as `0x${string}`,
    abi: tokenAbi,
    functionName: "balanceOf",
    args: address ? [address] : undefined,
    query: { enabled: !!address },
  });

  return {
    balance: data ? Number(data) / 1e18 : 0,
    isLoading,
  };
}
