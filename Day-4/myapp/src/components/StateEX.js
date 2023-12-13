import React from 'react'
import { useState } from 'react'
const StateEX = ()=>{
    const[data,setData]= useState(0)
const inc = () =>{
    setData(data+1);
}
const dec = ()=>{
    setData(data-1);
}
return(
    <>
     <p>"count: {data}"</p>
    <button onclick ={inc}>
        Increase</button>
        <button onclick ={dec}>
            Decrease
        </button>
        </>
)
}
export default StateEX;
