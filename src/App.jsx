// import { useState, useReducer } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './redux/counterSlice.js'
import { useReducer, useState} from 'react';
import './App.css'

// REDUCER
function counterReducer(state,action){
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREASE":
      return state - 1;
    default:
      return state;
  }
}

function App() {
  //COUNTER useState
  const [count, setCount] = useState(0)
  function incrementState(){
    setCount(count + 1)
  }
  function decreaseState(){
    setCount(count-1)
  }

  //COUNTER useReducer
  //Creo funzione reducer, che ha delle azioni in base ad un 'type' - gestito con switch/case.
  //Creo funzioni da applicare a due diversi bottoni del dom, che gestiscono stesso stato ma con azioni diverse, 
  //Il tipo di azioni specificato è gestito con il 'type' scritto nel dispatch. (inizializzati nel reducer)
  const [counter2, dispatchCountReducer] = useReducer(counterReducer, 0 )
 
  function increment2(){
    dispatchCountReducer({type:'INCREMENT'})
  }
  function decrement2(){
    dispatchCountReducer({type: 'DECREASE'})
  }

  //COUNTER redux
  const counter3 = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <>
     {/* COUNTER con UseState  */}
     <h3 className='text-center'>Counter useEffect</h3>
      <div className='d-flex justify-content-center align-items-center'>
        <div className='d-flex gap-5'>
          
          <button onClick={decreaseState}>-</button>
          <span>{count}</span>
          <button onClick={incrementState}>+</button>
        </div>
      </div>/

     {/* COUNTER con Reducer */}
     <h3 className='text-center'>Counter useReducer</h3>
      <div className='d-flex justify-content-center align-items-center'>
        <div className='d-flex gap-5'>
          
          <button onClick={decrement2}>-</button>
          <span>{counter2}</span>
          <button onClick={increment2}>+</button>
        </div>
      </div>

      {/* COUNTER con Redux  */}
     <h3 className='text-center'>Counter Redux</h3>
      <div className='d-flex justify-content-center align-items-center'>
        <div className='d-flex gap-5'>          
          <button  onClick={() => dispatch(decrement())}>-</button>
          <span>{counter3}</span>
          <button  onClick={() => dispatch(increment())}>-</button>

        </div>
      </div>
    </>
  )
}

export default App
