import React from "react"
import {makeStyles} from "@material-ui/core/styles"

const useStyles = makeStyles({
    container:{
        background: "linear-gradient(180deg, #030914 10%, #000000 100%)",
        width:"100%",
        height:"100vh",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",

    },
    contact:{
        position:"relative",
        backgroundColor:"#e65c00",
        height:"400px",
        width:"700px",
        borderRadius:30,
        "@media(min-width: 320px)":{
            height:"60%",
            width:"80%"

        },
        "@media(min-width: 768px)":{
            height:"60%",
            width:"60%"

        }
    },
    title:{
        position:"relative",
        color:"white",
        letterSpacing: "4px",
        fontWeight: 300,
        
    },
    ContactInformations:{
        position:"relative",
        display:"inline-block",
        top:40,
        color:"white",
        "@media(min-width: 320px)":{
top:0

        }
    }

})

const Block5 = () =>{
    const classes = useStyles()
    return(
        <div className={classes.container} id="section5">
            <div className={classes.contact}>
                <div className={classes.ContactTitle}>
                     <h2 className={classes.title}>Contact </h2>
                </div>
                <div className={classes.ContactInformations}>
                    <p>Bartłomiej Sworzeń</p>
                   <p> E-mail:<br/>b.sworzen@gmail.com</p>
                   <p>GitHub:  <br/>www.github.com/Sworzen1 </p>
                   <p>Facebook: <br/> www.facebook.com/b.sworzen</p>
                   <p>Instagram: <br/> www.instagram.com/sworzi97</p>
                   
                </div>
            </div>
        </div>
    )
}

export default Block5