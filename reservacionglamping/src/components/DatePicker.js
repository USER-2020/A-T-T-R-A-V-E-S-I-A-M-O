import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { Button, InputBase, makeStyles, Typography } from '@material-ui/core';
import { People } from "@material-ui/icons";
import { useNavigate} from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { selectStart, setStart } from '../features/startSlice';
import { selectEnd, setEnd } from '../features/endSlice'



const DatePicker = () => {
    const classes = useStyle()
    const navegar = useNavigate()
    // Estado inicial
    const start = useSelector(selectStart);
    // Estado final 
    const end = useSelector(selectEnd);
    const dispatch = useDispatch()

    const selectionRange = {
        startDate: start,//El año empieza desde el arreglo 0
        endDate: end, //El año termina en 12-1 =>11
        key: "selection"
    }
    const handleSelect = (ranges)=>{
        console.log(ranges);
        dispatch(setStart(ranges.selection.startDate.getTime()));
        dispatch(setEnd(ranges.selection.endDate.getTime()))
    }
  return (
    <div className= {classes.root}>
        
        <DateRangePicker ranges = { [selectionRange] }
            onChange = {handleSelect}
        />
        <div className= {classes.inputSection}>
           <Typography variant='h5'>Number of guest</Typography>
           <div className= {classes.people}>
               <InputBase placeholder='2pax'
                inputProps={{className: classes.inputs}}
               />
               <People/>
           </div>
           <Button onClick={ ()=>navegar(window.location.pathname="/search")}>Search Room</Button>
        </div>

    </div>
  )
}

const useStyle = makeStyles((theme) => ({

    root:{
        position:'absolute',
        top: "13vh", //pocision vertical
        left: "30vw", //Posicion horizontal
        zIndex: "50",
        [theme.breakpoints.down("sm")]: {
            //para pantallas pequeñas sm (small) responsive
            top:"16vh",
            left:0,
        }
    },

    inputSection:{
        display:"flex",
        flexDirection: "Column",
        backgroundColor: "white",
        "& h5": {
            textAlign: "center",
        },
        "& button:hover":{
            backgroundColor: "#405844",
            color: "white",
        }
    },

    people:{
        display: "flex",
        justifyContent:"center",
        alignItems: "center"
    },

    inputs: {
        width: "6vw",
        border: "1px solid #ccc",
        borderRadius: "20px",
        margin: theme.spacing(0, 2, 2, 0),
        padding: theme.spacing(2)
    }
}))
export default DatePicker
