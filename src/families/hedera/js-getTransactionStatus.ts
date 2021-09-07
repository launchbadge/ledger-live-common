import { CurrencyNotSupported } from "@ledgerhq/errors";
import type { Account, Transaction, TransactionStatus } from "../../types";

export default async function getTransactionStatus(
  account: Account,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  transaction: Transaction
): Promise<TransactionStatus> {
  throw new CurrencyNotSupported("hedera currency not supported", {
    currencyName: account.currency.name,
  });
}
