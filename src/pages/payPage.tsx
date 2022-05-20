import {useState} from 'react';
import Account from '../constants/Account';
import Transaction from '../constants/Transactions'

interface PayPageProps{
    activeAccount:Account;
}


function PayPage(props : PayPageProps){

    //declares usestates and define default values
    const [name, setName] =useState<string>("")
    const [amount, setAmount] =useState<number>(0)

    //adds the transaction to the array
    function addNewTransaction(){
        //variable to hold the transaction
        let newTransaction : Transaction= {name:name, amount:amount}

        //uses addTrasaction to add the newTransaction to the Account
        props.activeAccount.addTransaction(newTransaction)

        //sets the values after use to defaults
        setAmount(0)
        setName("")
    }

    return(
        <div className='App-Container'>
            <div className='content'>
                <h1>PAY EM MONEY!</h1>
                {/* captures the inputs and validates in line */}
                <input value={name} onChange={(e)=> setName(e.target.value)} placeholder="Name"></input>                
                <input type="number" value={amount} onChange={(e)=> setAmount(Number(e.target.value.replace(/\D/,"")))} placeholder="Amount"></input>

                {/* calls addTransaction function */}
                <button onClick={addNewTransaction}>Confirm</button>
            </div>
            
        </div>
    )
}

export default PayPage;