import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressBook } from '@fortawesome/free-solid-svg-icons'
import ServiceView from '../Serveces/ServiceView';
// import ServicecenterView from './ServicecenterView';
const ServicecenterView = (props) => {
    const data=props.data
    // console.log(data)
    return (

        <div className='border text-center col-lg-3 d-flex align-items-center justify-content-around p-1 m-2  ' style={{width:"280px"}}>
            <div><FontAwesomeIcon className='fs-1' icon={faAddressBook}></FontAwesomeIcon></div>
            <div className='mt-3'>
                <p className=''>Country : {data.Country} <br />
                    Phone : {data.phone}</p>
            </div>
        </div>

    );
};

export default ServicecenterView;