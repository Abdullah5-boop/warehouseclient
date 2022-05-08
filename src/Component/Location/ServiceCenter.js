import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressBook } from '@fortawesome/free-solid-svg-icons'
import ServiceView from '../Serveces/ServiceView';
import ServicecenterView from './ServicecenterView';
const ServiceCenter = () => {
    const [customer, setcustomer] = useState([])
    useEffect(() => {
        fetch('CustomerCenter.json')
            .then(res => res.json())
            .then(data => setcustomer(data))
    }, [])
    // console.log(customer)
    return (

        <div >

            <div className=''>
                <h2 className='text-center m-4'>Customer center with location</h2>
                <div className=' row w-100 '>
                    {customer.map(data => <ServicecenterView key={data.phone} data={data}></ServicecenterView>)}
                </div>
            </div>
        </div>
    );
};

export default ServiceCenter;