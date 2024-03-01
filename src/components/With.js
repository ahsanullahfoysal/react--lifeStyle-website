import React, { useEffect, useState } from "react"
import axios from "axios"

export default function With() {
  const [data, setData] = useState([]);
 
  useEffect(() => {
    axios
      .get("http://localhost/ReactJs/project/backend/With/Withlist.php")
      .then((res) => {
        setData(res.data);
       
      });
  }, []);
  return (
    <>
      <section className="why_section layout_padding">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>Why Shop With Us</h2>
          </div>
          <div className="row">
            {data.map((d, i) => {
              return (
                <>
               
                  <div className="col-md-4">
                    <div className="box ">
                      <div className="img-box">
                        <img
                          src={`http://localhost/ReactJs/project/backend/images/${d.photo}`}
                          alt=""
                          height={40}
                        />
                      </div>
                      <div className="detail-box">
                        <h5>{d.title}</h5>
                        <p>{d.details}</p>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
           
          </div>
        </div>
      </section>
    </>
  );
}
