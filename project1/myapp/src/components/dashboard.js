import React from "react"
import { Link } from "react-router-dom"

function Dashboard(){
  return(
   <>
   <div className="mainbody">
   <div>
  <div className="center">
            <i>Decorating ultimate rule: Live with what you love</i></div>
            <div className="name"><h1>Home Decor</h1></div>
            <div className="n1"><i>Home should be Treasure chest for living</i></div>
            <div className="n2"><i>The simpler the decor, the better the vibes</i></div>
<div className="style">    
<main class="page-content">
  <div class="card">
    <div class="content">
    <h1 class="title">Design Gallery</h1>
      <p class="copy">Check out all of these gorgeous mountain trips with beautiful views of, you guessed it, the mountains</p>
      <button class="btn">View Trips</button>
    </div>
  </div>
  <div class="card">
    <div class="content">
      <h2 class="title">Bedroom</h2>
      <p class="copy">Plan your next beach trip with these fabulous destinations</p>
      <button class="btn">View Trips</button>
    </div>
  </div>
  <div class="card">
    <div class="content">
      <h2 class="title">LivingRoom</h2>
      <p class="copy">It's the desert you've always dreamed of</p>
      <button class="btn">Book Now</button>
    </div>
  </div>
  <div class="card">
    <div class="content">
      <h2 class="title">Wardrobe</h2>
      <p class="copy">Seriously, straight up, just blast off into outer space today</p>
      <button class="btn">Book Now</button>
    </div>
  </div>
</main>
</div> 

<html>

<head>

</head>

<body>
  <div class="area"></div>
  <nav class="main-menu">
    <ul>
      <li>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <a href="#">
          <i class="fa fa-home fa-2x"></i>
          <span class="nav-text">
           <Link to = "/Hm" ><h2>Home</h2></Link>
          </span>
        </a>

      </li>
      <li class="has-subnav">
        <a href="#">
          <i class="fa fa-globe fa-2x"></i>
          <span class="nav-text">
            <div className="bs">
          <Link to = "/Design"><h2>Design Gallery</h2> </Link>
          </div>
          </span>
        </a>

      </li>
      <li class="has-subnav">
        <a href="#">
          <i class="fa fa-comments fa-2x"></i>
          <span class="nav-text">
          <Link to = "/Bedroom"><h2>Bedroom</h2></Link>

          </span>
        </a>

      </li>
      <li class="has-subnav">
        <a href="#">
          <i class="fa fa-camera-retro fa-2x"></i>
          <span class="nav-text">
          <Link to = "/Warbrobe"><h2>Wardrobe</h2></Link>

          </span>
        </a>

      </li>
      
      
    </ul>

    <ul class="logout">
      <li>
        <a href="#">
          <i class="fa fa-power-off fa-2x"></i>
          <span class="nav-text">
            <Link to = "/Login"><h2>Logout</h2></Link>
          </span>
        </a>
      </li>
    </ul>
  </nav>
</body>

</html>
</div>
</div>
  </>
  )
}
export default Dashboard