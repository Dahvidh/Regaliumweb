import { useWriteContract } from "wagmi";
import { parseUnits } from "viem";
import { CONTRACTS } from "../../blockchain/config";
import stakingAbi from "../../blockchain/abi/RegaliumStaking.json";

export function useStake() {
  const { writeContract, isPending } = useWriteContract();

  function stake(amount: string) {
    writeContract({
      address: CONTRACTS.staking as `0x${string}`,
      abi: stakingAbi,
      functionName: "stake",
      args: [parseUnits(amount, 18)],
    });
  }

  return { stake, isPending };
}
