import React from 'react';
import './Garlarywork.css';
function GalaryWork(props) {
    return(<div className="galary-works__galary center-left center-right" ref={props.worksRef}>
        <div className="cont-flex__galary">
            {props.works.map((item, index)=> {
                return(<div className="card-galary__galary" key={index}>
                        <div className="img-galary__galary">
                            <a href="#"><img src={item.imgs[0]} alt={item.name}/></a>
                        </div>
                        <div className="text-descri__galary">
                           <h2 className="title-galary ninuto">{item.name}</h2>
                           <p className="descri-galary signika">{item.descri}</p>
                        </div>
                </div>)
            })}
        </div>
    </div>)
}
export default GalaryWork;