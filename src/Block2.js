import React from "react"
import {makeStyles} from "@material-ui/core/styles"
import avatar from "./avatar.png"


const useStyles = makeStyles({
container:{
    display:"flex",
    height:"100vh",
    backgroundColor:"#0d1422",
},
left:{
    position:"relative",
    height:"400px",

left:150
},
right:{
    position:"relative",
backgroundColor:"#0d1422",
height:"400px",
width:"700px",
boxShadow:" 0px 8px 19px 14px rgba(0,0,0,0.75)",
top:195,
left:300
},
span: {
    display:"flex",
    position:"relative",
    height:"130%",
    width:"60%",
    border:"8px solid #9a1441",
    top:-70,
    left:200,
    "&:hover": {
        boxShadow:" 1px 10px 50px 10px #9a1441",
        transition:"1s",
        transform:"scale(0.95,0.95)"
    }
    
},
title:{
    position:"relative",
    height:"90px",
    width:"150px",
    padding:"30px",
    backgroundColor:"#0d1422",
    left:-120,
    top:80,
    color:"white",
    borderRadius:25,
    borderTop:"8px solid #9a1441",
    borderBottom:"8px solid #9a1441"
},
text: {
position:"relative",
 color:"white",
 left:-60,
 top:160,
 textAlign:"justify"
},

img1: {

    borderRadius:50,
    height:500,
},
sectionTitle: {
    color:"white",
    letterSpacing: "4px",
    padding:"30px",
    fontWeight: 300,
    marginTop:70

}
})

const Block2 = () => {
    const classes = useStyles();

    return (
        <div className={classes.container} id="section2">

            <div className={classes.left}>
            <h1 className={classes.sectionTitle}>About Me</h1>
            <img src={avatar} className={classes.img1} />
            </div>
           
            <div className={classes.right}>
            <span className={classes.span}>
            <h1 className={classes.title}>Front-End Developer</h1>
             <p className={classes.text}> 
           Hello, iam Front End developer Hello, 
           iam Front End developer Hello, iam Front End developer Hello, 
           iam Front End developer Hello, iam Front End developer Hello, 
           iam Front End developer Hello, iam Front End developer Hello, iam Front End developer
           </p>
                </span>
                </div>
            </div>
        
    )
}

export default Block2