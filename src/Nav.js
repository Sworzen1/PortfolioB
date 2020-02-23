import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import LogoBs from "./LogoBs1.png";
import { Link } from "react-scroll";


const useStyles = makeStyles({
  nav: {
    zIndex: 3,
    position: "fixed",
    width: "100%",
    height: "60px",
    borderBottom: "1px solid white",
    color: "white",
    "@media (min-width: 320px)":{
      width:"100vw"
    }
  },

  openMenu: {
    position: "absolute",
    lineHeight: "60px",
    width: "20px",
    left: "1.4em",
    cursor: "pointer"
  },

  menu: {
    position: "fixed",
    zIndex: 2,
    width: "30%",
    height: "100vh",
    backgroundColor: "#fff",
    borderRight: "1px solid rgba(0, 0, 0, 0.1)",
    left:"-30%",
    transition:"1.5s",
        "@media (min-width: 320px)":{
      width:"60vw",
      left:"-60%"
    },

  },
  menuOpen: {
    position: "fixed",
    zIndex: 2,
    width: "30%",
    height: "100vh",
    backgroundColor: "#fff",
    borderRight: "1px solid rgba(0, 0, 0, 0.1)",
    left:0,
    transition:"1.5s",
    "@media(min-width: 320px)":{

      width:"80%",
  },
  "@media (min-width: 768px)":{
    width:"40%"
  }
  },
  brand: {
    position: "absolute",
    lineHeight: "60px",
    left: "50%",
    transform: "translateX(-50%)",
    textDecoration: "none",
    fontSize: "14px",
    fontWeight: 300,
    letterSpacing: "4px"
  },
  logo: {
    position: "absolute",
    lineHeight: "30px",
    right: "1.4em",
    cursor: "pointer",
    width: "80",
    height: "60px",
        "@media (min-width: 320px)":{
      display:"none"
    } ,
           "@media (min-width: 768px)":{
      display:"flex"
    }
  },
  closeMenu: {
    position: "relative",
    lineHeight: "60px",
    float: "right",
    marginRight: "20px",
    cursor: "pointer",
    color: "black"
  },
  mediaMenu: {
    position: "relative",
    top: "50%",
    color: "black"
  },
  ulMenu: {
    listStyle: "none",
    position: "relative",
    top: "40%",
    left: "4%",
    transform: "translate(0%, -50%)"
  },
  liMenu: {
    fontSize: "12px",
    color: "grey !important",
    textTransform: "uppercase",
    letterSpacing: "2px",
    display: "flex",
    cursor:"pointer",
    marginBottom:"40px",
  },
  ulMedia: {
    position: "relative",
    top: "50%",
    "@media(min-width: 320px)":{

      top:-60
  }
  },
  liMedia: {
    display: "inline-block",
    paddingRight: "10px",
    fontSize:25,
  },
  active: {
    borderRight:"3px dotted black"
  },


});

const Nav = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(true);

  const SetMenu = () => {
    setOpen(!open);
  };
 

  return (
    <div className={classes.nav}>
      <div onClick={SetMenu} className={classes.openMenu}>
        <ion-icon name="menu"></ion-icon>
      </div>
      <div className={classes.brand}>
        <span>Portfolio</span>
      </div>
      <div className={classes.logo}>
        <img src={LogoBs} />
      </div>
      <div className={open ? classes.menu : classes.menuOpen}>
        <div onClick={SetMenu} className={classes.closeMenu}>
          <ion-icon name="close"></ion-icon>
        </div>
        <ul className={classes.ulMenu}>
          <li className={classes.liMenu}>
            <Link
              activeClass={classes.active}
              to="section1"
              spy={true}
              smooth={true}
              duration={1000}
              onClick={SetMenu}
              offset={-60}
             >
              Home
            </Link>
          </li>
          <li className={classes.liMenu} >
            <Link
            onClick={SetMenu}
              activeClass={classes.active}
              to="section2"
              spy={true}
              smooth={true}
              duration={1000}
              offset={-60}
            >
              AboutMe
            </Link>
          </li>
          <li className={classes.liMenu}>
            <Link
              activeClass={classes.active}
              to="section3"
              spy={true}
              smooth={true}
              duration={1000}
              offset={-60}
              onClick={SetMenu}
            >
              Technologies
            </Link>
          </li>
          <li className={classes.liMenu}>
            <Link
              activeClass={classes.active}
              to="section4"
              spy={true}
              smooth={true}
              duration={1000}
              onClick={SetMenu}
              offset={-60}
            >
              Projects
            </Link>
          </li>
          <li className={classes.liMenu}>
            <Link
              activeClass={classes.active}
              to="section5"
              spy={true}
              smooth={true}
              duration={1000}
              onClick={SetMenu}
            >
              Contact
            </Link>
          </li>
        </ul>
        <div className={classes.mediaMenu}>
          <ul className={classes.ulMedia}>
            <li className={classes.liMedia}>
              <a href="https://pl-pl.facebook.com/b.sworzen" target="_blank" style={{textDecoration:"none",color:"black"}}>
              <ion-icon name="logo-facebook"></ion-icon>
              </a>
            </li> 
            <li className={classes.liMedia}> 
            <a href="https://www.instagram.com/sworzi97" target="_blank" style={{textDecoration:"none",color:"black"}}>
              <ion-icon name="logo-instagram"></ion-icon>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Nav;
