import React from "react";
import {useState} from "react";
import Swal from 'sweetalert2'
import 'bootstrap/dist/css/bootstrap.css';


export default function Addteam({onAdd}) {
    const [newTeam,setNewTeam]=useState({
        name:'',
        team:'',
        image:'',
    })
    const handle=()=>{

        if (newTeam.name.trim() === '' 
        || newTeam.team.trim() === '' || 
        newTeam.image.trim() === '' ) {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Please fill in all fields!',
            });
            return;
          }
          onAdd(newTeam)
    setNewTeam({
        name:"",
        team:"",
        image:""
    })
    Swal.fire({
        icon: 'success',
        title: 'team Added!',
        showConfirmButton: false,
        timer: 1500, // Automatically close after 1.5 seconds
      })
    }
  return (
    <div>
      <h1 style={{color:'red'}}>Add new Team</h1>
      <form >
      <div className="mb-3">
          <label htmlFor="inputName" className="form-label">
          Name
          </label>
          <input
            type="text"
            id="inputName"
            className="form-control"
            aria-describedby="nameHelpBlock"
            value={newTeam.name}
            onChange={(e) => setNewTeam({ ...newTeam, name: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="inputName" className="form-label">
      team
      </label>
          <input
            type="text"
            id="inputColor"
            className="form-control"
            aria-describedby="nameHelpBlock"
            value={newTeam.team}
            onChange={(e) => setNewTeam({ ...newTeam, team: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="inputName" className="form-label">
          image
          </label>
          <input
            type="text"
            id="inputImage"
            className="form-control"
            aria-describedby="nameHelpBlock"
            value={newTeam.image}
            onChange={(e) => setNewTeam({ ...newTeam, image: e.target.value })}
          />
        </div>
        <button className="btn btn-primary" type="button" onClick={handle}>
          Add team
          </button>
      </form>
    </div>
  )
}
  

