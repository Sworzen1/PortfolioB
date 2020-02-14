import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    background: "linear-gradient(180deg, #0d1422 10%, #50021c 100%)",
    height: "100vh"
  },

  icon: {
    position: "absolute",
    display: "flex",
    width: "150px",
    height: "150px",
    backgroundColor: "yellow",
    zIndex: 1,
    top: 20,
    left: 20
  },
  frame: {
    position: "absolute",
    display: "flex",
    width: "150px",
    height: "150px",
    border: "3px solid black",
    transition: "0.5s",
  },
  frameHover: {
    position: "absolute",
    display: "flex",
    width: "150px",
    height: "150px",
    border: "3px solid black",
    transform: "scale(0.95,0.95)",
    transition: "0.5s",
  },
  box: {
    backgroundColor: "green",
    position: "relative",
    width: "165px",
    height: "165px"
  }
});

const Block3 = () => {
  const classes = useStyles();
  const [hover, setHover] = useState(true);

  return (
    <div className={classes.container} id="section3">
      <div className={classes.box}>
        <div
          className={classes.icon}
          onMouseLeave={() => setHover(true)}
          onMouseEnter={() => setHover(false)}
        >
          Hello Baby
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
