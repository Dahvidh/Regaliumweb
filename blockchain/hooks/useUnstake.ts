import { useWriteContract } from "wagmi";
import { CONTRACTS } from "../../blockchain/config";
import stakingAbi from "../../blockchain/abi/RegaliumStaking.json";

export function useUnstake() {
  const { writeContract, isPending } = useWriteContract();

  function unstake() {
    writeContract({
      address: CONTRACTS.staking as `0x${string}`,
      abi: stakingAbi,
      functionName: "unstake",
    });
  }

  return { unstake, isPending };
}
