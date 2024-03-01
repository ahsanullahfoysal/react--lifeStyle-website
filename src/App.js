import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Slider from './components/Slider'
import With from './components/With'
import New from './components/New'
import Products from './components/Products';
import Subscribe from './components/Subscribe';
import Testmonial from './components/Testmonial';
import Fmms from './components/Fmms';
import Footer from './components/Footer';
// import ExampleCarouselImage from './components/ExampleCarouselImage';

function App() {
  return (
    <div className="App">
  {/* Hello world */}
  <div className="hero_area">
    {/* header section strats */}
   
        <Header/>
    
    {/* end header section */}
    {/* slider section */}
   
      <Slider/>
  
    {/* end slider section */}
  </div>
  {/* why section */}
  
     <With/>
 
  {/* end why section */}
  {/* arrival section */}
  
      <New/>
 
  {/* end arrival section */}
  {/* product section */}
  
      <Products/>
    
  {/* end product section */}
  {/* subscribe section */}
 
       <Subscribe/>
      
  {/* end subscribe section */}
  {/* client section */}
 
     <Testmonial/>
 
  {/* end client section */}
   {/* <ExampleCarouselImage/> */}
  {/* footer start */}
 
      <Fmms/>
    

  {/* footer end */}
  <Footer/>


    </div>
  );
}

export default App;
