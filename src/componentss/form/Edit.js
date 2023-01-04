import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';
import "./Form.css"
export default function Edit() {
    let { _id } = useParams()
    const navigate = useNavigate();
    const [data, setData] = useState({});
    const fetchData = () => {
        fetch(`https://pleximus-backend.onrender.com/product/${_id}`)
            .then((response) => response.json())
            .then((data) => {
                setData({
                    product_name: data[0].product_name,
                    product_description: data[0].product_description,
                    product_price: data[0].product_price
                });
            });
    };
    useEffect(() => {
        fetchData();
    }, []);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(values => ({ ...values, [name]: value }))
    }

    const submitForm = (e) => {
        e.preventDefault()
        axios.put(`https://pleximus-backend.onrender.com/product/${_id}`, {
            product_name: data.product_name,
            product_description: data.product_description,
            product_price: data.product_price,
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });

        navigate(-1)
    }
    return (
        <div id="create-container">
            <div>
                <h2>Edit Product</h2>
                <form className="create-container" onSubmit={submitForm}>
                    <div>
                        <div>
                            <input className="input-boxing" type="text" name="product_name"
                                value={data.product_name}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div>
                        <input className="input-boxing" type="text" name="product_description"
                            value={data.product_description}
                            onChange={handleChange}
                        />
                    </div>
                    <div>

                        <input className="input-boxing" type="" name="product_price"
                            value={data.product_price}
                            onChange={handleChange}
                        />
                    </div>

                    <button type="submit" className="submit-btn " >Edit Product</button>
                    <button onClick={() => {
                        navigate(-1)
                    }} className="submit-btn back-btn" >Back</button>

                </form>
            </div>

        </div>

    )
}