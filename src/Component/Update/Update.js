import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Update = () => {
    const navigate = useNavigate()
    const { _id } = useParams()

    const [product, setproduct] = useState([])
    const [update, setupdate] = useState(false)

    useEffect(() => {
        fetch(`https://mysterious-savannah-05952.herokuapp.com/update/${_id}`)
            .then(res => res.json())
            .then(data => setproduct(data))
    }, [])
    const handlesubmit = (event) => {
        event.preventDefault()
        const carName = event.target.CarName.value;
        const Quantity = event.target.Quantity.value;
        const img = event.target.img.value;
        const user = { carName, Quantity, img }

        fetch(`https://mysterious-savannah-05952.herokuapp.com/update/${_id}`,
            {
                headers: {

                    'Content-Type': 'application/json'
                },
                method: "put",
                body: JSON.stringify(user)
            })
            .then(res => res.json())
            .then(data => setupdate(true))
            .catch(error => { console.log(error) })
    }
    const handleDelete = () => {
        fetch(`https://mysterious-savannah-05952.herokuapp.com/update/${_id}`,
            {
                headers: {

                    'Content-Type': 'application/json'
                },
                method: "delete",
            })
            .then(res => res.json())
            .then(data => setupdate(true))
            .catch(error => { console.log(error) })
        navigate('/Service')

    }

    return (
        <div>
            <div className='d-flex justify-content-center'>
                <div>
                    <h5>Car Name : <small>{product?.Carmake}</small> Quantity : <small>{product?.quantity}</small> </h5>
                    <h5>url : <small>{product?.img}</small></h5>
                    <form onSubmit={handlesubmit}>
                        <div className="mb-3">
                            <input type="text" name='CarName' className="form-control" placeholder='Car Name' />
                        </div>
                        <div className="mb-3">
                            <input type="text" name='Quantity' className="form-control" placeholder='Quantity' />
                        </div>
                        <div className="mb-3">
                            <input type="text" name='img' className="form-control" placeholder='img url' />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                    {
                        update ? "Date is updated" : " Data is not updated"
                    }
                </div>


            </div>
            <div className='text-center mt-3'>
                <button className='btn btn-warning' onClick={handleDelete}>delete</button>
            </div>
        </div>
    );
};

export default Update;