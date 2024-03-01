import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Product from './pages/Product';
import Admin from './pages/Admin';
import AddSlider from './components/crud/AddSlider';
import Sliderlist from './components/crud/Sliderlist';
import AddWith from './components/crud/With/AddWith';
import Withlist from './components/crud/With/Withlist';
import EditWith from './components/crud/With/EditWith';
import AddNew from './components/crud/New/AddNew';
import Newlist from './components/crud/New/Newlist';
import EditNew from './components/crud/New/EditNew';
import Addproduct from './components/crud/Products/Addproduct';
import Productlist from './components/crud/Products/Productlist';
import EditProduct from './components/crud/Products/EditProduct';
import Add from './components/crud/Subscribe/Add';
import Sublist from './components/crud/Subscribe/Sublist';
import EditSub from './components/crud/Subscribe/EditSub';
import AddTs from './components/crud/Testimonial/AddTs';
import Testlist from './components/crud/Testimonial/Testlist';
import Admin_index2 from './components/Admin_index2';

import {BrowserRouter, Route, Routes, } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
<BrowserRouter>
<Routes>
  <Route path='/' index element ={<Home/>}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/contact' element={<Contact/>}/>
  <Route path='/products' element={<Product/>}/>
  <Route path='/Admin' element={<Admin/>}/>
  <Route path='/crud/AddSlider' element={<AddSlider/>}/>
  <Route path='/crud/Sliderlist' element={<Sliderlist/>}/>

  <Route path='/With/AddWith' element={<AddWith/>}/>
  <Route path='/With/Withlist' element={<Withlist/>}/>
  <Route path='/With/EditWith/:id' element={<EditWith/>}/>

  <Route path='/New/AddNew' element={<AddNew/>}/>
  <Route path='/New/Newlist' element={<Newlist/>}/>
  <Route path='/New/EditNew/:id' element={<EditNew/>}/>

  <Route path='/Products/Addproduct' element={<Addproduct/>}/>
  <Route path='/Products/Productlist' element={<Productlist/>}/>
  <Route Path='/Products/EditProduct/:id' element={<EditProduct/>}/>

  <Route path='/Subscribe/Add' element={<Add/>}/>
  <Route path='/Subscribe/Sublist' element={<Sublist/>}/>
  <Route path='/Subscribe/EditSub' element={<EditSub/>}/>
  
  <Route path='/Testimonial/AddTs' element={<AddTs/>}/>
  <Route path='/Testimonial/Testlist' element={<Testlist/>}/>

  <Route path='/admin2' element={<Admin_index2/>}/>

</Routes>
</BrowserRouter>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
