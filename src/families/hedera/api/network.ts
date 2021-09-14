import BigNumber from "bignumber.js";
import { Client, AccountBalanceQuery, HbarUnit } from "@hashgraph/sdk";

export interface AccountBalance {
    balance: BigNumber;
}

export async function getAccountBalance(accountId: string): Promise<AccountBalance> {
    let accountBalance = await new AccountBalanceQuery({ accountId }).execute(getClient());

    return {
        balance: accountBalance.hbars.to(HbarUnit.Tinybar),
    };
}

let _hederaBalanceClient: Client | null = null;

function getClient(): Client {
    _hederaBalanceClient ??= Client.forMainnet();
    return _hederaBalanceClient;
}
