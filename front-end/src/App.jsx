
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
function App() {
const [jocks, setJocke] = useState([])

useEffect(()=>{
  axios.get('/api/jock')
  .then((Response)=>{
    setJocke(Response.data)
  }
  )
  .catch((Error)=>{
    console.log(Error)
  })
})

  return (
    <>
     <p>Jocks:{jocks.length}</p>
     {  
      jocks.map((jock,index)=>(
        <div key={jock.id}>
          <h1 >{jock.title}</h1>
          <p>{jock.cons}</p>

        </div>
      ))
     }
    </>
  )
}

export default App
