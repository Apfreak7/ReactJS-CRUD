import React, { useState } from 'react'
import Alert from "react-bootstrap/Alert";
import Home from './Home'
import '../../Css/Registration.css'
import { Link } from 'react-router-dom';

function Login() {
    const [emailLogin, setEmailLogin] = useState("")
    const [passwordLogin, setPasswordLogin] = useState("")
    const [flag, setFlag] = useState(false);
    const [home, setHome] = useState(true);


    function loginSubmitHandler(event) {
        event.preventDefault();
        let mail = localStorage.getItem("Email").replace(/"/g, "");
        let pass = localStorage.getItem("Password").replace(/"/g, "");

        if (!emailLogin || !passwordLogin) {
            setFlag(true);
            console.log("Empty")
        } else if (passwordLogin !== pass || emailLogin !== mail) {
            setFlag(true);

        } else {
            setHome(!home)
            setFlag(false)
        }

    }
    return (
        <div className='container' style={{height:"80vh"}}>
            <div className="login_wrapper">
                {home ? (
                    <form action="" onSubmit={loginSubmitHandler}>
                        <h2 className='text-primary text-center'>Login</h2>
                        <div className='form-group'>
                            <label htmlFor=""> Email</label>
                            <input type="email"
                                placeholder='Enter Your Email'
                                className='form-control'
                                onChange={(event) => {
                                    setEmailLogin(event.target.value)
                                }}
                            />

                        </div>
                        <div className='form-group'>
                            <label htmlFor=""> Password</label>
                            <input type="password"
                                placeholder='Enter Password'
                                className='form-control'
                                onChange={(event) => {
                                    setPasswordLogin(event.target.value)
                                }}
                            />

                        </div>
                        <div className="d-grid mt-3">
                            <button className='btn btn-primary'>Login</button>
                        </div>

                        {flag && (
                            <Alert color="primary" varient="danger">Please fill Correct Details </Alert>
                        )}
                    </form>

                ) : (
                    <Home />
                )}
            </div>
        </div>
    )
}

export default Login;