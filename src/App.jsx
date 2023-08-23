import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
const [count, setCount] = useState(0)

  return (
    <>
      
      <h1>Jime la mejor</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          cuantas veces estas de acuerdo? {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
