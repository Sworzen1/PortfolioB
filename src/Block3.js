import React from "react"
import {makeStyles} from "@material-ui/core/styles"

const useStyles = makeStyles({
     container: {
        background: 'linear-gradient(180deg, #0d1422 10%, #50021c 100%)',
        height:"100vh"
     },
})

const Block3 = () => {
    const classes = useStyles()

    return (
        <div className={classes.container} id="section3"> </div>
    )
}

export default Block3