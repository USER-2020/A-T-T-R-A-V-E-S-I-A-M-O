import { makeStyles, Typography, Chip, Slider} from '@material-ui/core'
import HighlightOffTwoToneIcon  from '@material-ui/icons/HighlightOffTwoTone'
import React from 'react'
import mockData, {chips} from '../mockData'
import Results from './Results'
import react, {useState} from 'react'
import { useSelector } from 'react-redux'
import { selectStart } from '../features/startSlice'
import { selectEnd } from '../features/endSlice'


const SearchPage = () => {
  const classes= useStyle()
  const [value, setValue] =useState(1000000)
  const start = useSelector(selectStart)
  const end = useSelector(selectEnd)

  const handleChanged = (e, newValue)=>{
    setValue(newValue);
    console.log(value)
  }
  return (
    <div className={classes.root}>
      <Typography variant ="h5" gutterBottom>
          Available cabains
      </Typography>
      <div className={classes.chips}>
        {
          chips.map(({key, label}) =>{
            let icon =<HighlightOffTwoToneIcon/>
            return (
              <Chip label = {label} key={key} icon={icon} className={classes.chip}>

              </Chip>
            )
          })
        }

      </div>
      <div className = {classes.selector}>
        <Typography gutterBottom variant='h5'>Prices</Typography>
          <Slider value={value} 
                  onChange={handleChanged}
                  aria-label="Default" 
                  min={200000}
                  max={1000000}
                  valueLabelDisplay="auto"
                  color='secondary' 
                  
          />
        
      </div>
      {

        // Mapeo de array con las habitaciones
        mockData
        .filter((data)=>data.cat === "cabain")
        .filter((data)=> data.price < value)
        // .filter((data)=> end < data.)
        .map(({src, title, description, price}, index)=>(
          <Results title = {title}
                  key={index}
                  src={src}
                  description = {description}
                  price = {price}
          />
        ))
      }
      
     
      
    </div>
  )
}

const useStyle= makeStyles((theme)=>({
  root:{

  },

  chips:{
    padding: theme.spacing(1),
  },

  chip:{
    margin:theme.spacing(1),
  },

  selector:{
    width:"300px",
    marginLeft: theme.spacing(3),
    "$ h5":{
      fontSize: "15px",
      fontWeight: "bold",
    }
  }
}))

export default SearchPage
