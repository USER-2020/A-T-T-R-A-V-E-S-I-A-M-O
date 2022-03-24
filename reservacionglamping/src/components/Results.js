import { makeStyles, Paper } from '@material-ui/core'
import { mergeClasses } from '@material-ui/styles'

import React from 'react'

const Results = ({src, title, description, price}) => {
    const classes = useStyle()
  return (
    <Paper className = {classes.root}>
        <div className = {classes.left}>
            <img src = {src} className={classes.img} alt={title}/>
        </div>
        <div className = {classes.right}>

        </div>
     </Paper>
  )
}

const useStyle = makeStyles((theme)=>({
    root:{
        
    },

    left:{
        margin:theme.spacing(2, 5, 5, 5)
    },

    img:{
        maxWidth:"400px",
        height: "auto",
        borderRadius:"12px",

    }
}))
export default Results
