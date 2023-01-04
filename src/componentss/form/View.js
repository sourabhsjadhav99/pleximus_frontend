import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import "./View.css"
function View() {

  let [data, setData] = useState([]);
  let navigate= useNavigate()
  let { _id } = useParams()



  const fetchData = async (_id) => {
    let response = await axios.get(`http://localhost:8000/product/${_id}`)
    console.log(response);

    setData(response.data[0])


  };
  useEffect(() => {
    if (_id) {
      fetchData(_id)
    }
  }, []);

  return (
    <div className="view-container">
      <h1 >Property Details</h1>
      <div>
          <div className="details"> Product name:- {data.product_name}</div>
          <div className="details">Product description:- {data.product_description}</div>
          <div className="details">Product price:- {data.product_price}</div>
           </div>
      <button id="back-btn" onClick={()=>{navigate(-1)}}>Back</button>

    </div>
  )
}

export default View