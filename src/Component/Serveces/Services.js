import React, { useContext, useEffect, useState } from 'react';
import { ProductContext } from '../../App';
import CustomServiceHook from './CustomServiceHook';
import ServiceView from './ServiceView';

const Services = () => {
    const [product, setproduct] = useContext(ProductContext)
    const [products, setproducts] = CustomServiceHook()
    useEffect(() => {
        fetch("https://mysterious-savannah-05952.herokuapp.com/Service")
            .then(res => res.json())
            .then(data => {
                setproducts(data)
                setproduct(data)
            })
    }, [products])
    return (
        <div>
            <div className='d-flex justify-content-center'>
                <div className=' row d-flex justify-content-center'>
                    {
                        product.map(data => <ServiceView Data={data} key={data._id}></ServiceView>)
                    }
                </div>
            </div>
        </div>

    );
};

export default Services;