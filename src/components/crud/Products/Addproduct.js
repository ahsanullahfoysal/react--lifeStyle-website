import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Add() {
    const [btnone,setbtnone]=useState('')
    const [btntwo,setbtntwo]=useState('')
    const [title, setTitle] = useState('')
    const [price, setprice] = useState('')
    const [photo, setphoto] = useState('')
    const navi=useNavigate()
    const save=()=>{
        const formdata=new FormData()
        formdata.append('btnone',btnone)
        formdata.append('btntwo',btntwo)
        formdata.append('title',title)
        formdata.append('price',price)
        formdata.append('photo',photo)
        axios.post("http://localhost/ReactJs/project/backend/Products/Add.php",formdata,{
            headers:{
                "Content-Type":"multipart/form-data"
            }
        })
        .then((res)=>{
            console.log(res.data)
            setbtnone('')
            setbtntwo('')
            setTitle('')
            setprice('')
            setphoto('')
            navi('')
        })
    }
    return (
        <div>
            <table className='table table-bordered'>
                <tbody>
                <tr>
                    <th>BtnOne</th>
                    <td><input type="text" className='form-control' onChange={(e)=>setbtnone(e.target.value)} value={btnone}/></td>
                    <th>BtnTwo</th>
                    <td><input type="text" className='form-control' onChange={(e)=>setbtntwo(e.target.value)} value={btntwo}/></td>
                    <th>Title</th>
                    <td><input type="text" className='form-control' onChange={(e)=>setTitle(e.target.value)} value={title}/></td>
                   
                </tr>
                <tr>
                <th>Photo</th>
                    <td><input type="file" className='form-control' onChange={(e)=>setphoto(e.target.files[0])}/></td>
                    <th>Price</th>
                    <th colSpan={3}><textarea className='form-control' onChange={(e)=>setprice(e.target.value)} value={price}></textarea></th>
                </tr>
                <tr>
                    <th colSpan={4}><button onClick={save}>Save</button></th>
                </tr>
                </tbody>
            </table>
        </div>
    )
}