import { AppBar, Avatar, InputBase, makeStyles, Toolbar, Typography } from "@material-ui/core"
import { useState } from "react"
import Logo from "../img/Logo_2.png"
import SearchIcon from "@material-ui/icons/Search"
const Header = () => {
  
  const [mobile, setMobile] = useState(false)
  const classes = useStyle()
  const displayMobile = ()=> { }
  const displayDesktop =()=> (     
            <Toolbar className= {classes.toolbar}>
                <img src={Logo} className ={classes.Logo}/>
                <div className= {classes.center}>
                    {/* Div con el buscador para el hotel, con icono y cuadro de input  */}
                    <InputBase fullWidth placeholder = "Search here ..."inputProps = {{className: classes.input}}/>
                    <SearchIcon/>
                </div>
                <div className={classes.right}>
                     <Typography>Sign In</Typography> {/*Componente que nos ayuda a contruir texto en @material-ui */}
                     <Avatar className={classes.avatar}/>
                </div>
               
            </Toolbar>
        )
 
   
    
  return (
    <AppBar className={classes.root}>
        {/* Root => clase padre */}
        {
            mobile ? displayMobile() : displayDesktop()
        }
       
    </AppBar>
  )
}

const useStyle = makeStyles((theme)=>({

    root:{
        position: "sticky"
    },

    toolbar:{
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
    },
    Logo:{
        height: "30px",
        margin: theme.spacing(1,0,0,2),
        obejectFit: "contain",
        
    },

    input:{
        fontSize: "1.2rem",
        padding: theme.spacing(1,5,1,5)
    },

    center:{
        display: "flex",
        alignItems:"center",
        border:"1px solid lightgray",
        borderRadius: "999px",
        minWidth: "400px",
        padding: theme.spacing(1),
        margin: theme.spacing(1),
    },

    right:{
        color: "#333",
        display: "flex",
        alignItems: "center", //alinear verticalmente
        marginLeft: theme.spacing(2)

    },
    avatar:{
        marginLeft: theme.spacing(2)
    }
}))
export default Header
