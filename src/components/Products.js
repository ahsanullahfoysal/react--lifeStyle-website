import React, { useEffect, useState } from "react";
import axios from "axios";
export default function Products() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost/ReactJs/project/backend/Products/list.php")
      .then((res) => {
        setData(res.data);
      });
  }, []);
  return (
    <>
      <section className="product_section layout_padding">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>
              Our <span>products</span>
            </h2>
          </div>
          <div className="row">
            {data.map((d, i) => {
              return (
                <>
                  <div className="col-sm-6 col-md-4 col-lg-4">
                    <div className="box">
                      <div className="option_container">
                        <div className="options">
                          <a href="" className="option1">
                            {d.btnone}
                          </a>
                          <a href="" className="option2">
                            {d.btntwo}
                          </a>
                        </div>
                      </div>
                      <div className="img-box">
                        <img
                          src={`http://localhost/ReactJs/project/backend/images/${d.photo}`}
                          alt=""
                        />
                      </div>
                      <div className="detail-box">
                        <h5>{d.title}</h5>
                        <h6>${d.price}</h6>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
          <div className="btn-box">
            <a href="">View All products</a>
          </div>
        </div>
      </section>
    </>
  );
}
