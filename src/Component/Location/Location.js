import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Location.css"
const Location = () => {
    const navigate = useNavigate()
    const handleservice = () => {
        navigate('/customerservice')
    }
    return (
        // <div className='container mt-3'>
        //     {/* <div className='border border-2 w-25'>
        //         <p>Name : bangladesh    
        //         <br />Admin:city code</p>
        //     </div> */}
        //     <div className=''>
        //         <div>
        //             sfdsdf
        //         </div>
        //     </div>
        // </div>
        <>
            <div className='row d-flex justify-content-center shadow-lg border-top m-5 rounded'>
                <h2 className='text-center mt-5 fs-1'>Customer point</h2>
                <div className="img-container2 col-lg-4">
                    <img className='img-fluid mb-lg-5' src="https://i.ibb.co/k1Rg9KG/pexels-mart-production-7709278-1.jpg" alt="" />
                </div>
                <div className='col-lg-6 d-flex flex-column align-items-center justify-content-center'>
                    <h3 className='mt-5 fs-4'>Contact  Our customer center</h3>
                    <p>
                        It may sound obvious, but no warehouse operations are perfect. You may end up with a lot of unused stock, run out of packing materials early on, or experience order volatility with a particular product.
                        Hi Dan, it looks like you had an issue with your order. Sorry about that. We’re working on it right now and will send you a msg once it's resolved.  Customer Service@UH

                    </p> <br />
                    <h5 className='btn btn-warning' onClick={handleservice}>Our branch</h5>
                </div>

            </div>

        </>
    );
};

export default Location;