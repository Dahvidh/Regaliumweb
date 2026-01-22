import { useState } from "react";
import { useAccount, useWalletClient } from "wagmi";
import { TOKENS } from "../../blockchain/tokens";

const ONEINCH_API = "https://api.1inch.io/v5.0/137";

export function useSwap() {
  const { address } = useAccount();
  const { data: walletClient } = useWalletClient();

  const [loading, setLoading] = useState(false);

  async function swap(
    fromToken: keyof typeof TOKENS,
    toToken: keyof typeof TOKENS,
    amount: string,
    slippage = 1
  ) {
    if (!address || !walletClient) return;

    setLoading(true);

    const from = TOKENS[fromToken];
    const to = TOKENS[toToken];

    const amountWei = Number(amount) * 10 ** from.decimals;

    // 1️⃣ Get swap transaction data
    const res = await fetch(
      `${ONEINCH_API}/swap?fromTokenAddress=${from.address}&toTokenAddress=${to.address}&amount=${amountWei}&fromAddress=${address}&slippage=${slippage}`
    );

    const tx = await res.json();

    // 2️⃣ Send transaction via wallet
    await walletClient.sendTransaction({
      to: tx.tx.to,
      data: tx.tx.data,
      value: BigInt(tx.tx.value || "0"),
    });

    setLoading(false);
  }

  return { swap, loading };
}
