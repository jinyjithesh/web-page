import React, { Fragment } from 'react'

import classes from "./Findpage.module.css";
import linkedin from "../../Assets/linklinkedin.jpg"
import linkfb  from "../../Assets/linkfb.jpg"
import linkinstagram from "../../Assets/linkinstagram.jpg"
import linktwitter from "../../Assets/linktwitter.jpg"
export const Findpage = () => {
    return (
      <Fragment>
          <h3 className={classes.h}>Find Us On</h3>
          <img src= {linkedin } alt={linkedin } className={classes.image}/><br/>
          <img src= {linkfb} alt={linkfb} className={classes.image}/><br/>
          <img src= {linkinstagram} alt={linkinstagram} className={classes.image}/><br/>
          <img src= {linktwitter } alt={linktwitter } className={classes.image}/>
          <hr/>
      </Fragment>
    )
}
