import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function Testlist() {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get("http://localhost/ReactJs/project/backend/Testimonial/Tslist.php")
            .then((res) => setData(res.data))
    }, [])
    const deleteTs = (id) => {
        axios.get(`http://localhost/ReactJs/project/backend/Testimonial/delete.php?id=${id}`)
            .then((res) => {
                console.log(res.data)
                axios.get("http://localhost/ReactJs/project/backend/Testimonial/Tslist.php")
                    .then((res) => setData(res.data))
            })
    }
    return (
        <div>
            <NavLink to={`/Testimonial/AddTs`}>
                <button className='btn btn-xs btn-primary'>Add New</button>
            </NavLink>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>SL</th>
                        <th>Title</th>
                        <th>Details</th>
                        <th>Name</th>
                        <th>Photo</th>
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
                                <td>{d.name}</td>
                                <td><img src={`http://localhost/ReactJs/project/backend/images/${d.photo}`} alt={d.title} height={100} /></td>
                                <td>
                                    {/* <NavLink to={`/With/EditWith/${d.id}`}> */}
                                        <button className='btn btn-xs btn-info'>Edit</button>
                                    {/* </NavLink> */}
                                    <button className='btn btn-xs btn-danger' onClick={() => deleteTs(d.id)}>Delete</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}