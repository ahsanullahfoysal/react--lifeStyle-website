import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function Datalist() {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get("http://localhost/ReactJs/project/backend/Subscribe/list.php")
            .then((res) => setData(res.data))
    }, [])
    const deletesub = (id) => {
        axios.get(`http://localhost/ReactJs/project/backend/Subscribe/delete.php?id=${id}`)
            .then((res) => {
                console.log(res.data)
                axios.get("http://localhost/ReactJs/project/backend/Subscribe/list.php")
                    .then((res) => setData(res.data))
            })
    }
    return (
        <div>
            <NavLink to={`/Subscribe/Add`}>
                <button className='btn btn-xs btn-primary'>Add New</button>
            </NavLink>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>SL</th>
                        <th>Title</th>
                        <th>Deatils</th>
                        <th>Btn_Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((d, i) => {
                        return (
                            <tr key={i}>
                                <td>{i + 1}</td>
                                <td>{d.title}</td>
                                <td>{d.deatils}</td>
                                <td>{d.bname}</td>
                                <td>
                                    <NavLink to={`/Subscribe/EditSub/${d.id}`}>
                                        <button className='btn btn-xs btn-info'>Edit</button>
                                    </NavLink>
                                    <button className='btn btn-xs btn-danger' onClick={() => deletesub(d.id)}>Delete</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}