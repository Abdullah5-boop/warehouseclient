import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/esm/Button';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../App';
import CustomHookHome from '../Home/CustomHookHome';
import ServiceView from '../Serveces/ServiceView';
import Order from './OrderView/Order';
import Shopview from './Shopview';
// import CustomServiceHook from '../Serveces/CustomServiceHook';

const Profile = () => {
    const navigate = useNavigate();
    const [User, setuser] = useContext(UserContext)
    const [products, setproducts] = CustomHookHome()
    const [orders, setorders] = useState([])
    const [errors, seterrors] = useState(false)
    const Additems = (id) => {
        const order = products.find(data => data._id === id)
        let newoder = [...orders, order]
        setorders(newoder)
    }
    console.log(User)
    const deleteitems = (id) => {
        const reneworder = orders.filter(data => data._id !== id)
        // console.log(reneworder)
        setorders(reneworder)
    }
    const handleConfirm = () => {
        //    console.log("this is from confirm")
        // const a=JSON.stringify(orders)
        if (!User) {
            seterrors(true)
        }
        const allorder = { orders: orders, user: User.email }
        console.log(allorder)
        fetch("https://mysterious-savannah-05952.herokuapp.com/profile",
            {
                headers: { 'Content-Type': 'application/json' },
                method: "put",
                body: JSON.stringify(allorder)
            })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(error => { console.log(error) })
        console.log(User.email)
        navigate(`/order/${User.email}`)
        // console.log(allorder)
    }

    const handleOrder = (event) => {
        if (!User) {
            seterrors(true)
        }
        event.preventDefault()
        navigate(`/order/${User.email}`)
    }
    return (
        <div className='container'>
            <div>

                <h4 className='text-center mb-4'>product added : {orders?.length} </h4>
                <div className='text-end'>
                    <button className='btn btn-warning' onClick={handleOrder}>Your order</button>
                </div>
                <div className=''>
                    {orders.map(data => <Order deletebtn={deleteitems} key={data._id} data={data}></Order>)}
                </div>

                {
                    orders.length !== 0 ?
                        <div className='text-center'>
                            <button onClick={handleConfirm} className='btn btn-warning'>confirm</button>
                        </div>

                        : ""
                }
                <div className='text-center'>
                    {

                        errors ? <small style={{ color: "red" }}>please Login frist</small> : ""
                    }
                </div>


            </div>
            <div className='row d-flex justify-content-around'>
                {
                    products.map(data => <Shopview handleid={Additems} Data={data} key={data._id}></Shopview>)
                }
            </div>

        </div>
    );
};

export default Profile;