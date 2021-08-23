import React, { Fragment } from "react";
import Productimage1 from "../../Assets/Product-imag1.jpg";
import Productimage2 from "../../Assets/Product-imag2.jpg";
import Productimage3 from "../../Assets/product-imag3.jpg";
import Productimage4 from "../../Assets/Product-imag4.jpg";
import Productimage5 from "../../Assets/Product-imag5.jpg";
import Productimage6 from "../../Assets/Product-imag6.jpg";

import {
  Col,
  Row,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
import classes from "./ProductItem.module.css";

export const ProductItem = () => {
  return (
    <Fragment>
      <h3 className={classes.h}>Products</h3>
      <div >
      <div className={classes.box}>
      <div classNam={classes.Card}>

<Card>
  <CardImg top width="156px" height='156px' src={Productimage1} alt="Card image cap" />
  <CardBody>
    <CardTitle tag="h5" >₹860.00</CardTitle>
    <CardSubtitle tag="h5" className="mb-2 text-muted ">
      Red Velvet Cake
    </CardSubtitle>
    <Button className={classes.btn}>Buy</Button>
  </CardBody>
</Card>

</div>
<div></div>
      </div>
    
      </div>

  
       
   

      <div>
        <Card>
          <CardImg top width="156px" src={Productimage2} alt="Card image cap" />
          <CardBody>
            <CardTitle tag="h5">₹520.00</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">
              Donuts pack 6
            </CardSubtitle>
            <Button className={classes.btn}>Buy</Button>
          </CardBody>
        </Card>
      </div>

      <Row>
        <Col>
          <Card>
            <CardImg
              top
              width="156px"
              src={Productimage3}
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle tag="h5">₹860.00</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">
                Red Velvet Cake
              </CardSubtitle>
              <Button className={classes.btn}>Buy</Button>
            </CardBody>
          </Card>
          <Card>
            <CardImg
              top
              width="156px"
              src={Productimage4}
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle tag="h5">₹860.00</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">
                Red Velvet Cake
              </CardSubtitle>
              <Button className={classes.btn}>Buy</Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card>
            <CardImg
              top
              width="156px"
              src={Productimage5}
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle tag="h5">₹860.00</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">
                Red Velvet Cake
              </CardSubtitle>
              <Button className={classes.btn}>Buy</Button>
            </CardBody>
          </Card>
          <Card>
            <CardImg
              top
              width="156px"
              src={Productimage6}
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle tag="h5">₹860.00</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">
                Red Velvet Cake
              </CardSubtitle>
              <Button className={classes.btn}>Buy</Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <hr />
    </Fragment>
  );
};
