import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import img1 from "./mountain.jpg"
import Particles from 'react-particles-js';

const useStyles = makeStyles({
    black:{
        backgroundColor:"black",
        height:"100vh",
        width:"100%",
        opacity:0.3,
    },
container: {
    backgroundImage: `url(${img1})`,
    height:"100vh",
    width:"100%",
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover", 
        "@media (min-width: 320px)":{
      width:"100vw",
      backgroundPosition:"center"
    }
},

})
const Block1 = () => {

    const classes = useStyles();
    
    return(
        
        
        <div className={classes.container} id="section1">
            <div className={classes.black}>

             <Particles 
               params={{
                "particles": {
                    "number": {
                        "value": 55,
                        "density": {
                            "enable": true,
                            "value_area": 1500
                        }
                    },
                    "color":{
                    "value":"#ffafaf",
                    },
                    "line_linked": {
                        "enable": true,
                        "opacity": 0.9,
                        "color":"#ff0000",
                        "distance":100
                    },
                    "move": {
                        "direction":"right",
                        "speed": 1,
                        "out_mode":"out",
                        "bounce":false
                    },
                    "size": {
                        "value": 3
                    },
                    "opacity": {
                        "anim": {
                            "enable": true,
                            "speed": 1,
                            "opacity_min": 0.9
                        }
                    }
                },
                "interactivity": {
                    "events": {
                        "onclick": {
                            "enable": true,
                            "mode": "push"
                        }
                    },
                    "modes": {
                        "push": {
                            "particles_nb": 1
                        }
                    }
                },
                "retina_detect": true
            }}
               />
              
        </div>
        </div>
    )
}

export default Block1