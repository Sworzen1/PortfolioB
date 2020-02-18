import React, {useState} from "react"
import {makeStyles} from "@material-ui/core/styles"

const useStyles = makeStyles({
    box: {
        position: "relative",
        width: "181px",
        height: "181px",
     marginTop:90,
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
        border: "5px solid black",
        transition: "0.5s",
      },
      frameHover: {
        position: "absolute",
        display: "flex",
        width: "145px",
        height: "145px",
        border: "10px solid #e65c00",
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
        color:"#e65c00",
        fontSize:"80px",
        top: "-40%",
        left: "50%",
        position: "relative",
        transform:"translate(-50%,0%)",
        transition: "0.5s",
    }

})

const IconItem = (props) => {
    const [hover, setHover] = useState(true);
    const classes = useStyles()

    return(
         <div className={classes.box}>
      <a href={props.link} target="_blank">
        <div 
          className={classes.iconBox}
          onMouseLeave={() => setHover(true)}
          onMouseEnter={() => setHover(false)}
        >
       <p className={hover ? classes.icona : classes.iconaHover}>
        {props.icon}</p>
        </div></a>
        <span
          className={hover ? classes.frame : classes.frameHover}
        ></span>
      </div> 
    )
}
export default IconItem