import React, {useState} from "react"
import {makeStyles} from "@material-ui/core/styles"

const useStyles = makeStyles({
    box:{
        border:"2px solid black",
        backgroundColor:"black",
        height:290,
        width:290,
        position:"relative",
        left:200,
        top:100,
        transition:"1s",
    },
    box1:{
        border:"2px solid #e65c00",
        backgroundColor:"#e65c00",
        height:290,
        width:290,
        position:"relative",
        left:200,
        top:100,
        transition:"1s",
        cursor:"pointer",
        boxShadow:" 5px 5px 30px 5px #e65c00",
    },
    img:{
        position:"relative",
        height:290,
        width:290,
        filter:"blur(4px) grayscale(1)",
        backgroundSize:"cover",
        transition:"1s"
    },
        img1:{
        position:"relative",
        height:290,
        width:290,
        filter:"blur(0px) grayscale(0)",
        backgroundSize:"cover",
        transition:"1.5s"
    },
})
const ProjectItem = (props) => {
    const classes = useStyles()
    const [hover, setHover] = useState(true)

    return(
        <div className={hover ? classes.box : classes.box1} onMouseLeave={() => setHover(true)}
        onMouseEnter={() => setHover(false)}>
              <div className={hover ? classes.img : classes.img1} style={{backgroundImage:`url(${props.img})`}}/>
                  </div>
    )
}
export default ProjectItem