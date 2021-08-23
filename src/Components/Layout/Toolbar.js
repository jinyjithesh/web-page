import React from "react";
import { Container, Navbar, NavbarBrand } from "reactstrap";
import classes from "./Toolbar.module.css";
export const Toolbar = () => {
  return (
    <Navbar className={classes.Toolbar} >
      <Container>
        <NavbarBrand>
          <div className={classes.icon}>
            <svg
              width="360"
              height="56"
              viewBox="0 0 360 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="28" cy="28" r="20" fill="white" />
              <path
                d="M19 34H37V32H19V34ZM19 29H37V27H19V29ZM19 22V24H37V22H19Z"
                fill="black"
              />
            </svg>
          </div>
        </NavbarBrand>
      </Container>
    </Navbar>
  );
};
