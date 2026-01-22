import { useAccount, useReadContract } from "wagmi";
import { CONTRACTS } from "../../blockchain/config";
import stakingAbi from "../../blockchain/abi/RegaliumStaking.json";

export function useStakingInfo() {
  const { address } = useAccount();

  const { data, isLoading } = useReadContract({
    address: CONTRACTS.staking as `0x${string}`,
    abi: stakingAbi,
    functionName: "stakes",
    args: address ? [address] : undefined,
    query: { enabled: !!address },
  });

  return {
    staked: data ? Number(data.amount) / 1e18 : 0,
    startTime: data?.start || 0,
    isLoading,
  };
}
