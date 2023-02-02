import React, { useState } from "react";

export const Register = (props) => {

    const [ name, setName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ confirmPassword, setConfirmPassword ] = useState("");

    const handleSubmit = () => {
        console.log(email);
    }

    return (
        <div className="formContainer">
            <h1> New Register </h1>

            <form className="register-form" onSubmit={handleSubmit}>

                <label htmlFor="name"> Full Name </label>
                <input onChange={(e) => setName(e.target.value)} type="text" placeholder="eg..John" id="name" name="name" />

                <label htmlFor="email"> Email </label>
                <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="email@gmail.com" id="email" name="email" />

                <label htmlFor="password"> Password </label>
                <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="******" id="password" />
                
                <label htmlFor="confirmPassword"> Confirm Password </label>
                <input onChange={(e) => setConfirmPassword(e.target.value)} type="password" placeholder="******" id="password" />

                <button type="submit"> Submit </button>

            </form>

                <h3> Already have an Account.. </h3>
                <button onClick={() => props.onFormSwitch("login")}> Login </button>


        </div>
    )
}

export default Register;