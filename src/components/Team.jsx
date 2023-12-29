import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Data from '../database/Data';
import Addteam from './Addteam';
export default function Team() {
    const [jeu,setJeu]=useState(Data)
    const handle=(newTeam)=>{
        const mike=[...jeu,{...newTeam,id:jeu.length+1}]
        setJeu(mike)
    }
  return (
    <div>
        <Addteam onAdd={handle}/>
        {jeu.map((arr)=>(
   <div class="card" style={{width: "250px"}} key={arr.id}>
  <img class="card-img-top" src={arr.image} alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">{arr.name}</h5>
    <p class="card-text">{arr.team}</p>
    
  </div>
</div>
   
  )
  ) 
}
</div>
)
}
