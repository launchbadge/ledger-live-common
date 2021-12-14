import { calculateAmount } from "../../../families/hedera/utils";
import { Account } from "../../../types";
import { Transaction } from "../../../families/hedera/types";
import BigNumber from "bignumber.js";

const account: Account = {
    type: "Account",
    id: "",
    seedIdentifier: "",
    derivationMode: "",
    index: 0,
    freshAddress: "",
    freshAddressPath: "",
    freshAddresses: [],
    name: "",
    starred: false,
    used: false,
    balance: new BigNumber(200000),
    spendableBalance: new BigNumber(0),
    creationDate: new Date(),
    blockHeight: 0,
    currency: {
        type: "CryptoCurrency",
        id: "",
        managerAppName: "",
        coinType: 0,
        scheme: "",
        color: "",
        family: "",
        explorerViews: [],
        name: "",
        ticker: "",
        units: []
    },
    operationsCount: 0,
    operations: [],
    pendingOperations: [],
    lastSyncDate: new Date(),
    balanceHistoryCache: undefined,
    swapHistory: []
};

const transaction: Transaction = {
    family: "hedera",
    amount: new BigNumber(1),
    recipient: "",
    useAllAmount: undefined
};

const estimatedFees = new BigNumber("83300");

describe("calculateAmount", () => {
    test("transaction.useAllAmount = true", () => {
        transaction.useAllAmount = true;

        const result = calculateAmount({
            account,
            transaction
        });

        const amount = account.balance.minus(estimatedFees.multipliedBy(2));
        const totalSpent = amount.plus(estimatedFees);
        const data = {
            estimatedFees,
            amount,
            totalSpent
        };

        expect(result).toEqual(data);
    });

    test("transaction.useAllAmount = false", () => {
        transaction.useAllAmount = false;

        const result = calculateAmount({
            account,
            transaction
        });

        const amount = transaction.amount;
        const totalSpent = amount.plus(estimatedFees);
        const data = {
            estimatedFees,
            amount,
            totalSpent
        };

        expect(result).toEqual(data);
    });
});
