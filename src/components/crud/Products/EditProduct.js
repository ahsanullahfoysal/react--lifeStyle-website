import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Edit() {
    const {id}=useParams()
    const [btnone,setbtnone]= useState('')
    const [btntwo,setbtntwo]= useState('')
    const [title, setTitle] = useState('')
    const [price, setprice] = useState('')
    const [photo, setphoto] = useState('')

  const navi = useNavigate();
  useEffect(() => {
    axios
      .get(`http://localhost/ReactJs/project/backend/Products/getproduct.php?id=${id}`)
      .then((res) => {
        setbtnone(res.data.btnone);
        setbtntwo(res.data.btntwo)
        setTitle(res.data.title);
        setprice(res.data.price);
        
      })
  }, []);
  const save = () => {
    const formdata = new FormData();
    formdata.append('btnone',btnone)
    formdata.append('btntwo',btntwo)
    formdata.append('title',title)
    formdata.append('price',price)
    formdata.append('photo',photo)
    formdata.append('id',id)
    axios.post(
        "http://localhost/ReactJs/project/backend/Products/update.php",formdata,{
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        setbtnone('')
        setbtntwo('')
        setTitle('')
        setprice('')
        setphoto('')
        navi("/Products/Productlist");
      });
  };
  return (
    <div>
      <table className="table table-bordered">
        <tbody>
          <tr>
          <th>Btn One</th>
            <td>
              <input
                type="text"
                className="form-control"
                onChange={(e) => setbtnone(e.target.value)}
                value={btnone}
              />
            </td>
          <th>Btn Two</th>
            <td>
              <input
                type="text"
                className="form-control"
                onChange={(e) => setbtntwo(e.target.value)}
                value={btntwo}
              />
            </td>
            <th>Title</th>
            <td>
              <input
                type="text"
                className="form-control"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
              />
            </td>
          </tr>
          <tr>
            <th>Photo</th>
            <td>
              <input
                type="file"
                className="form-control"
                onChange={(e) => setphoto(e.target.files[0])}
              />
            </td>
            <th>Price</th>
            <th colSpan={3}>
              <textarea
                className="form-control"
                onChange={(e) => setprice(e.target.value)}
                value={price}
              ></textarea>
            </th>
          </tr>
          <tr>
            <th colSpan={4}>
              <button onClick={save}>Save</button>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
}