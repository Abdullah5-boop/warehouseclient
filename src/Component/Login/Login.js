import React, { useContext, useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from '../../App';
import auth from '../../Firebase.init';
import CustomHook from '../CustomHook';
import "../Register/Register.css"
const Login = () => {
    let navigate = useNavigate();
    let location = useLocation();


    let from = location.state?.from?.pathname || "/";
    const [User, setuser] = useContext(UserContext)
    const [email, setemail] = useState([]);
    const [password, setpassword] = useState([]);
    const [errors, seterrors] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(email, password)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log("Log In ", user)
                setuser(user)
                navigate(from,{replace:true})
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(error)
                seterrors(error)
            });


    }
    if (User) {
        navigate('/profile')
    }
    return (
        <div>
            <div className='container'>
                <h2 className='text-center m-5'>Sign in</h2>
                <div className='row d-flex justify-content-center align-items-center border border-1 p-lg-5 mb-5 '>
                    <div className='col-12 col-lg-6 img-container'>
                        <img className=' img-fluid' src="https://i.ibb.co/pnNz5rn/ruchindra-gunasekara-GK8x-XCc-DZg-unsplash-1.jpg" alt="" />
                    </div>
                    <div className='col-1 bar'></div>
                    <div className='col-lg-5 col-11'>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label className="form-label"><h5>Email address</h5></label>
                                <input name='Email' onBlur={(event) => { setemail(event.target.value) }} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label"><h5>Password</h5></label>
                                <input onBlur={(event) => { setpassword(event.target.value) }} name='Password' type="password" className="form-control" id="exampleInputPassword1" />
                            </div>

                            <div className='d-flex justify-content-between'>
                                <div className='d-flex justify-content-between'>
                                    <button type="submit" className="btn btn-primary">Log In</button>
                                </div>
                            </div>
                        </form>

                    </div>
                </div>
            </div>        </div>
    );
};

export default Login;