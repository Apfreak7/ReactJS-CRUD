import React, { useState } from 'react'
import Login from './Login';
// import Alert from 'react-bootstrap'
import Alert from "react-bootstrap/Alert";
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../Css/Registration.css';
import { Link } from 'react-router-dom';

function Registration() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [flag, setFlag] = useState(false);
    const [login, setLogin] = useState(true);

    function formSubmitHandler(e) {
        e.preventDefault();
        if (!name || !email || !password || !phone) {
            setFlag(true)
        } else {
            setFlag(false);
            localStorage.setItem("Email", JSON.stringify(email));
            localStorage.setItem("Password", JSON.stringify(password))


            console.log("saved in local storage")
            setLogin(!login);
        }

    }
    function loginClickHandler() {
        setLogin(!login);
    }

    return (
        <div className='container' style={{height:"90vh"}}>
            <div className='register_wrapper'>
                {login ? (
                    <form onSubmit={formSubmitHandler}>
                        <h1 className='text-center text-primary'>Sign Up</h1>
                        <div className='form-group'>
                            <label htmlFor="">Full Name</label>
                            <input type="text"
                                placeholder='Enter Your Full Name'
                                className='form-control'
                                onChange={(event) => {
                                    setName(event.target.value)
                                }}
                            />

                        </div>
                        <div className='form-group'>
                            <label htmlFor="">Email Id</label>
                            <input type="email"
                                placeholder='Enter Your Email Id'
                                className='form-control'
                                onChange={(event) => {
                                    setEmail(event.target.value)
                                }}
                            />

                        </div>
                        <div className='form-group'>
                            <label htmlFor="">Password</label>
                            <input type="password"
                                placeholder='Enter Your Password'
                                className='form-control'
                                onChange={(event) => {
                                    setPassword(event.target.value)
                                }}
                            />

                        </div>
                        <div className='form-group'>
                            <label htmlFor="">Mobile</label>
                            <input type="number"
                                placeholder='Enter Contact No.'
                                className='form-control'
                                onChange={(event) => {
                                    setPhone(event.target.value)
                                }}
                            />

                        </div>

                        <div className="d-grid mt-4">
                            <Link className='btn btn-primary' type='submit' to="/Home">Submit</Link>
                        </div>
                        <p onClick={loginClickHandler} className="text-primary mt-2 text-center">Already Registered? Login</p>

                        {flag && (
                            <Alert color="primary" varient="danger">Please fill every filled</Alert>
                        )}


                    </form>
                ) : (
                    <Login />
                )}
            </div>
        </div>
    )
}

export default Registration;