import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons'
import React from 'react';

const Order = (props) => {
    const oders = props.data
    const deletebtn=props.deletebtn;
    // console.log(deleteitems)
    return (
        <div className=''>
            <div className='row mt-2'>
                <div className='col-lg-6  d-flex justify-content-center'>
                    <img style={{ width: "150px", height: "100px", borderRadius: "10px" }} src={oders.img} alt="" />
                </div>
                <div className='col-lg-3 d-flex justify-content-start align-items-center'>
                    <h5>Car Name : <small>{oders.Carmake}</small></h5>
                </div>
                <div className='col-lg-3  d-flex justify-content-start align-items-center'>
                    <button onClick={()=>{deletebtn(oders._id)}}>
                        <FontAwesomeIcon className='fs-1' style={{border:"0px"}} icon={faDeleteLeft}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Order;