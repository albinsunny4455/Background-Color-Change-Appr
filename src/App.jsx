import { useState } from 'react'
import './App.css'

function App() {
 const [color, setColor] = useState("olive")

  return (
    <div style={{ minHeight: '100vh', width: '100%', backgroundColor: color }} className='d-flex justify-content-center align-items-center flex-column '>
      <div className='border-0 rounded-2 p-5 bg-light'>
        <h1 >Background Color Changer</h1>
        <div  className='d-flex justify-content-center align-items-center m-5'>
          <button onClick={() => setColor("blue")}  className='btn btn-primary me-4 text-light'> Blue</button>
          <button onClick={() => setColor("red")}  className='btn btn-danger me-4'>Red</button>
          <button onClick={() => setColor("green")}  className='btn btn-success me-4'>Green</button>
          <button onClick={() => setColor("#800080")}  style={{backgroundColor: '#800080', color: 'white', border: '0px', borderRadius: '5px', padding: '7px 10px'}}  className='me-4'>Purple</button>
          <button onClick={() => setColor("yellow")}  className='btn btn-warning me-4'>Yellow</button>
  
      </div>
      </div>
    </div>
  )
}

export default App
