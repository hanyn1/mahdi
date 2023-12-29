import React from 'react'
import { useNavigate } from 'react-router-dom'
export default function Home() {
    const navig=useNavigate()
  return (
    <div>
      <h1>players</h1>
      <button onClick={()=>{navig('/team')}}>Click</button>
      <h1>team</h1>
      <button onClick={()=>{navig('/players')}}>click</button>

    </div>
  )
}
