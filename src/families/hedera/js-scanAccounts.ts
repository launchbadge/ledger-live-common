import { CurrencyNotSupported } from "@ledgerhq/errors";
import { Observable } from "rxjs";
import {
  CryptoCurrency,
  DerivationMode,
  DeviceId,
  ScanAccountEvent,
  SyncConfig,
} from "../../types";

export default function scanAccounts({
  currency,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  deviceId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  scheme,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  syncConfig,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  preferredNewAccountScheme,
}: {
  currency: CryptoCurrency;
  deviceId: DeviceId;
  scheme?: DerivationMode | null | undefined;
  syncConfig: SyncConfig;
  preferredNewAccountScheme?: DerivationMode;
}): Observable<ScanAccountEvent> {
  throw new CurrencyNotSupported("hedera currency not supported", {
    currencyName: currency.name,
  });
}
