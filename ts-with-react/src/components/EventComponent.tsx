import React from 'react'

const EventComponent = () => {
  const OnChange = (event:React.ChangeEvent<HTMLInputElement>)=>{
    console.log(event.target.value)
  }
  const onDragStart = (event:React.DragEvent<HTMLDivElement> )=>{
    console.log("dargged");
    
  }
  return (
    <div>
      <input onChange={OnChange} />
      <div draggable onDragStart={onDragStart}>Drag Me</div>
    </div>
  )
}

export default EventComponent