import React, { useState } from 'react'

const GuestList = () => {
    const [name, setName] = useState("")
    const [guests, setGuests] = useState<string[]>([])
    const addGuest = ()=>{
        setName("")
        setGuests([...guests,name])
    }
  return (
    <div>
        <h1>GuestList</h1>
        <input type="text" onChange={(e)=>setName(e.target.value)}/>
        <button onClick={addGuest}>Add Guest</button>
        <ul>
            {guests.map((guest)=><li key={guest}>{guest}</li>)}
        </ul>
    </div>
  )
}

export default GuestList