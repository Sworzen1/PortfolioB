import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconItem from "./IconItem"

const useStyles = makeStyles({
  container: {
    background: "linear-gradient(180deg, #0d1422 10%, #070f20 100%)",
    height: "100vh",
    width:"100%",
    "@media(min-width: 375px)":{
      height: "110vh",
    },
    "@media(min-width: 425px)":{
      height: "130vh",
    },
    "@media(min-width: 768px)":{
 height:"140vh"
    },
    "@media(min-width: 1024px)":{
      height:"100vh"
         }
    

  },
  allBoxes:{
    position:"relative",
    width:"100%",
    height:"50vh",
    gridTemplateColumns: "350px 350px 350px 10px",
    display: "grid",
    "@media(min-width: 320px)":{
      gridTemplateColumns:"auto auto",
      left:-20,
      width:"40vw",
      top:-100
    },
    "@media(min-width: 320px)":{
      gridTemplateColumns:"auto auto",
      left:-10,
      width:"40vw",
      top:-100

    },
    "@media(min-width: 768px)":{
      gridTemplateColumns: "auto auto auto ",
    display: "grid",
    top:100
    },
    "@media(min-width: 1024px)":{
      gridTemplateColumns: "auto auto auto auto",
    display: "grid",
    top:100
    }
  },
  title:{
    position:"relative",
      color:"white",
      letterSpacing: "4px",
      padding:"30px",
      fontWeight: 300,
  },
  up : {
    position:"relative",
    display:"flex",
    float:"right",
    right:300,
    top:80,
    "@media (min-width: 320px)":{
      right:0,
      float:"none",
      top:-30
    },
    "@media(min-width: 768px)":{
    top:0,
    float:"right",
    right:100
    }
  }


});

const Block3 = () => {
  const classes = useStyles();

  const IconList = [
    {
      icon:<i class="fab fa-html5" ></i>,
      link:"https://pl.wikipedia.org/wiki/HTML"
    },
    {
      icon:<i class="fab fa-css3-alt" ></i>,
      link:"https://pl.wikipedia.org/wiki/Kaskadowe_arkusze_styl%C3%B3w"
    },
    {
      icon:<i class="fab fa-js-square" ></i>,
      link:"https://pl.wikipedia.org/wiki/JavaScript"
    },
    {
      icon:<i class="fab fa-react" ></i>,
      link:"https://pl.wikipedia.org/wiki/React.js"
    },
    {
      icon:<i class="fab fa-java" ></i>,
      link:"https://pl.wikipedia.org/wiki/Java"
    },
    {
      icon:<i class="fas fa-database" ></i>,
      link:"https://pl.wikipedia.org/wiki/SQL"
    },
    {
      icon:<i class="fab fa-adobe"></i>,
      link:"https://pl.wikipedia.org/wiki/Adobe_Photoshop"
    },
  ]

  return (
    <div className={classes.container} id="section3">
<div className={classes.up}>    <h1 className={classes.title}>Technologies</h1></div>

      <div className={classes.allBoxes}>
        {IconList.map(item =>{
          return (
              <IconItem
              key={item.icon}
              icon={item.icon}
              link={item.link}
              />
          )
        })}
    </div>
    </div>
  );
};

export default Block3;
