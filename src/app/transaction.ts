import { Amount } from "./amount";
import { Balance } from "./balance";

export class Transaction {
    CreditDebitIndicator: string;
    TransactionInformation: string;
    Amount: Amount;
    Balance: Balance;
}
