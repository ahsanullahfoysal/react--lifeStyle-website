import React from 'react'
import  Header from '../components/Header';
import Footer from '../components/Footer';
import { NavLink } from "react-router-dom";


export default function Contact() {
  return (
    <div>
      <Header/>
     <h1  style={{backgroundColor: "lightblue", textAlign:"center"}}>Admin</h1>
       <div>
            <ul>
                <li><NavLink to="/With/Withlist"> With Us</NavLink></li>
                <li><NavLink to="/New/Newlist">New Arrivals</NavLink></li>
                <li><NavLink to="/Products/Productlist">Products</NavLink></li>
                <li><NavLink to="/Subscribe/Sublist">Subscribe</NavLink></li>
                <li><NavLink to="/Testimonial/Testlist">Testimonial</NavLink></li>
            </ul>
    
       </div>
    
    <Footer/>
    </div>
  )
}