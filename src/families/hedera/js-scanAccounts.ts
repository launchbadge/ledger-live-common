import { CurrencyNotSupported } from "@ledgerhq/errors";
import { Observable } from "rxjs";
import {
  Account,
  CryptoCurrency,
  DerivationMode,
  DeviceId,
  ScanAccountEvent,
  SyncConfig,
} from "../../types";
import { open, close } from "../../hw";
import {
  getDerivationModesForCurrency,
  runDerivationScheme,
} from "../../derivation";
import getAddress from "../../hw/getAddress";
import BigNumber from "bignumber.js";
import {
  getAccountPlaceholderName,
  emptyHistoryCache,
} from "../../account";
import { getAccountsForPublicKey } from "./api/mirror";

export default function scanAccounts({
  currency,
  deviceId,
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
  var derivationMode = scheme ?? getDerivationModesForCurrency(currency)[0];

  return Observable.create((o) => {
    void async function() {
      let transport;

      try {
        let index = 0;
        let addressPath = runDerivationScheme(derivationMode, currency, { account: index });
        
        transport = await open(deviceId);

        // NOTE: asking for the address in hedera will return only the public key
        let res = await getAddress(transport, {
          currency,
          path: addressPath,
          derivationMode,
        });

        // use a mirror node to ask for any accounts that have
        // this public key registered
        let accounts = await getAccountsForPublicKey(res.publicKey);

        for (let account of accounts) {
          o.next({type: "discovered", account: {
            type: "Account",
            id: `js:2:${currency.id}:${account.accountId}:${derivationMode}`,
            seedIdentifier: account.accountId,
            derivationMode,
            index,
            freshAddress: "", // deprecated
            freshAddressPath: "", // deprecated
            freshAddresses: [], // deprecated
            name: `${currency.name} ${account.accountId}`,
            starred: false,
            used: true,
            currency,
            balance: account.balance ?? new BigNumber(0),
            spendableBalance: account.balance ?? new BigNumber(0),
            operationsCount: 0,
            operations: [],
            swapHistory: [],
            pendingOperations: [],
            unit: currency.units[0],
            creationDate: new Date(),
            lastSyncDate: new Date(),
            blockHeight: 0,
            balanceHistoryCache: emptyHistoryCache,
          } as Account});
        }

        o.complete();
      } catch (err) {
        o.error(err);
      } finally {
        if (transport != null) {
          close(transport, deviceId);
        }
      }
    }();
  });
}
