import React from 'react';
import './Card.css';
import {FaGem, FaCode} from 'react-icons/fa';

function Card(props) {
    return (<div className="container-crad__card center-left center-right">
            <div className="card-box__card">
                  <div className="container--align__card">
                  <div className="icon-cont">
                   <FaGem />
                   </div>
                   <div className="title-card__card">
                       <h2 className="marvel">design</h2>
                   </div>
                   <div className="prag-cont__card signika">
                       <p>A design is a plan or specification for the construction of an object 
                           or system or for the implementation of an activity or process, or the result of that plan or 
                           specification in the form of a prototype, product or process.
                        </p>
                   </div>
                  </div>
            </div>
            <div className="card-box__card">
                   <div className="container--align__card">
                   <div className="icon-cont">
                   <FaCode />
                   </div>
                   <div className="title-card__card">
                       <h2 className="marvel">web development</h2>
                   </div>
                   <div className="prag-cont__card signika">
                       <p>Web development is the building and maintenance of websites; it's the work that happens behind the scenes to make a website look great, 
                           work fast and perform well with a seamless user experience. Web developers, or 'devs', do this by using a variety of coding languages.</p>
                   </div></div> 
            </div>
    </div>);
}
export default Card;