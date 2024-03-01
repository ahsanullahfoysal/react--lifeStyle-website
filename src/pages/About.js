import React from 'react'
import  Header from '../components/Header';
import Footer from '../components/Footer';
import With from '../components/With';
import Fmms from '../components/Fmms';


export default function About() {
  return (
    <div>
      <Header/>
     <h1 style={{backgroundColor: "lightblue", textAlign:"center"}}>About page</h1>
     <With/>
     <Fmms/>
     <Footer/>
    </div>
  )
}
