import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import "./DisplayData.css"
import axios from "axios";
import { FiSearch, FiEye, FiDelete, FiEdit2 } from 'react-icons/fi';
function Table() {

    const [data, setData] = useState([]);
    const [searchApiData, setSearchApiData] = useState([]);
    const [filterVal, setFilterval] = useState("");
    let navigate = useNavigate()
    let { email } = useParams()



    const fetchData = () => {
        axios.get("http://localhost:8000/product")
            .then((data) => {
                console.log(data);
                setData(data.data);
                setSearchApiData(data.data);
            });
    };
    useEffect(() => {
        fetchData();
    }, []);
    const handleFilter = (e) => {
        if (e.target.value === "") {
            setData(searchApiData);
        } else {
            const filterResult = searchApiData.filter((item) =>
                item.product_name.toLowerCase().includes(e.target.value.toLowerCase())
            );
            setData(filterResult);
        }
        setFilterval(e.target.value);
    };

    function handleDelete(_id) {
        axios
            .delete(`http://localhost:8000/product/${_id}`)
            .then(() => {
                fetchData()
            });
    }
    let handleAdd = () => {
        navigate(`/form/${email}`)
    }
    let handleView = (_id) => {
        navigate(`/view/${_id}`)
    }
    let handleEdit = (_id) => {
        navigate(`/Edit/${_id}`)
    }

    return (
        <div className="container">
            <div className='table-header'>
                <div>
                    <div className='input-container'>
                        <input
                            className='input-boxs'
                            placeholder="Search product"
                            value={filterVal}
                            onChange={(e) => {
                                handleFilter(e);
                            }}
                        />
                        <FiSearch className='icon' />
                    </div>

                    {filterVal.length > 0 ? data.map((data, index) => {
                        return <div key={index}>{data.product_name}</div>;
                    }) : ""}
                </div>
                <button className='property-button' onClick={handleAdd}>+ Add Product</button>
            </div>
            <table className="table" >
                <tr className="table-row">
                    <th>Product name</th>
                    <th>Product description</th>
                    <th>Product price</th>
                    <th>Operations</th>

                </tr>
                { data.map((data, index) => {
                    return (
                        <tr key={index} className="table-row">
                            <td>{data.product_name}</td>
                            <td>{data.product_description}</td>
                            <td>{data.product_price}</td>
                            <td>
                                <button onClick={() => { handleView(data._id) }} className='action'><FiEye className='table-icons' /></button>
                                <button className='action' onClick={() => { handleEdit(data._id) }}><FiEdit2 className='table-icons' /></button>
                                <button className='action' onClick={() => { handleDelete(data._id) }}><FiDelete className='table-icons' /></button>
                            </td>
                        </tr>
                    );
                }) }
            </table>
        </div>
    );
}


export default Table
