import React, { Fragment } from 'react'
import classes from "./About.module.css"
import Image from "../../Assets/About-main.jpg"
import { Col, Row } from 'reactstrap';

export const About = () => {
    return (
        <Fragment>
           
    <h3 className={classes.h}>About Us</h3>
  
      <img src={Image } alt={Image } className={classes.coverimg}/>
    
    <div className={classes.p}>
    <p className={classes.p}>We are the No.1 bakery sellers in kerala. we start our journey in 1962. Teirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum.....Show More</p>
    
    </div>
  
    
    
    <div >
     
      <video width="100%" height="164" controls className={classes.video}>
      <source src="..Videos/video1.mp4" type="video/mp4"/>
     </video>
      </div>
    <hr/>
        </Fragment>
       
    )
}
