import React from 'react'
import { Button, makeStyles, Typography} from '@material-ui/core'
import background_image from "../img/animation.gif"
import { Link } from 'react-router-dom'

const Banner = () => {
  // inicializacion de useStyle
  const classes = useStyle()
  return (
   <div className= { classes.root }>
     <div className = { classes.info}>
        <Typography variant ="h2">A T R A V E R S I A M M O </Typography>
        <Link to ="/search">
            <Button variant ="contained">Check our rooms</Button>
        </Link>
        
     </div>
      
   </div>
  )
}

const useStyle = makeStyles((theme)=> ({

  root:{
      height:"50vh",
      position: "relative",
      backgroundImage: `url(${background_image})`,//backtips
      backgroundPosition: "center",
      
      

  },
  info:{
    
    alignItems: "center",
    color: "black",
    textAlign:"center", 
    padding: theme.spacing(2),
    "& h2": {
      marginBottom:theme.spacing(4)
    },
    "& button":{
      backgroundColor: "#405844",
      fontSize: "1.2rem",
      textTransform: "inherit",
      fontWeight:"bold"
      
    },
    
  }
}))
export default Banner
