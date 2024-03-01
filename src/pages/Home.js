import React from "react";
import Header from "../components/Header";
import Slider from "../components/Slider";
import With from "../components/With";
import New from "../components/New";
import Products from "../components/Products";
import Subscribe from "../components/Subscribe";
import Testmonial from "../components/Testmonial";
import Fmms from "../components/Fmms";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <Slider />
      <With />
      <New />
      <Products />
      <Subscribe/>
      <Testmonial/>
      <Fmms />
      <Footer />
    </div>
  );
}
