
interface TransactionBoxProps{
    name:string,
    amount:number
}

function TransactionBox(props:TransactionBoxProps){
    return(

        <div className="Transaction-Box">
            <div>{props.name}</div>
            {/* inline if stmt for color changing with amount */}
            <div style={{color: props.amount >=0 ? 'green':'red'}}>£{props.amount}</div>
            
        </div>
    )
}

export default TransactionBox;