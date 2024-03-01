import axios from 'axios'
import React, {useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function Edit() {
    const {id}=useParams()
    const [title, setTitle] = useState('')
    const [details, setdetails] = useState('')

    const navi=useNavigate()
    useEffect(()=>{
        axios.post(`http://localhost/ReactJs/project/backend/Sliderget.php?id=${id}`)
        .then((res)=>{
           
            setTitle(res.data.title)
            setdetails(res.data.details)
            navi('/crud/Sliderlist')
        })
    })
    const save=()=>{
        const formdata=new FormData()
        formdata.append('title',title)
        formdata.append('details',details)
        formdata.append('id',id)
        axios.post("http://localhost/ReactJs/project/backend/SliderUpdate.php",formdata,{
            headers:{
                "Content-type":"multipart/form-data"
            }
        })
        .then((res)=>{
            console.log(res.data)
            setTitle('')
            setdetails('')
            navi('/crud/Sliderlist')
        })
    }
    return (
        <div>
            <table className='table table-bordered'>
                <tbody>
                    <tr>
                        <th>Title</th>
                        <td><input type="text" className='form-control' onChange={(e)=>setTitle(e.target.value)} value={title}/></td>
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