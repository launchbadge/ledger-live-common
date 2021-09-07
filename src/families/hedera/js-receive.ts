import { CurrencyNotSupported } from "@ledgerhq/errors";
import type { Observable } from "rxjs";
import { Account } from "../../types";

export default function receive(
  account: Account,
  {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    verify,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    deviceId,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    subAccountId,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    freshAddressIndex,
  }: {
    verify?: boolean;
    deviceId: string;
    subAccountId?: string;
    freshAddressIndex?: number;
  }
): Observable<{
  address: string;
  path: string;
}> {
  throw new CurrencyNotSupported("hedera currency not supported", {
    currencyName: account.currency.name,
  });
}
