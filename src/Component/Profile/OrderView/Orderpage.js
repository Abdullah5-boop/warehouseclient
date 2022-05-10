import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ProductContext, UserContext } from '../../../App';
import Order from './Order';
import OrderpageView from './OrderpageView';

const Orderpage = () => {
    const [consumer, setconsumer] = useState([])
    const email = useParams()
    //   console.log(email.email)
    useEffect(() => {
        fetch(`http://localhost:5000/order/${email.email}`)
            .then(res => res.json())
            .then(data => setconsumer(data))

    }, [])
    // const productlist = JSON.parse(consumer)
    const order = consumer.order
    // console.log(order)  
    return (
        <div className='container'>
            <div className="">
                {
                    order?.map(data => <OrderpageView data={data}></OrderpageView>)
                }
            </div>
        </div>
    );
};

export default Orderpage;