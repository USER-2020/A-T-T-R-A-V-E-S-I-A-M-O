import { AppBar, Avatar, Drawer, IconButton, InputBase, List, ListItem, makeStyles, Toolbar, Typography } from "@material-ui/core"
import { useEffect, useState } from "react"

import Logo from "../img/Logo_2.png"
import SearchIcon from "@material-ui/icons/Search"
import MenuIcon from "@material-ui/icons/Menu"
import { Link } from "react-router-dom"

const Header = () => {
  
  const [tablet, setTablet] = useState(true)
  const [draweropen, setDraweropen] = useState(false)
  const classes = useStyle()

  useEffect(()=>{
      const responsiveness = ()=> window.innerWidth < 900 ? setTablet(true) : setTablet(false)//Funcion para saber si es responsive si es tamaño tableta o tamaño desktop
      responsiveness();
      window.addEventListener("resize", ()=>responsiveness())//Responsive por si la persona redimensiona manualmente la pantalla
  }, [])//Ejecutar solo una vez a no ser que se metan parametros entre las {}


  const displayTablet = ()=> {
    const handleDrawerOpen = ()=>{
        setDraweropen(true) //Abrir
    }
    const handleDrawerClose = ()=>{
        setDraweropen(false) //Cerrar
    }

    const headersData = [ "My account", "Previous bookings", "Logout"]
    const getDrawerChoices =()=>{
        return headersData.map((data)=>{
            return (
                <List>
                    <ListItem> { data } </ListItem>
                </List>
            )
        })
    }

return (
    <Toolbar className= { classes.toolbar}>
    <IconButton {...{
        edge: "start",
        color: "#E7E2E0",
        "aria-label":"menu",
        "aria-haspopup": "true",
        onClick: handleDrawerOpen,
        }}>
          <MenuIcon fontSize= "large"/>
          {/* Menu Hamburguesa */}
    </IconButton> 
        <Drawer {...{
            anchor: "left", //se utiliza para anclarlo a un lado de la pagina izq
            open: draweropen, //abrir
            onClose: handleDrawerClose, //Cerrar
        }}>
            <div>{ getDrawerChoices() }</div>
        </Drawer>
        <Link to ="/">
        <img src={Logo} className ={classes.Logo} alt ="logo"/>
        </Link>
        <div className={classes.right}>
                     <Typography>Sign In</Typography> {/*Componente que nos ayuda a contruir texto en @material-ui */}
                     <Avatar className={classes.avatar}/>
        </div>
               
    </Toolbar>
)
  }
      
  const displayDesktop =()=> (     
            <Toolbar className= {classes.toolbar}>
                <Link to ="/">
                    <img src={Logo} className ={classes.Logo} alt ="logo"/>
                </Link>
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
            tablet ? displayTablet() : displayDesktop()
        }
       
    </AppBar>
  )
}

const useStyle = makeStyles((theme)=>({

    root:{
        position: "sticky", 
        top: 0,
        backgroundColor: "#405844",
        zIndex: 99,
        width:"100vw",
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
        padding: theme.spacing(1,5,1,5),
        color: "white"
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
        color: "white",
        display: "flex",
        alignItems: "center", //alinear verticalmente
        marginLeft: theme.spacing(2)

    },
    avatar:{
        marginLeft: theme.spacing(2)
    }
}))
export default Header
