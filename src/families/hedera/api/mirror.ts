import BigNumber from "bignumber.js";
import network from "../../../network";
import URL from "url";
import { getAccountBalance } from "./network";

const fetch = (path, query = {}) =>
  network({
    type: "get",
    url: URL.format({
      pathname: `https://mainnet-public.mirrornode.hedera.com/api/v1${path}`,
      query,
    }),
  });

export interface Account {
    accountId: string;
    balance: BigNumber;
}

export async function getAccountsForPublicKey(publicKey: string): Promise<Account[]> {
  let r = await fetch("/accounts", { "account.publicKey": publicKey });
  let rawAccounts = r.data.accounts;
  let accounts: Account[] = [];

  for (let raw of rawAccounts) {
    let accountBalance = await getAccountBalance(raw.account);
    
    accounts.push({
      accountId: raw.account,
      balance: accountBalance.balance,
    });
  }

  return accounts;
}
