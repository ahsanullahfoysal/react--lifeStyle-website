import React, { useEffect, useState } from "react";
// import Slider from "react-slick"


export default function Sliders() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost/Reactjs/project/backend/Sliderlist.php")
      .then((res) => res.json())
      .then((res) => setData(res));

      console.log(data);
  }, []);
  // var settings = {

  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   arrows:false,
  //   autoplaySpeed:2000,
  //   autoplay:true
  // };
  return (
    <>
      <section className="slider_section ">
        <div className="slider_bg_box">
          <img src="images/slider-bg.jpg" alt="" />
        </div>
        <div
          id="customCarousel1"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            {/* <Slider {...settings}>
                {data.map((d, i)=>{
           return( */}
            {/* <div className="carousel-item active"> 

              <div className="container ">
                <div className="row">
                  <div className="col-md-7 col-lg-6 "  key={i}>
                    <div className="detail-box">
                      <h1>
                       {d.title}
                      </h1>
                      <p>
                        {d.details}
                      </p>
                      <div className="btn-box">
                        <a href="" className="btn1">
                          Shop Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
       
            </div> */}

            {data.map((d, i) => {
              console.log(d);
              return (
                <>
                  <div className={`carousel-item ${i==0?"active":""}`} key={i}>
                    <div className="container ">
                      <div className="row">
                        <div className="col-md-7 col-lg-6 ">
                          <div className="detail-box">
                            <h1>
                              {d.title}
                            </h1>
                            <p>
                              {d.details}
                            </p>
                            <div className="btn-box">
                              <a href="#" className="btn1">
                                Shop Now
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}

            {/* <div className="carousel-item">
              <div className="container ">
                <div className="row">
                  <div className="col-md-7 col-lg-6 ">
                    <div className="detail-box">
                      <h1>
                        <span>Sale 20% Off</span>
                        <br />
                        On Everything
                      </h1>
                      <p>
                        Explicabo esse amet tempora quibusdam laudantium,
                        laborum eaque magnam fugiat hic? Esse dicta aliquid
                        error repudiandae earum suscipit fugiat molestias,
                        veniam, vel architecto veritatis delectus repellat modi
                        impedit sequi.
                      </p>
                      <div className="btn-box">
                        <a href="#" className="btn1">
                          Shop Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
          {/* )
                })}
        </Slider> */}
          <div className="container">
            <ol className="carousel-indicators">
              <li
                data-target="#customCarousel1"
                data-slide-to={0}
                className="active"
              />
              <li data-target="#customCarousel1" data-slide-to={1} />
              <li data-target="#customCarousel1" data-slide-to={2} />
            </ol>
          </div>
        </div>
      </section>
    </>
  );
}
