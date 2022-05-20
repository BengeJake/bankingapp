import Transaction from "./Transactions";



class Account{
    //declare variables
    private name: string;
    private balance: number;
    private transactions: Transaction[];

    //constructs instences 
    constructor(name:string, balance:number){
        this.name = name
        this.balance = balance
        this.transactions = []
    }

    //modify's the balanve of the activeAccount
    modifyBalance(modifyer :number){
        this.balance += modifyer
    }

    //pushes the new transaction to the the array
    addTransaction(newTransaction:Transaction){
        this.transactions.push(newTransaction)
    }

    //used to get the transactions for the activeAccount
    getTrasactions(): Transaction[]{
        return this.transactions
    }
    
}

export default Account;