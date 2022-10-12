
import React, { Component }  from 'react';
//components
import Menu from './Menu';
import Presenter from './Presenter';
import Gallery from './Gallery';

//imgs
import mainIMG from '../img/mainIMG.jpg'


const Home = () =>{
    return(
        <>        
        <div className="homeCtn lg-12" style={{padding: "0"}}>
            <Menu />
            <Presenter img={mainIMG}/>    
            <Gallery name="hola" />        
        </div>                                
        </>
    );
}

export default Home;