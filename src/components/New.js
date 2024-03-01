import React,{useEffect,useState} from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

export default function New()
 {
  const [Newdata, setNewdata] = useState([]);

  useEffect(() => {
    axios
    .get("http://localhost/ReactJs/project/backend/New/list.php")
    .then((res) =>{
      setNewdata(res.data[0])
    });
  },[]);
  return (
    <>
    <section className="arrival_section">
    <div className="container">
      {/* <NavLink to={``}> */}
        <div className="box">
        <div className="arrival_bg_box"  style={{width:'50%'}}>
              <img src={`http://localhost/ReactJs/project/backend/images/${Newdata.photo}`} alt="" style={{width:'80%'}} />
             
        </div>
        <div className="row">
          <div className="col-md-6 ml-auto">
            <div className="heading_container remove_line_bt">
              <h2>{Newdata.title}</h2>
            </div>
            <p style={{ marginTop: 20, marginBottom: 30 }}>
            {Newdata.deatils}
            </p>
            <a href="">{Newdata.bname}</a>
          </div>
        </div>
      </div>
      {/* </NavLink> */}
      </div>
      </section>
    
    </>
  )
}
