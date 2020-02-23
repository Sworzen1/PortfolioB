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
        "@media(min-width: 320px)":{
            left:"25%",
            top:0,
            height:150,
            width:150,
        },
        "@media(min-width: 375px)":{
            left:"22%",
            top:0,
            height:200,
            width:200,
        },
        "@media(min-width: 425px)":{
            left:"26%",
            top:0,
            height:200,
            width:200,
        },
        "@media(min-width: 768px)":{
            left:"17%",
            top:50,
            height:250,
            width:250,
        },
        "@media(min-width: 1024px)":{
            left:"20%",
            top:50,
            height:290,
            width:290,
        }
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
        "@media(min-width: 320px)":{
            left:"25%",
            top:0,
            height:150,
            width:150,
        },
        "@media(min-width: 375px)":{
            left:"22%",
            top:0,
            height:200,
            width:200,
        },
        "@media(min-width: 425px)":{
            left:"26%",
            top:0,
            height:200,
            width:200,
        },
        "@media(min-width: 768px)":{
            left:"17%",
            top:50,
            height:250,
            width:250,
        },
        "@media(min-width: 1024px)":{
            left:"20%",
            top:50,
            height:290,
            width:290,
        }
    },
    img:{
        position:"relative",
        height:290,
        width:290,
        filter:"blur(4px) grayscale(1)",
        backgroundSize:"cover",
        transition:"1s",
        "@media(min-width: 320px)":{
            height:150,
            width:150,
            filter:"none",
        },
        "@media(min-width: 375px)":{
            top:0,
            height:200,
            width:200,
        },
        "@media(min-width: 768px)":{
            top:0,
            height:250,
            width:250,
        },
        "@media(min-width: 1024px)":{
            height:290,
            width:290,
            filter:"blur(4px) grayscale(1)",
        }
    },
        img1:{
        position:"relative",
        height:290,
        width:290,
        filter:"blur(0px) grayscale(0)",
        backgroundSize:"cover",
        transition:"1.5s",
        "@media(min-width: 320px)":{
            height:150,
            width:150,
            filter:"none",
        },
        "@media(min-width: 375px)":{
            top:0,
            height:200,
            width:200,
            filter:"none",
        },
        "@media(min-width: 768px)":{
            top:0,
            height:250,
            width:250,
        },
        "@media(min-width: 1024px)":{
            height:290,
            width:290,
            filter:"blur(0px) grayscale(0)",
        }
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