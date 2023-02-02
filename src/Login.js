import React, { useState } from "react";

export const Login = (props) => {

    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");

    const handleSubmit = () => {
        console.log(email);
    }

    return (
        <div className="formContainer">
            <h1> Login </h1>

            <form className="login-form" onSubmit={handleSubmit}>

                <label htmlFor="email"> Email </label>
                <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="email@gmail.com" id="email" name="email" />

                <label htmlFor="password"> Password </label>
                <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="******" id="password" />

                <button type="submit"> Login </button>

            </form>

                <h3> Create a New Account.. </h3>
                <button onClick={() => props.onFormSwitch("register")}> Register </button>

        </div>
    )
}

export default Login;