import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function Datalist() {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get("http://localhost/ReactJs/project/backend/Sliderlist.php")
            .then((res) => setData(res.data))
    }, [])
    const deleteSlider = (id) => {
        axios.get(`http://localhost/ReactJs/project/backend/deleteSlider.php?id=${id}`)
            .then((res) => {
                console.log(res.data)
                axios.get("http://localhost/ReactJs/project/backend/Sliderlist.php")
                    .then((res) => setData(res.data))
            })
    }
    return (
        <div>
            <NavLink to={`/crud/AddSlider`}>
                <button className='btn btn-xs btn-primary'>Add New</button>
            </NavLink>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>SL</th>
                        <th>Title</th>
                        <th>Details</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((d, i) => {
                        return (
                            <tr key={i}>
                                <td>{i + 1}</td>
                                <td>{d.title}</td>
                                <td>{d.details}</td>
                                <td>
                                    {/* <NavLink to={`/crud/edit/${d.id}`}> */}
                                        <button className='btn btn-xs btn-info'>Edit</button>
                                    {/* </NavLink> */}
                                    <button className='btn btn-xs btn-danger' onClick={() => deleteSlider(d.id)}>Delete</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}