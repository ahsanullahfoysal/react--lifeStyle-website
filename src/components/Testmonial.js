import React, { useEffect, useState } from 'react'
import axios from 'axios'
//  import Slider from 'react-slick';


export default function Testmonial() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios .get("http://localhost/ReactJs/project/backend/Testimonial/Tslist.php")
    .then((res) => {
      setData(res.data);
    });
  },[])
  // // function Carousel(){
  //   var settings = {

  //     infinite: true,
  //     speed: 500,
  //     slidesToShow: 1,
  //     slidesToScroll: 1,
  //     arrows:false,
  //     autoplaySpeed:2000,
  //     autoplay:true
  //   };
  // }
 
  return (
   <>
    <section className="client_section layout_padding">
    <div className="container">
      <div className="heading_container heading_center">
        <h2>Customer's Testimonial</h2>
      </div>
     <div
        id="carouselExample3Controls"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          {/* <Slider {...settings }>
          {data.map((d,i) => {
            return( */}
              {/* <>
                 <div className="carousel-item active " key={i}>
            <div className="box col-lg-10 mx-auto">
              <div className="img_container">
                <div className="img-box">
                  <div className="img_box-inner">
                    <img src={`http://localhost/ReactJs/project/backend/images/${d.photo}`} alt="" />
                  </div>
                </div>
              </div>
              <div className="detail-box">
                <h5>{d.name}</h5>
                <h6>{d.title}</h6>
                <p>
                 {d.deatils}
                </p>
              </div>
            </div>
          </div>
              
              </> */}
            {/* )
          })}
          </Slider> */}
         {data.map((d,i)=>{
          return(
                <>
                   <div className={`carousel-item ${i==0?"active":""} `}>
            <div className="box col-lg-10 mx-auto">
              <div className="img_container">
                <div className="img-box">
                  <div className="img_box-inner">
                    <img src={`http://localhost/ReactJs/project/backend/images/${d.photo}`} alt="" />
                  </div>
                </div>
              </div>
              <div className="detail-box">
                <h5>{d.name}</h5>
                <h6>{d.title}</h6>
                <p>
                  {d.deatils}
                </p>
              </div>
            </div>
          </div>
                </>
          )
         })}
        
        
        </div>
        <div className="carousel_btn_box">
          <a
            className="carousel-control-prev"
            href="#carouselExample3Controls"
            role="button"
            data-slide="prev"
          >
            <i className="fa fa-long-arrow-left" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExample3Controls"
            role="button"
            data-slide="next"
          >
            <i className="fa fa-long-arrow-right" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
      </div>
      </section>
   
   </>
  )
}
