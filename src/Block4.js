import React from "react"
import {makeStyles} from "@material-ui/core/styles"

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
    }
})

const Block4 = () => {
    const classes = useStyles()

    return (
        <div className={classes.container} id="section4"> 
        <div>
            <h1 className={classes.title}>Projects</h1>
        </div>

        </div>
    )
}
export default Block4 