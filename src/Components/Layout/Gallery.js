import React, { Fragment } from "react";
import classes from "./Gallery.module.css";
import img1 from "../../Assets/img1.jpg";
import img2 from "../../Assets/img2.jpg";

import img3 from "../../Assets/img3.jpg";
import img4 from "../../Assets/img4.jpg";
import img5 from "../../Assets/img5.jpg";
import img6 from "../../Assets/img6.jpg";
import { Col, Row } from "reactstrap";
export const Gallery = () => {
  return (
    <Fragment>
      <h3 className={classes.h}>Gallery</h3>

      <Row>
        <Col md={6}>
          <img src={img1} alt={img1} className={classes.img} />
          <img src={img2} alt={img2} className={classes.img}  />
        </Col>
      </Row>
      <Row>
        <Col>
          {" "}
          <img src={img3} alt={img3} className={classes.img}/><img src={img4} alt={img4} className={classes.img} />{" "}
        </Col>
      </Row>
      <Row>
        <Col>
          {" "}
          <img src={img5} alt={img5} className={classes.img} /> <img src={img6} alt={img6} className={classes.img} />
        </Col>
      </Row>
      <hr  />
    </Fragment>
  );
};
