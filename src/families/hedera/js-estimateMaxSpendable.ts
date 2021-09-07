import type BigNumber from "bignumber.js";
import type { Account, AccountLike } from "../../types";
import type { Transaction } from "./types";

export default function estimateMaxSpendable({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  account,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  parentAccount,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  transaction,
}: {
  account: AccountLike;
  parentAccount?: Account | null | undefined;
  transaction?: Transaction | null | undefined;
}): Promise<BigNumber> {
  throw new Error("estimateMaxSpendable not implemented for hedera");
}
