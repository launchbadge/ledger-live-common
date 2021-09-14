import { CurrencyNotSupported } from "@ledgerhq/errors";
import { Observable } from "rxjs";
import { Account, SyncConfig } from "../../types";
import { getAccountBalance } from "./api/network";

export default function sync(
  initialAccount: Account,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  syncConfig: SyncConfig
): Observable<(account: Account) => Account> {
  return Observable.create((o) => {
    void async function() {
      try {
        const accountBalance = await getAccountBalance(initialAccount.seedIdentifier);

        o.next((acc: Account) => ({
          ...acc,

          balance: accountBalance.balance,
          spendableBalance: accountBalance.balance,
        } as Account));

        o.complete();
      } catch (err) {
        o.error(err);
      }
    }();
  });
}
