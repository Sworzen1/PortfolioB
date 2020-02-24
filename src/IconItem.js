import React, {useState} from "react"
import {makeStyles} from "@material-ui/core/styles"

const useStyles = makeStyles({
    box: {
        position: "relative",
        width: "181px",
        height: "181px",
     marginTop:90,
     marginLeft:90,
     "@media(min-width: 320px)":{
      width: "80px",
      height: "80px",
      marginLeft:50,
      marginTop:50,
     },
     "@media(min-width: 375px)":{
      width: "95px",
      height: "95px",
     },
     "@media(min-width: 425px)":{
      width: "120px",
      height: "120px",
     },
     "@media(min-width: 768px)":{
      width: "155px",
      height: "155px",
      marginLeft:70,
      marginTop:70
     },
     "@media(min-width: 1024px)":{
      width: "155px",
      height: "155px",
      marginLeft:70,
      marginTop:50
     },
     "@media(min-width: 1440px)":{
      width: "181px",
      height: "181px",
      marginTop:90,
      marginLeft:90,
     }
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
        cursor:"pointer",
        "@media(min-width: 320px)":{
          width: "80px",
          height: "80px",
         },
         "@media(min-width: 375px)":{
          width: "95px",
          height: "95px",
         },
         "@media(min-width: 425px)":{
          width: "120px",
          height: "120px",
         },
         "@media(min-width: 768px)":{
          width: "155px",
          height: "155px",
         }
        
      },
      frame: {
        position: "absolute",
        display: "flex",
        width: "145px",
        height: "145px",
        border: "5px solid black",
        transition: "0.5s",
        "@media(min-width: 320px)":{
          width: "75px",
          height: "75px",
          left:10,
          top:10
         },
         "@media(min-width: 375px)":{
          width: "90px",
          height: "90px",
         },
         "@media(min-width: 425px)":{
          width: "115px",
          height: "115px",
         },
         "@media(min-width: 768px)":{
          width: "145px",
          height: "145px",
          left:0,
          top:0
         }
      },
      frameHover: {
        position: "absolute",
        display: "flex",
        width: "145px",
        height: "145px",
        border: "10px solid #e65c00",
        transform: "scale(0.89,0.89)",
        transition: "0.5s",
        "@media(min-width: 320px)":{
          width: "75px",
          height: "75px",
          border: "5px solid black",
          transform: "scale(1,1)",
          left:10,
          top:10
         },
         "@media(min-width: 375px)":{
          width: "90px",
          height: "90px",
          border: "5px solid black",
          transform: "scale(1,1)",
         },
         "@media(min-width: 425px)":{
          width: "115px",
          height: "115px",
          border: "5px solid black",
          transform: "scale(1,1)",
         },
         "@media(min-width: 768px)":{
          width: "145px",
          height: "145px",
          left:0,
          top:0,
          border: "5px solid black",
          transform: "scale(1,1)",
         },
         "@media(min-width: 768px)":{
          width: "145px",
          height: "145px",
          left:0,
          top:0,
          border: "10px solid #e65c00",
          transform: "scale(0.89,0.89)",
         },
        
      },
      icona:{
        color:"black",
        fontSize:"80px",
        top: "-40%",
        left: "50%",
        position: "relative",
        transform:"translate(-50%,0%)",
        transition: "0.5s",
        "@media(min-width: 320px)":{
          top: "-55%",
          left: "50%",
          fontSize:"50px",
         },
         "@media(min-width: 375px)":{
          fontSize:"60px",
         },
         "@media(min-width: 425px)":{
          fontSize:"75px",
         },
         "@media(min-width: 768px)":{
          fontSize:"80px",
          top: "-40%",
         }
      },
      iconaHover: {
        color:"#e65c00",
        fontSize:"80px",
        top: "-40%",
        left: "50%",
        position: "relative",
        transform:"translate(-50%,0%)",
        transition: "0.5s",
        "@media(min-width: 320px)":{
          top: "-55%",
          left: "50%",
          fontSize:"50px",
          color:"black"
         },
         "@media(min-width: 375px)":{
          fontSize:"60px",
         },
         "@media(min-width: 425px)":{
          fontSize:"75px",
         },
         "@media(min-width: 768px)":{
          fontSize:"80px",
          top: "-40%",
         },
         "@media(min-width: 1024px)":{
          fontSize:"80px",
          color:"#e65c00",
          top: "-40%",
         },

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