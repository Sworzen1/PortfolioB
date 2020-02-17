import React, {useState} from "react"
import {makeStyles} from "@material-ui/core/styles"
import xd from "./xd.jpg"

const useStyles = makeStyles({
    container:{
        position:"absolute",
        background: "linear-gradient(180deg, #070f20 10%, #030914 100%)",
        height:"100vh",
        width:"100%"
    },
    title:{
        color:"white",
        letterSpacing: "4px",
        padding:"30px",
        fontWeight: 300,
        marginTop:90
    },
    box:{
        backgroundColor:"black",
        height:290,
        width:290,
        position:"relative",
        left:200,
        top:100,
        transition:"1s",
    },
    box1:{
        backgroundColor:"orange",
        height:290,
        width:290,
        position:"relative",
        left:200,
        top:100,
        transition:"1s",
        cursor:"pointer"
    },
    img:{
        position:"relative",
        height:290,
        width:290,
        filter:"blur(4px) grayscale(1)",
        backgroundImage:`url(${xd})`,
        backgroundSize:"cover",
        transition:"1s"
    },
        img1:{
        position:"relative",
        height:290,
        width:290,
        filter:"blur(0px) grayscale(0)",
        backgroundImage:`url(${xd})`,
        backgroundSize:"cover",
        transition:"1.5s"
    },
    
})

const Block4 = () => {
    const classes = useStyles()
    const [hover, setHover] = useState(true)

    return (
        <div className={classes.container} id="section4"> 
        <div>
            <h1 className={classes.title}>Projects</h1>
        </div>
        <div className={classes.projects}>

            <div className={hover ? classes.box : classes.box1} onMouseLeave={() => setHover(true)}
          onMouseEnter={() => setHover(false)}>
                <div className={hover ? classes.img : classes.img1}/>
                    </div>
                </div>

        </div>


    )
}
export default Block4 