import React from "react";

const Login = () => {
  return (
    <section className="center-box">
      <div class="wrapper">
        <h2>Login</h2>
        <form action="#">
          <div class="input-box">
            <input type="text" placeholder="Enter your email" required />
          </div>
          <div class="input-box">
            <input type="password" placeholder="Ppassword" required />
          </div>

          <div class="input-box button">
            <input type="Submit" value="Login" />
          </div>
          <div class="text"></div>
        </form>
      </div>
    </section>
  );
};

export default Login;
