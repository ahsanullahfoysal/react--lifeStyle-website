import React from 'react'
import  Header from '../components/Header';
import Products  from '../components/Products';
import Footer from '../components/Footer';



export default function Product() {
  return (
    <div>
     {/* <h3>Products page</h3> */}
      <Header/>
     <Products/>
     <Footer/>
    </div>
  )
}