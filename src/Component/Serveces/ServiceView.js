import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom';
import './servicestyle.css';
const ServiceView = (props) => {
    const Product = props.Data;
    const navigate=useNavigate()
    const HandleUpdate =()=>{
        console.log(Product._id)
        navigate(`/update/${Product._id}`)

    }
    return (

        <div className='col-lg-3 d-flex justify-content-center m-3'>

            <Card className='cards' style={{ width: '18rem' }}>
                <Card.Img variant="top" src={Product.img} />
                <Card.Body>
                    <Card.Title>{Product.Carmake}</Card.Title>
                    <Card.Text>
       
                 <div className='pb-3'><p>Quantity : <small>{Product.quantity}</small></p></div>
                    </Card.Text>
                    <Button className='cardbtn w-100' onClick={HandleUpdate} variant="primary">Update</Button>
                </Card.Body>
                
            </Card>
           
        </div>
    );
};

export default ServiceView;