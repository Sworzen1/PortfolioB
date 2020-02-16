import React from "react"
import {makeStyles} from "@material-ui/core/styles"

const useStyles = makeStyles({
    container:{
        backgroundColor:"red",
        height:"100vh"
    }
})

const Block4 = () => {
    const classes = useStyles()

    return (
        <div className={classes.container}> Hello </div>
    )
}
export default Block4 