import React from 'react'
import  Header from '../components/Header';
import Footer from '../components/Footer';
import Subscribe from '../components/Subscribe';

export default function Contact() {
  return (
    <div>
      <Header/>
     <h1  style={{backgroundColor: "lightblue", textAlign:"center"}}>ConTact page</h1>
     <Subscribe/>
    
    <Footer/>
    </div>
  )
}