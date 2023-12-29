import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Data2 from '../database/Data2';




export default function Players() {
  return (
    <div>
         {Data2.map((arr)=>(
   <div class="card" style={{width: "18rem;"}}key={arr.id}>
  <img class="card-img-top" src={arr.image} alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">{arr.creator}</h5>
    <p class="card-text">{arr.owner}</p>
    <p class="card-text">{arr.birth}</p>
    
      
    </div>
    </div>
  )
  )
}
</div>
)
}

