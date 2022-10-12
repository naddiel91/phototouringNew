
import React, { Component }  from 'react';
import mainIMG from '../img/mainIMG.jpg'
import '../css/grid.css';



const Presenter = (props) =>{
    return(
        <div className='' style={{background: "red"}}>
            <img id="homeMainImg" src={props.img} alt="main picture"  style={{width: "100% !important"}}/>
            {/* <div className="lg-12">

            </div> */}
        </div>
    );
}

export default Presenter;