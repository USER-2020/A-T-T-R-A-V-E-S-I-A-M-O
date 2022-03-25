import { makeStyles, Paper, Typography } from '@material-ui/core'
import accounting from 'accounting'

import React from 'react'

const Results = ({src, title, description, price}) => {
    const classes = useStyle()
  return (
    <Paper className = {classes.root}>
        <div className = {classes.left}>
            <img src = {src} className={classes.img} alt={title}/>
        </div>
        <div className = {classes.right}>
            <Typography variant="h6">{title}</Typography>
            <Typography variant="body1">{description}</Typography>
            <Typography variant="body1">Price {" "}
                {/* Funcion para darle formato de dinero  */}
                <span className={classes.number}>{accounting.formatMoney(price, "COP ")}</span>
            </Typography>
        </div>
     </Paper>
  )
}

const useStyle = makeStyles((theme)=>({
    root:{
        display: "flex",
        margin: theme.spacing(1),
        justifyContent: "flexstart",
        [theme.breakpoints.down("xs")]:{
            display: "inline-block",
            margin: theme.spacing(4)
        },
    },

    left:{
        margin:theme.spacing(2, 5, 5, 5)
    },

    img:{
        maxWidth:"400px",
        height: "auto",
        borderRadius:"12px",

    },

    number:{
        fontWeight: "1000",
        marginLeft: theme.spacing(2),
        fontSize:"1.2rem"
    }
}))
export default Results
