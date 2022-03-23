import React from 'react'
import { CssBaseline, makeStyles } from '@material-ui/core'
import Banner from './Banner'
import RoomCard from './RoomCard'
import DatePicker from './DatePicker'

const Home = () => {
    const classes = useStyle()
  return (
    <>
    {/* React Fragment */}
    {/* Bloque vacio */}
    <CssBaseline/>
    <div className = { classes.root}>
       <div className= { classes.dates}>
           <DatePicker/>
       </div>
       <Banner/>
       <div className= { classes.cards}>
            <RoomCard/>
            <RoomCard/>
            <RoomCard/>
            <RoomCard/>
       </div>
    </div>
    </>
    
  )
}

const useStyle = makeStyles((theme)=>({

    root:{
       
    },

}))
export default Home
