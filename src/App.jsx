import { useState } from 'react'

import './App.css'

function App() {
  //COUNTER
  const [count, setCount] = useState(0)
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isActive, setIsActive] = useState(false);

  function increment(){
    setCount(count + 1)
  }

  function decrease(){
    setCount(count-1)
  }

  function showResult(){
    setIsActive(true)
  }

  return (
    <>
     {/* COUNTER */}
     <h3 className='text-center'>Counter</h3>
      <section className='d-flex justify-content-center align-items-center'>
        <div className='d-flex gap-5'>
          
          <button onClick={decrease}>-</button>
          <span>{count}</span>
          <button onClick={increment}>+</button>
        </div>
      </section>
      
      {/* FORM REGISTRAZIONE */}
      <h3 className='text-center'>FORM</h3>
      <section >
      <div  className={`${!isActive ? 'd-block text-center d-flex justify-content-center p-5' : 'd-none'}`}>
        <form action="">
            <input 
            value={name} type="text" 
            required
            maxLength={10}
            placeholder='Nickname'
            onChange={(e) => setName(e.target.value)}
            />
            <input 
            value={email} type="email" 
            required
            placeholder='e-mail'
            onChange={(e) => setEmail(e.target.value)}
            />
            <input 
            type="password" 
            placeholder='password'
            />
        </form>
      <button onClick={showResult} className='btn btn-primary mx-2'> REGISTRATI </button>
      </div>

       <div 
          className={`${isActive ? 'd-block text-center p-5' : 'd-none'}`}>
          Complimenti {name} ti sei registrato!, controlla la mail: {email}, troverai la tua password! 
      </div>
      </section>
      
    </>
  )
}

export default App
