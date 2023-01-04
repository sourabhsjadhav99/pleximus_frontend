import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';
import "./Form.css"
import Header from "../Header"
export default function FormPage() {
    let {email}= useParams()
    const navigate = useNavigate();
    const [data, setData] = useState({
        product_name: "",
        product_description: "",
        product_price: ""
    });
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(values => ({ ...values, [name]: value }))
    }
    const submitForm = (e) => {
        e.preventDefault()
        if(data.product_name, data.product_description, data.product_price){
            axios.post('https://pleximus-backend.onrender.com/product', {
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

            navigate(`/display/${email}`)
        }else{
            alert("All fields are necessary")
        }
    }
    return (
        <div id="create-container">
            <Header/>
           <div>
           <h2>New Product</h2>
            <form className="create-container" onSubmit={submitForm}>

                <div>
                  
                    <div>
                    <input placeholder="Product name" className="input-boxing" type="text" name="product_name"
                        value={data.product_name}
                        onChange={handleChange}
                    />
                    </div>
                </div>
                <div>
                    <input placeholder="Product description" className="input-boxing" type="text" name="product_description"
                        value={data.product_description}
                        onChange={handleChange}
                    />
                </div>
                <div>

                    <input placeholder="Product price" className="input-boxing" type="" name="product_price"
                        value={data.product_price}
                        onChange={handleChange}
                    />
                </div>

                <button type="submit" className="submit-btn " >Add Product</button>
                <button onClick={()=>{
                    navigate(-1)
                }} className="submit-btn back-btn" >Back</button>

            </form>
           </div>

        </div>

    )
}