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
                       <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
                   </div>
                  </div>
            </div>
            <div className="card-box__card">
                   <div className="container--align__card">
                   <div className="icon-cont">
                   <FaCode />
                   </div>
                   <div className="title-card__card">
                       <h2 className="marvel">development</h2>
                   </div>
                   <div className="prag-cont__card signika">
                       <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
                   </div></div> 
            </div>
    </div>);
}
export default Card;