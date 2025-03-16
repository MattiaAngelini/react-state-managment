import { useState } from 'react'

import './App.css'

function App() {
  //COUNTER
  const [count, setCount] = useState(0)

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  function increment(){
    setCount(count + 1)
  }

  function decrease(){
    setCount(count-1)
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
      <section className='d-flex justify-content-center align-items-center'>
       <form action="" method="POST">
        <input 
        value={name} type="text" 
        onChange={(e) => setName(e.target.value)}
        />
         <input 
        value={email} type="email" 
        onChange={(e) => setEmail(e.target.value)}
        />
         <input 
        value={password} type="password" 
        onChange={(e) => setPassword(e.target.value)}
        />
        <button className='btn btn-primary mx-2'> REGISTRATI </button>
       </form>
      </section>
      
    </>
  )
}

export default App
