import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Herosection from "./components/Herosection/Herosection";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Footer from './components/Footer/Footer';

const data = require('./Json-folder/data.json');
function App() {

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow:<FaArrowLeft />,
    nextArrow:<FaArrowRight />,
  };
  return (
    <div className="App">
      <Navbar />
      {data.data.map(item => {
        if(item.name!=="testimonials") {
          return(<Herosection
            key={item.id}
            dir={item.dir} 
            img={{...item.img}} 
            content={{...item.content}} 
            pur={item.pur}
            someLink={item.someLink}
            img={item.img}
            statique={{...item.statique}}
            card={{...item.card}}
            id={item.id}
            works={item.works}
            />);
        } 
      })}
      {/* testimonials parte  */}
      <div className="cont-slider__item">  
      <Slider {...settings} >
      {data.data.map(item => {
        if(item.name==="testimonials") {
          return(<Herosection
            key={item.id}
            dir={item.dir} 
            img={{...item.img}} 
            content={{...item.content}} 
            pur={item.pur}
            someLink={item.someLink}
            img={item.img}
            statique={{...item.statique}}
            card={{...item.card}}
            id={item.id}
            person={item.person}
            works={undefined}
            />);
        } 
      })}
      </Slider>
      </div>
      <Footer />
    </div>
  );
}

export default App;
