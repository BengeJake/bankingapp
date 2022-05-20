import {useState} from 'react'
import React from 'react';
import './App.css';
import RenderMode from './constants/renderModes';
import TransactionBox from './components/TransactionBox';
import PayPage from './pages/payPage';
import Account from './constants/Account';

function App() {

  //declaring use states, defines default values
  const [renderMode, setRenderMode] = useState(RenderMode.OverView)
  const [activeAccount, setActiveAccount] = useState<Account>(new Account("me", 40))
  

  return (
    <div className="App">
      <div className="App-Container">

        <div className='content'> 
            {/* if render mode is OverView or Pay display repective render modes */}
          {renderMode == RenderMode.OverView &&
          activeAccount.getTrasactions().map((transaction)=>{
            return(
              <TransactionBox amount={transaction.amount} name={transaction.name}/>
            )
          })
          }
          {renderMode == RenderMode.Pay &&
          <PayPage activeAccount={activeAccount}/>
          }
        </div>

        <div className='Bottom-Bar'>
          {/* button uses enum to select a render mode*/}
        {renderMode == RenderMode.OverView &&
           <button onClick={()=>setRenderMode(RenderMode.Pay)}>Pay</button>
          }

        {renderMode == RenderMode.Pay &&
           <button onClick={()=>setRenderMode(RenderMode.OverView)}>Back</button>
          }

        </div>             
      </div>
    </div>
  );
}

export default App;
