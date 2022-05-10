import React from 'react';
import "./Style.css"
const OrderpageView = (props) => {
    const data=props.data;
    console.log(data)
    return (
        <div className=' row d-flex justify-content-around'>
            
            <div className="col-7 formatings">
                <img  className='img-fluid' src={data?.img} alt="" />
            </div>
            <div className='col-5 d-flex justify-content-center align-items-center'>
            <h3>Car Name : <small>{data.Carmake}</small> </h3>
            </div>
        </div>
    );
};

export default OrderpageView;