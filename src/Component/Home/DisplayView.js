import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom';
const DisplayView = (props) => {
    const navigete=useNavigate();
    const data=props.data
    const handleseemore =(event)=>{
        event.preventDefault();
        navigete('/Service')
        
    }
    return (
        
             <div className='col-lg-3 d-flex justify-content-center m-3'>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={data.img} />
                            <Card.Body>
                                <Card.Title>{data.Carmake}</Card.Title>
                                <Card.Text>
                                   <p>Quantity :{data.quantity}</p>
                                </Card.Text>
                                <Button onClick={handleseemore} variant="primary">See more</Button>
                            </Card.Body>
                        </Card>
                    </div>
      
    );
};

export default DisplayView;