
import React, { Component }  from 'react';


const Menu = () =>{
    return(
        <div id='menuCtn' className="menuCtn btn-group" role="group" aria-label="Basic example">
            <button type="button" className=" btnMenu">Tours</button>
            <button type="button" className=" btnMenu">Reviews</button>
            <button type="button" className=" btnMenu">Gallery</button>
            <button type="button" className=" btnMenu">About us</button>
            <button type="button" className=" btnMenu">Contact</button>
        </div>        
    );
}

export default Menu;