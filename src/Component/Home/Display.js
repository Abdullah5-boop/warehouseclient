import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import CustomServiceHook from '../Serveces/CustomServiceHook';
import CustomHookHome from './CustomHookHome';
import DisplayView from './DisplayView';


const Display = () => {
    const [products, setproducts] = CustomHookHome()
    // const [show,setshow]=useState([])

    // console.log(products)
    const user = products.slice(0, 6)
    // console.log(user)
    return (
        <div>
            <h3 className='text-center p-5'>Our Services </h3>
            <div className='row d-flex justify-content-center'>
                {
                    user.map(data => <DisplayView data={data}></DisplayView>)
                }


            </div>
        </div>
    );
};

export default Display;