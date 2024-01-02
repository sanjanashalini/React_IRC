import React from 'react'
import {useState} from 'react'
function Adduser(){
    const[data,setData]=useState({
        username:'',
        password:''
    })
    const handleChange=()=>{
         setData({...data,[e.target]})
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
    }
    return(
    <form>
        <input type = 'text' id = 'username' placeholder='username'/>
        <input type = 'text' id = 'Password' placeholder='Password'/>
        <button type = 'submit' id = 'Password' placeholder='submit'/>

    </form>
    )
}
export default Adduser;