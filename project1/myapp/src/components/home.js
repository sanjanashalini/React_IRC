import React, { useState } from 'react';

const Home = () => {
  const [showMessage, setShowMessage] = useState(false);
  const[data,setData] = useState({
    username :'',
    password : ''
  })
  const toggle= () => {
    setShowMessage(!showMessage);
  }
  const Login=(e)=>{
    e.preventDefault();
    alert(data.username + data.password)}
  const handleChange=(e)=>{
    setData({...data,[e.target.id]:e.target.value})
  }

  return (
    <div>
    <div className="home">
      <header>
        <h1>ADVENX HOME DECOR</h1>
        <nav>
          <ul>
            <li><a href="#products">Services</a></li>
            <li><a href="#categories">Interior designs</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#Login" onClick={toggle}>Login</a></li>
            <li><a href="#sign up" onClick={toggle}>Sign up</a></li>
          </ul>
        </nav>
      </header>
      { showMessage? 
      (
        <div class = "bg-container">
        <div className = "container1 shadow" id = "bg-container">
          <form className = "d-flex flex-row justify-content-center">
              <h2>Login</h2>
              <input type = "email" id = "email1" name = "" placeholder="EMAIL" onChange={handleChange} class ="input_style"/>
              <input type = "password" id = "pwd1" name = "" placeholder="PASSWORD" onChange={handleChange} class ="input_style"/>
              <div class = "button-design">
               <input  type = "submit" value= "Login" onClick={toggle} class = "button"/>
               <input  type = "submit" value= "Cancel"  class = "button"/>
               </div>
          </form>
  </div>
  </div>
   ):('')}
  { showMessage? 
    (
      <div class = "bg-container">
      <div className = "container1 shadow" id = "bg-container">
        <form className = "d-flex flex-row justify-content-center">
            <h2>Sign up</h2>
            <input type = "email" id = "email1" name = "" placeholder="EMAIL" onChange={handleChange} class ="input_style"/>
            <input type = "text" id = "name" name = "" placeholder="Name" onChange={handleChange} class ="input_style"/>
            <input type = "Password" id = "pwd" name = "" placeholder="Password" onChange={handleChange} class ="input_style"/>
            <input type = "Password1" id = "pwd1" name = "" placeholder="Confirm-Password" onChange={handleChange} class ="input_style"/>
      
            <div class = "button-design">
              <div className="lo">
             <input  type = "submit" value= "Login" onClick={toggle} class = "button"/>
             </div>
             <input  type = "submit" value= "Cancel"  class = "button"/>
             </div>
        </form>
</div>
</div>

      ):('')}
    
      <section className="hero">
        <h2>Bring home beautiful interiors that fit your budget</h2>
        <p>Experience unmatched quality & timely delivery with Livspace</p>
        <a href="#products" className="btn">Explore Designs</a>
      

     <section id="products" className="product-list">
        
        <div className="product">
            <div className='card1'>
                <img className="image1" src = "https://media.designcafe.com/wp-content/uploads/2020/11/13130440/rustic-home-decor.jpg"/>
                <button class="cssbuttons-io-button">
  Get started
  <div class="icon">
    <svg
      height="24"
      width="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 0h24v24H0z" fill="none"></path>
      <path
        d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
        fill="currentColor"
      ></path>
    </svg>
  </div>
</button>

            </div>
        </div>
        <div className="product">
            <div className='card1'>
                <img className="image1" src = "https://media.designcafe.com/wp-content/uploads/2022/09/16092055/cheap-room-decor-ideas.jpg"/>
                <button class="cssbuttons-io-button">
  Get started
  <div class="icon">
    <svg
      height="24"
      width="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 0h24v24H0z" fill="none"></path>
      <path
        d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
        fill="currentColor"
      ></path>
    </svg>
  </div>
</button>

            </div>
        </div>
        <div className="product">
            <div className='card1'>
                <img className="image1" src = "https://www.thespruce.com/thmb/oaZuYYgYJb5BLjSqpMj8LZzh09g=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/IndianAve-134-af033b5334674735acdb36cd6498a7f6.jpg"/>
                <button class="cssbuttons-io-button">
  Get started
  <div class="icon">
    <svg
      height="24"
      width="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 0h24v24H0z" fill="none"></path>
      <path
        d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
        fill="currentColor"
      ></path>
    </svg>
  </div>
</button>

            </div>
        </div>
        <div className="product">
            <div className='card1'>
                <img className="image1" src = "https://i.pinimg.com/564x/49/d4/1f/49d41f7a30ede5497b73f0f9525522a3.jpg"/>
                <button class="cssbuttons-io-button">
  Get started
  <div class="icon">
    <svg
      height="24"
      width="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 0h24v24H0z" fill="none"></path>
      <path
        d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
        fill="currentColor"
      ></path>
    </svg>
  </div>
</button>

            </div>
        </div>
      </section>
      </section>
      
      
    </div>
    
    </div>
    
  );
};

export default Home;