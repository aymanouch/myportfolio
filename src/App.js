import React, {useState, useEffect} from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Herosection from "./components/Herosection/Herosection";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Button from "./components/Button/Button";

const data = require('./Json-folder/data.json');


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    >ffff</div>
  );
}
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

  const next = () => {

  }
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
            logos={{...item.logos}}
            statique={{...item.statique}}
            card={{...item.card}}
            id={item.id}
            />);
        } 
      })}
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
            logos={{...item.logos}}
            statique={{...item.statique}}
            card={{...item.card}}
            id={item.id}
            />);
        } 
      })}
      </Slider>
      </div>
    </div>
  );
}

export default App;
