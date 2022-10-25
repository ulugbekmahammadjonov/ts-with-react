import {useState, useRef, useEffect} from 'react'
const users = [
    {
        name:"Alex",
        age:20
    },
    {
        name:"Ulugbek",
        age:22
    },
    {
        name:"Javohir",
        age:19
    }
]
const UserSearch = () => {
    const [name, setName] = useState("")
    const [user, setUser] = useState<{name: string; age: number;} | undefined>()
    const inputRef = useRef<HTMLInputElement | null>(null)
    const onClick = ()=>{
        const findUser = users.find((user) =>{
            return user.name===name
        })
        setUser(findUser)
    }
    useEffect(()=>{
        if(!inputRef.current){
            return
        }
        inputRef.current.focus()
    },[])
  return (
    <div>
        <input ref={inputRef}  value={name} onChange={(e)=>setName(e.target.value)}/>
        <button onClick={onClick}>found</button>
        <div>
            {user && user.name}<br/>
            {user && user.age}

        </div>
    </div>
  )
}

export default UserSearch