import React, { useState } from 'react';

const WelcomeToggle = () => {
  const [showMessage, setShowMessage] = useState(false);
  const[data,setData] = useState({
    username :'',
    password : ''
  })
  const toggle= () => {
    setShowMessage(!showMessage);
  };
  const Login=(e)=>{
    e.preventDefault();
    alert(data.username + data.password)}
  const handleChange=(e)=>{
    setData({...data,[e.target.id]:e.target.value})
  }
  return (
    <div>
      <div className="navbar">
        
        <ul className="navlinks">
          <li className="nav-text">
            Home
          </li>
          <li className="nav-text">
             About
          </li>
          <li className="nav-text">
            Contact
          </li>
          <li  className="nav-text" onClick={toggle}>
            Login
          </li>
        </ul>
      </div>
      {showMessage? (
            <div className = "container shadow" id = "bg-container">
              <form className = "d-flex flex-row justify-content-center">
                  <h2>REGISTERATION FORM </h2>
                  <input type = "text" id = "userName" name = "" placeholder="NAME" class ="input_style"/>
                 
                  <input type = "email" id = "email" name = "" placeholder="EMAIL" class ="input_style"/>
                  
                  <input type = "password" id = "pwd1" name = "" placeholder="PASSWORD" class ="input_style"/>
                 
                  <input type = "number" id = "number" name = "" placeholder="NUMBER" class ="input_style"/>
              
                   <input type = "submit" value= "Register" onClick={toggle} class = "button"/>
              </form>
      </div>
      ):('')}
    </div>
  );
};

export default WelcomeToggle;