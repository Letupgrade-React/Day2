import React, { useState } from 'react';
import Button  from './Button';
import './style.css';

const App =()=>{
    const [score, setScore] = useState(0)
    const [msg,setMsg]= useState("")

    const plus=()=>{
        setMsg("")
        if(score>=25){
            setMsg("Not exceed 25")
            return
        }
        setScore(score+1)
    }
    const minus= ()=>{
        setMsg("")
        if(score===0){
            setMsg("Not less than zero")
            return
        }
        setScore(score-1)
    }

    return (
        <div>
            <h1 style={{marginTop:200}}>Counter Application Assignment</h1>
            <p>Welcome to React Js Program!.</p>
            <div style={{display: "flex",justifyContent: "center",alignItems: "center"}}>
                <Button onClick={minus} text={<i class="fa fa-minus" aria-hidden="true"></i>}/>
                <Button onClick={()=>{setScore(0); setMsg("")}} text="Reset" />
                <Button onClick={plus} text={<i class="fa fa-plus" aria-hidden="true"></i>}/>                
            </div>
            <h3>Day 2 Assignment</h3> 
            <h3>The value of score is {score}</h3>
            <h3 style={{color:"black"}}>{msg}</h3>
           
        </div>
    )
}
export default App