import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Edit() {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [deatils, setdeatils] = useState("");
  const [bname, setbname] = useState("");
  const [photo, setphoto] = useState("");

  const navi = useNavigate();
  useEffect(() => {
    axios
      .get(`http://localhost/ReactJs/project/backend/New/list.php?id=${id}`)
      .then((res) => {
        setTitle(res.data.title);
        setdeatils(res.data.deatils);
        setbname(res.data.bname);
      });
  }, []);
  const save = () => {
    const formdata = new FormData();
    formdata.append("title", title);
    formdata.append("deatils", deatils);
    formdata.append("bname", bname);
    formdata.append("photo", photo);
    formdata.append("id", id);
    axios
      .post(
        "http://localhost/ReactJs/project/backend/New/update.php",
        formdata,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        setTitle("");
        setphoto("");
        setdeatils("");
        setbname("");
        navi("/New/Newlist");
      });
  };
  return (
    <div>
      <table className="table table-bordered">
        <tbody>
          <tr>
            <th>Title</th>
            <td>
              <input
                type="text"
                className="form-control"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
              />
            </td>
            <th>btn_name</th>
            <td>
              <input
                type="text"
                className="form-control"
                onChange={(e) => setbname(e.target.value)}
                value={bname}
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
            <th>deatils</th>
            <th colSpan={3}>
              <textarea
                className="form-control"
                onChange={(e) => setdeatils(e.target.value)}
                value={deatils}
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
