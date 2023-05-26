import React,{useState}from "react";
import "./style.css";
export default function App() {
  const arr=['red','green','yellow','black','brown']
  const[count,setCount]=useState(0)
  const[color,setColor]=useState('white')
  function handleClick2(element){
    setColor(element)
  }
  let colour
  if(count>=1 &&count>=0){
    colour='red'
  }
  else if(count<0){
    colour='brown'
  }
  function handleclick(){
    setCount(count+1)
    console.log(count+1)
  }
  function handleclick1(){
    setCount(count-1)
  }
  return (
    <>
    <div style={{backgroundColor:colour}}>
      <h1 className='heading'>Increment and Decrement</h1>
      <p className='count'>{count}</p>
      <div className='container'>
      <button className='incre' onClick={handleclick}>add</button>
      <button className='decre' onClick={handleclick1}>decre</button>
    </div>
    <div  style={{backgroundColor:color,margin:'20px'}}>
      {arr.map((element)=><p className='change'><button className='button' onClick={()=>handleClick2(element)}>{element}
      </button></p>)}
      </div>
      </div>
      </>
  );
}
