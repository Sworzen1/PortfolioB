import React from "react"
import {makeStyles} from "@material-ui/core/styles"
import avatar from "./avatar.png"


const useStyles = makeStyles({
container:{
    display:"flex",
    height:"100vh",
    backgroundColor:"#0d1422",
    "@media(min-width: 768px)":{
    height:"80vh"
    },
    "@media(min-width: 1024px)":{
        height:"100vh"
        },
        "@media(min-width: 1440px)":{
            height:"100vh"
            }
},

left:{
    position:"relative",
    height:"400px",
    left:150,
        "@media (min-width: 320px)":{
     left:0,
    top:20
    },
    "@media (min-width: 768px)":{
        width:"300px",
        height:"100%",
       },
       "@media (min-width: 1440px)":{
left:150,
height:"400px"
       },

},
right:{
    position:"relative",
backgroundColor:"#0d1422",
height:"400px",
width:"700px",
boxShadow:" 0px 8px 19px 14px rgba(0,0,0,0.75)",
top:195,
left:300,
    "@media (min-width: 320px)":{
        top:330,
      height:"220px",
      width:"70vw",
      left:"-85%"
    },
    "@media (min-width: 768px)":{
        top:120,
        left:15,
        width:"400px",
        height:"250px",
    },
    "@media (min-width: 1024px)":{
        top:190,
        left:100,
        width:"550px",
        height:"300px",
    },
    "@media (min-width: 1440px)":{
        height:"400px",
        width:"700px",
        top:195,
        left:280,
        
    }
},
span: {
    display:"flex",
    position:"relative",
    height:"130%",
    width:"60%",
    border:"8px solid #e65c00",
    top:-70,
    left:200,
    "&:hover": {
        boxShadow:" 1px 10px 50px 10px #e65c00",
        transition:"1s",
        transform:"scale(0.95,0.95)"
    },
        "@media (min-width: 320px)":{
      left:0,
      width: "70vw",
      height:"100%",
      top:0,
      border:"none",
    },
    "@media (min-width: 768px)":{
        border:"8px solid #e65c00",
        width:"60%",
        height:"130%",
        float:"right",
        top:-50,
        left:-50,
    },
    "@media (min-width: 1440px)":{
        height:"130%",
        width:"60%",
        top:-70,
        

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
    borderTop:"8px solid #e65c00",
    borderBottom:"8px solid #e65c00",
        "@media (min-width: 320px)":{
      display:"none"
    },
    "@media (min-width: 768px)":{
        display:"flex",
        height:"50px",
        width:"100px",
        fontSize:"15px",
        padding:"15px",
        left:-70,
        top:80,
    },
    "@media (min-width: 1024px)":{
        display:"flex",
        height:"70px",
        width:"125px",
        fontSize:"25px",
        padding:"20px",
        left:-100,
        top:80,
    },
    "@media (min-width: 1440px)":{
        left:-120,
        top:80,
        padding:"30px",
        fontSize:"2em",
        height:"90px",
        width:"150px",
    }
},
text: {
position:"relative",
 color:"white",
 left:-60,
 top:160,
 textAlign:"justify",
     "@media (min-width: 320px)":{
      left:0,
      top:0,
      padding:"20px",
      width:"80vw",
      fontSize:12,
    },
    "@media (min-width: 375px)":{
        left:0,
        top:20,
        padding:"20px",
        width:"80vw",
        fontSize:12,
      },
      "@media (min-width: 768px)":{
       paddingRight:10,
       height:"100%",
       width:"300px",
       left:-30,
       padding:0,
       top:60     
    },
    "@media (min-width: 1024px)":{
        paddingRight:10,
        height:"100%",
        width:"300px",
        left:-50,
        padding:0,
        top:60,
        fontSize:14,    
     },
     "@media (min-width: 1440px)":{
        fontSize:17,   
        top:120, 
     }
},

img1: {

    borderRadius:50,
    height:500,
        "@media (min-width: 320px)":{
      height:200
    },
    "@media (min-width: 768px)":{
        position:"relative",
        top:30,
        height:300,
    },
    "@media (min-width: 1024px)":{
        position:"relative",
        top:80,
        height:400,
        left:50
    },
    "@media (min-width: 1440px)":{
        height:500,
        top:-50,
        left:-10
    },
},
sectionTitle: {
    color:"white",
    letterSpacing: "4px",
    padding:"30px",
    fontWeight: 300,
    marginTop:70,
        "@media (min-width: 320px)":{
     marginTop:0,
     display:"flex",
     padding:0,
     width:"100vw",
     justifyContent:"center",
     alignItems:"center",
    },
    "@media (min-width: 768px)":{
        position:"relative",
        padding:0,
        left:-230,
        top:10
       },
    "@media (min-width: 1024px)":{
        position:"relative",
        padding:0,
        left:-310,
        top:50
       },
       "@media (min-width: 1440px)":{
        padding:"30px",
        marginTop:70,
        left:-590,
        top:-70
       }


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