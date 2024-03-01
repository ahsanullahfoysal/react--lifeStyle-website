import React,{useEffect,useState} from 'react';
import axios from 'axios';

export default function Subscribe() {

  const[Subdata, setSubdata] = useState([]);

  useEffect(()=>{
    axios.get("http://localhost/ReactJs/project/backend/Subscribe/list.php")
    .then((res)=>{
      setSubdata(res.data[0])
    });
  },[]);
  return (
    <>
       <section className="subscribe_section">
    <div className="container-fuild">
      <div className="box">
         <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="subscribe_form ">
              <div className="heading_container heading_center">
                <h3>{Subdata.title}</h3>
              </div>
              <p>
                {Subdata.deatils}
              </p>
              <form action="">
                <input type="email" placeholder="Enter your email" />
                <button>{Subdata.bname}</button>
              </form>
            </div>
          </div>
        </div>
        </div>
        </div>
        </section>
    </>
  )
}
