interface ChildrenProps{
  color:string,
  onClick:()=>void,
  name: string,
  age:number
}

export const Children = ({color, onClick, name, age}:ChildrenProps) => {
  return (
    <div>
     <p>{color}</p>
     <button onClick={onClick}>click me</button>
     <h2>Ismi:{name}</h2>
     <h3>yosh:{age}</h3>
    </div>
  )
}
export const Child2 =()=>{
    return(
        <div>
            child2
        </div>
    )
}

