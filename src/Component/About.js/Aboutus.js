import React from 'react';

import './About.css'
const Aboutus = () => {
    return (
       <div >
           <h1 className='text-center m-5'>About Us</h1>
            <div className='container formating'>
            <div className="row align-items-center">
                <div className="col-lg-6">
                    <h3>SuperCar Warehouse</h3>
                    <p>
                    Today’s warehouses and distribution centres do a lot more than simply store your products. A good warehouse will provide picking, packing and shipping services as well as inventory management.

At ShapeCUT, our inventory and logistics management processes are what allows us to manage Queensland’s largest in-house range of steel, aluminium and stainless steel stock.

                    </p>
                </div>
                
                <div className="col-lg-6 img-container d-flex justify-content-center"><img className='img-fluid' src="https://i.ibb.co/B2gQQ2g/25694.png" alt="" /></div>
            </div>
            
        </div>
       </div>
    );
};

export default Aboutus;