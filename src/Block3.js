import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    background: "linear-gradient(180deg, #0d1422 10%, #50021c 100%)",
    height: "100vh",
    gridTemplateColumns: "350px 350px 350px 150px",
    display: "grid"
  },
  box: {
    position: "relative",
    width: "181px",
    height: "181px",
 marginTop:150,
 marginLeft:90
  },

  iconBox: {
    position: "absolute",
    display: "flex",
    width: "150px",
    height: "150px",
    backgroundColor: "#e6e6e6",
    border:"1px solid black",
    zIndex: 1,
    top: 30,
    left: 30,
    cursor:"pointer"
    
  },
  frame: {
    position: "absolute",
    display: "flex",
    width: "145px",
    height: "145px",
    border: "3px solid black",
    transition: "0.5s",
  },
  frameHover: {
    position: "absolute",
    display: "flex",
    width: "145px",
    height: "145px",
    border: "3px solid yellow",
    transform: "scale(0.89,0.89)",
    transition: "0.5s",
  },
  icona:{
    color:"black",
    fontSize:"80px",
    top: "-40%",
    left: "50%",
    position: "relative",
    transform:"translate(-50%,0%)",
    transition: "0.5s",
  },
  iconaHover: {
    color:"yellow",
    fontSize:"80px",
    top: "-40%",
    left: "50%",
    position: "relative",
    transform:"translate(-50%,0%)",
    transition: "0.5s",
  }


});

const Block3 = () => {
  const classes = useStyles();
  const [hover, setHover] = useState(true);

  return (
    <div className={classes.container} id="section3">

        {/* HTML */}

      <div className={classes.box}>
        <div
          className={classes.iconBox}
          onMouseLeave={() => setHover(true)}
          onMouseEnter={() => setHover(false)}
        >
        <p className={hover ? classes.icona : classes.iconaHover}>
          <i class="fab fa-html5" ></i></p>
        </div>
        <span
          onMouseLeave={() => setHover(true)}
          onMouseEnter={() => setHover(false)}
          className={hover ? classes.frame : classes.frameHover}
        ></span>
      </div>

        {/* CSS */}

      <div className={classes.box}>
        <div
          className={classes.iconBox}
          onMouseLeave={() => setHover(true)}
          onMouseEnter={() => setHover(false)}
        >
            <p className={hover ? classes.icona : classes.iconaHover}>
          <i class="fab fa-css3-alt" ></i>
          </p>
        </div>
        <span
          onMouseLeave={() => setHover(true)}
          onMouseEnter={() => setHover(false)}
          className={hover ? classes.frame : classes.frameHover}
        ></span>
      </div>

        {/* JS */}


      <div className={classes.box}>
        <div
          className={classes.iconBox}
          onMouseLeave={() => setHover(true)}
          onMouseEnter={() => setHover(false)}
        >
            <p className={hover ? classes.icona : classes.iconaHover}>
          <i class="fab fa-js-square" ></i>
          </p>
        </div>
        <span
          onMouseLeave={() => setHover(true)}
          onMouseEnter={() => setHover(false)}
          className={hover ? classes.frame : classes.frameHover}
        ></span>
      </div>

        {/* REACT */}

      <div className={classes.box}>
        <div
          className={classes.iconBox}
          onMouseLeave={() => setHover(true)}
          onMouseEnter={() => setHover(false)}
        >
            <p className={hover ? classes.icona : classes.iconaHover}>
          <i class="fab fa-react" ></i>
          </p>
        </div>
        <span
          onMouseLeave={() => setHover(true)}
          onMouseEnter={() => setHover(false)}
          className={hover ? classes.frame : classes.frameHover}
        ></span>
      </div>

        {/* JAVA */}

      <div className={classes.box}>
        <div
          className={classes.iconBox}
          onMouseLeave={() => setHover(true)}
          onMouseEnter={() => setHover(false)}
        >
            <p className={hover ? classes.icona : classes.iconaHover}>
          <i class="fab fa-java" ></i>
          </p>
        </div>
        <span
          onMouseLeave={() => setHover(true)}
          onMouseEnter={() => setHover(false)}
          className={hover ? classes.frame : classes.frameHover}
        ></span>
      </div>

        {/* SQL */}

        <div className={classes.box}>
        <div
          className={classes.iconBox}
          onMouseLeave={() => setHover(true)}
          onMouseEnter={() => setHover(false)}
        >
            <p className={hover ? classes.icona : classes.iconaHover}>
          <i class="fas fa-database" ></i>
          </p>
        </div>
        <span
          onMouseLeave={() => setHover(true)}
          onMouseEnter={() => setHover(false)}
          className={hover ? classes.frame : classes.frameHover}
        ></span>
      </div>

      {/* PHOTOSHOP */}

      <div className={classes.box}>
        <div
          className={classes.iconBox}
          onMouseLeave={() => setHover(true)}
          onMouseEnter={() => setHover(false)}
        >
          PS
        </div>
        <span
          onMouseLeave={() => setHover(true)}
          onMouseEnter={() => setHover(false)}
          className={hover ? classes.frame : classes.frameHover}
        ></span>
      </div>
    </div>
  );
};

export default Block3;
