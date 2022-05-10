import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/esm/Button';
import { ProductContext } from '../../App';
import CustomServiceHook from '../Serveces/CustomServiceHook';

const Manage = () => {
    // const [product, setproduct] = useContext(ProductContext)
    const [product, setproduct] = CustomServiceHook();
    const [add, setadd] = useState("")

    const handleclick = (id) => {
        const user = product.find(data => data._id === id)
        user.quantity = user.quantity - 1
        fetch("https://mysterious-savannah-05952.herokuapp.com/manage",
            {
                headers: { 'Content-Type': 'application/json' },
                method: "put",
                body: JSON.stringify(user)
            })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(error => { console.log(error) })
    }
    const handleAdd = (id) => {

        const user = product.find(data => data._id === id)
        user.quantity = user.quantity + add
        console.log(user)
        fetch("https://mysterious-savannah-05952.herokuapp.com/manage",
            {
                headers: { 'Content-Type': 'application/json' },
                method: "put",
                body: JSON.stringify(user)
            })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(error => { console.log(error) })


    }

    return (
        <div className='container'>
            <div className=''>
                <table className="table table-dark table-hover mb-4">
                    <thead>
                        <tr>

                            <th scope="col">CarName</th>
                            <th scope="col">Quintity</th>
                            <th scope="col">Update</th>
                            <div className='d-flex jsutify-content-end'><th scope="col">ADD</th></div>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            product.map(data =>
                                <tr key={data._id}>

                                    <td>{data.Carmake}</td>
                                    <td>{data.quantity}</td>
                                    <td><button className='btn btn-light' onClick={() => { handleclick(data._id) }}>deliver</button></td>
                                    <td>
                                        <form className=''>
                                            <input style={{ width: "50px", margin: "5px" }} onChange={(event) => { setadd(parseInt(event.target.value)) }} type="number" name='ADD' />
                                            <h3 onClick={() => { handleAdd(data._id) }} className='btn btn-light'>Add</h3>
                                        </form>
                                    </td>
                                </tr>
                            )
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Manage;