import React, {useState} from "react"
import {makeStyles} from "@material-ui/core/styles"
import calculator from "./calculator.png"
import bartek from "./avatar.png"
import ProjectItem from "./ProjectItem"

const useStyles = makeStyles({
    container:{
        position:"absolute",
        background: "linear-gradient(180deg, #070f20 10%, #030914 100%)",
        height:"100vh",
        width:"100%"
    },
    projects:{
        display:"grid",
        gridTemplateColumns:"auto auto auto auto"
    },
    title:{
        color:"white",
        letterSpacing: "4px",
        padding:"30px",
        fontWeight: 300,
        marginTop:90
    },
    
})

const Block4 = () => {
    const classes = useStyles()
    

    const ProjectsList = [
        {
            img:calculator
        },
        {
            img:bartek
        }
    ]

    return (
        <div className={classes.container} id="section4"> 
        <div>
            <h1 className={classes.title}>Projects</h1>
        </div>
        <div className={classes.projects}>
            {ProjectsList.map(item=>{
                return(
                <ProjectItem
                key={item.img}
                img={item.img}
                />
                )
            })}
                </div>
                </div>


    )
}
export default Block4 