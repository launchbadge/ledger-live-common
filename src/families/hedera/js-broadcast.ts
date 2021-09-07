import { CurrencyNotSupported } from "@ledgerhq/errors";
import { Account, Operation, SignedOperation } from "../../types";

export default async function broadcast({
  account,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  signedOperation,
}: {
  account: Account;
  signedOperation: SignedOperation;
}): Promise<Operation> {
  throw new CurrencyNotSupported("hedera currency not supported", {
    currencyName: account.currency.name,
  });
}
