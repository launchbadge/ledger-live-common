import { CurrencyNotSupported } from "@ledgerhq/errors";
import { Observable } from "rxjs";
import { Account, SyncConfig } from "../../types";

export default function sync(
  initialAccount: Account,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  syncConfig: SyncConfig
): Observable<(account: Account) => Account> {
  throw new CurrencyNotSupported("hedera currency not supported", {
    currencyName: initialAccount.currency.name,
  });
}
