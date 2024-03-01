import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function Datalist() {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get("http://localhost/ReactJs/project/backend/Products/list.php")
            .then((res) => setData(res.data))
    }, [])
    const deleteproduct= (id) => {
        axios.get(`http://localhost/ReactJs/project/backend/Products/delete.php?id=${id}`)
            .then((res) => {
                console.log(res.data)
                axios.get("http://localhost/ReactJs/project/backend/Products/list.php")
                    .then((res) => setData(res.data))
            })
    }
    return (
        <div>
            <NavLink to={`/Products/Addproduct`}>
                <button className='btn btn-xs btn-primary'>Add New</button>
            </NavLink>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>SL</th>
                        <th>Btn_One</th>
                        <th>Btn_Two</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Photo</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((d, i) => {
                        return (
                            <tr key={i}>
                                <td>{i + 1}</td>
                                <td>{d.btnone}</td>
                                <td>{d.btntwo}</td>
                                <td>{d.title}</td>
                                <td>{d.price}</td>
                                <td><img src={`http://localhost/ReactJs/project/backend/images/${d.photo}`} alt={d.title} height={100} /></td>
                                <td>
                                    <NavLink to={`/Products/Productlist${d.id}`}>
                                        <button className='btn btn-xs btn-info'>Edit</button>
                                    </NavLink>
                                    <button className='btn btn-xs btn-danger' onClick={() => deleteproduct(d.id)}>Delete</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}