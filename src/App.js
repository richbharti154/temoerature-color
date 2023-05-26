import React,{useState}from "react";
import "./style.css";

export default function App() {
  const[count,setCount]=useState(0)
  let colour
  if(count>=1 &&count>=0){
    colour='red'
  }
  else if(count<0){
    colour='brown'
  }
  function handleclick(){
    setCount(count+1)
  }
  function handleclick1(){
    setCount(count-1)
  }
  return (
    <div style={{backgroundColor:colour}}>
      <h1 className='heading'>Increment and Decrement</h1>
      <p className='count'>{count}</p>
      <button className='incre' onClick={handleclick}>add</button>
      <button className='decre' onClick={handleclick1}>decre</button>
    </div>
  );
}
