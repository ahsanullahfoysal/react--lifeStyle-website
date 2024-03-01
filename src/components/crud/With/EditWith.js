import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function Edit() {
    const {id}=useParams()
    const [title, setTitle] = useState('')
    const [details, setdetails] = useState('')
    const [photo, setphoto] = useState('')

    const navi=useNavigate()
    useEffect(()=>{
        axios.get(`http://localhost/Reactjs/project/backend/With/editWith.php?id=${id}`)
        .then((res)=>{
            setTitle(res.data.title)
            setphoto(res.data.photo)
            setdetails(res.data.details)
        })
    },[])
    const save=()=>{
        const formdata=new FormData()
        formdata.append('title',title)
        formdata.append('details',details)
        formdata.append('photo',photo)
        formdata.append('id',id)
        axios.post("http://localhost/ReactJs/project/backend/With/update.php",formdata,{
            headers:{
                "Content-Type":"multipart/form-data"
            }
        }) 
        .then((res)=>{
            console.log(res.data)
            setTitle('')
            setphoto('')
            setdetails('')
            navi('/With/Withlist')
        })
    }
    return (
        <div>
            <table className='table table-bordered'>
                <tbody>
                <tr>
                    <th>Title</th>
                    <td><input type="text" className='form-control' onChange={(e)=>setTitle(e.target.value)} value={title}/></td>
                    <th>Photo</th>
                    <td><input type="file" className='form-control' onChange={(e)=>setphoto(e.target.files[0])}/></td>
                </tr>
                <tr>
                    <th>Details</th>
                    <th colSpan={3}><textarea className='form-control' onChange={(e)=>setdetails(e.target.value)} value={details}></textarea></th>
                </tr>
                <tr>
                    <th colSpan={4}><button onClick={save}>Save</button></th>
                </tr>
                </tbody>
            </table>
        </div>
    )
}