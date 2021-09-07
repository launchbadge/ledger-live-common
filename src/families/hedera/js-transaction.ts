import { CurrencyNotSupported } from "@ledgerhq/errors";
import type { Account } from "../../types";
import type { Transaction } from "./types";

export function createTransaction(account: Account): Transaction {
  throw new CurrencyNotSupported("hedera currency not supported", {
    currencyName: account.currency.name,
  });
}

export function updateTransaction(
  transaction: Transaction,
  patch: Partial<Transaction>
): Transaction {
  return { ...transaction, ...patch } as unknown as Transaction;
}

export async function prepareTransaction(
  account: Account,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  transaction: Transaction
): Promise<Transaction> {
  throw new CurrencyNotSupported("hedera currency not supported", {
    currencyName: account.currency.name,
  });
}
