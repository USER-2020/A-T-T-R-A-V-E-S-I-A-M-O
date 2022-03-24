import React from 'react'
import { CssBaseline, makeStyles, Button, Grid } from '@material-ui/core'
import Banner from './Banner'
import RoomCard from './RoomCard'
import DatePicker from './DatePicker'
import { useState } from 'react'
import mockData from '../mockData'

const Home = () => {
    const classes = useStyle()
    const [showdates, setShowdates ] = useState(false)
  return (
    <>
    {/* React Fragment */}
    {/* Bloque vacio */}
    <CssBaseline/>
    <div className = { classes.root }>
       <div className= { classes.dates}>
         <Button onClick = {()=>setShowdates(!showdates)}>
           {
              showdates ? "Hide" : "Search Dates"
           }
              
         </Button>
        
           
       </div>
       {
           showdates && <DatePicker/> 
        }
       <Banner/>
       <Grid container className= { classes.cards} spacing={4}>
         {
           mockData.map(({src, title, description}, index)=>(
            <Grid item sm="6" md="4" lg="3">
                  <RoomCard src={src} 
                          title={ title } 
                          description={description } 
                          key ={index}/>
            </Grid>
            
            ))
         }
            
            
       </Grid>
    </div>
    </>
    
  )
}

const useStyle = makeStyles((theme)=>({

    root:{
       display: "flex",
       flexDirection: "column",
       margin: theme.spacing(1)

    },

    dates:{
      display: "flex",
      flexDirection: "column",
      "& button":{
        border: "1px solid #ccc",
        backgroundColor: "white",
        color:"black",
        textTransform: "inherit",
        fontSize: "1.2rem",
        fontWeight: "bold"
      },
      "& button:hover":{
        backgroundColor:"#5D8A66",
        color:"white",
        
      }
    }

}))
export default Home
