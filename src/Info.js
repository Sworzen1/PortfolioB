import React from "react"
import {makeStyles} from "@material-ui/core/styles"

const useStyles = makeStyles({
    info: {
        position:"absolute",
        height:"70px",
        width:"200px",
        color:"white",
        backgroundColor:"#000000",
        borderRadius:15,
        left:25,
        top:80,
        padding:20,
        opacity:0.6,
            "@media (min-width: 320px)":{
      width:"150px",
      height:"80px"
    }
        
    }
})

const Info = () => {
    const classes = useStyles()
    return(
        <div className={classes.info}>
        <span>
            If You click on background,
            You can create own star constellations
        </span>
    </div>
    )
}
export default Info