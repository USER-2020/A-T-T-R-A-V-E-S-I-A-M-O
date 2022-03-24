import { makeStyles, Typography } from '@material-ui/core'
import React from 'react'

const Footer = () => {
    // inicicializar useStyle
    const classes = useStyle();
  return (
    <div className = {classes.root}>
        <Typography variant ="subtitle1" gutterBottom>
            2022 &#169; Copyright by Juan Fernando Zuluaga Aguirre
        </Typography>
        <Typography variant ="subtitle1" gutterBottom>
            Privacy - Terms - Sitemap 
        </Typography>
    </div>
  )
}
const useStyle = makeStyles((theme)=>({

    root:{
        borderTop:"1px solid #ccc",
        textAlign: "center",
        fontStyle: "italic",
        marginTop: theme.spacing(2),
        background: "#405844",
        color:"white"
    }
}))
export default Footer
