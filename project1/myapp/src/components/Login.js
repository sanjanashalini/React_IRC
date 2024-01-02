import { Link } from 'react-router-dom';
import React from 'react';


function Login() {
    return (
       <>
 <div className='header1'>
<section class="login-form-wrap">
  <h1>Login</h1>
  <form class="login-form" action="POST" value="#">
    <label>
      <input type="email" name="email" required placeholder="Email"/>
    </label>
    <label>
      <input type="password" name="password" required placeholder="Password"/>
    </label>
    <Link to = "/Dashboard"><input type="submit" value="Login"/></Link>
  </form>
  <h5><a href="#">Forgot password</a></h5>
</section>
</div>
</>
    )
}
export default Login;