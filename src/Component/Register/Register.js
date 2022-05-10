import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../App';
import auth from '../../Firebase.init';
import CustomHook from '../CustomHook';
import MediaSignin from './MediaSignin';
import "./Register.css"

const Register = () => {
    const { handleGooglesignin } = CustomHook();
    const [User, setuser] = useContext(UserContext)
    const [email, setemail] = useState([]);
    const [password, setpassword] = useState([]);
    const [confirm, setconfirm] = useState([]);
    const [errors, seterrors] = useState("");
    const navigate = useNavigate()
    const handleSubmit = (event) => {
        event.preventDefault()
        // const email=event.target.Email.value;
        // const password=event.target.Password.value;
        console.log(email, password)
        if (password === confirm) {
            try {
                createUserWithEmailAndPassword(auth, email, password)
                    .then(result => {
                        console.log(result.user)
                        setuser(result.user)
                    })
                    .catch(error => {
                        console.log(error)
                    })
            }
            finally {
                navigate('/profile')
            }
        }
        else {
            seterrors("Password does't match ")
        }
    }


    useEffect(() => {
        onAuthStateChanged(auth, (User) => {
            if (User) {

                const uid = User.uid;
                console.log(uid)
                setuser(User)
                navigate('/profile')

            } else {

            }
        })
    }, [])

    return (
        <div className='container'>
            <h2 className='text-center m-5'>Register Now</h2>
            <div className='row d-flex justify-content-center align-items-center border border-1 p-lg-5 mb-5 '>
                <div className=' col-12 col-lg-6 img-container'>
                    <img className=' img-fluid' src="https://i.ibb.co/pnNz5rn/ruchindra-gunasekara-GK8x-XCc-DZg-unsplash-1.jpg" alt="" />
                </div>
                <div className='col-lg-1 bar'></div>
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
                        <div className="mb-3">
                            <label className="form-label"><h5>Confirm Password</h5></label>
                            <input onBlur={(event) => { setconfirm(event.target.value) }} name='ConfirmPassword' type="password" className="form-control" />
                        </div>
                        <div className='d-flex justify-content-between'>
                            {
                                errors ? <small style={{ color: "red" }}>Passworld doesn't match</small> : ""
                            }
                            <div className='d-flex justify-content-between'>
                                <button type="submit" className="btn btn-primary">Create</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className='d-flex justify-content-center mb-5'>
                <div className=' d-flex align-items-center justify-content-center border p-3 socialcontainer'>
                    <img className='img-fluid mx-2  social' src="https://i.ibb.co/Gdm5KPH/google-logo-icon-png-transparent-background-osteopathy-16.png" alt="" />
                    <h3 onClick={handleGooglesignin}>google</h3>
                </div>
            </div>
        </div>
    );
};

export default Register;