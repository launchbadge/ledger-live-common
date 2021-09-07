import { CurrencyNotSupported } from "@ledgerhq/errors";
import { Observable } from "rxjs";
import { Account, DeviceId, SignOperationEvent } from "../../types";
import { Transaction } from "./types";

export default function signOperation({
  account,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  transaction,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  deviceId,
}: {
  account: Account;
  transaction: Transaction;
  deviceId: DeviceId;
}): Observable<SignOperationEvent> {
  throw new CurrencyNotSupported("hedera currency not supported", {
    currencyName: account.currency.name,
  });
}
