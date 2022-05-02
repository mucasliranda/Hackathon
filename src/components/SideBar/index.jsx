import { Box, Typography, Button, FormControl, InputLabel, Select, MenuItem, TextField, IconButton, Drawer, Link } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import { makeStyles } from "@mui/styles"
import Logo from "../../img/Ativo 2.png"
import LogoeNome from "../../img/Ativo 3.png"
import { useHistory } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


const useStyles = makeStyles( (theme) => ({

  sideBarContainer: {
    marginTop: "55px",

    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  sideBar: {
    width: "182px",

    padding: "15px 17px",
    
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: "15px"
    // textAlign: "left",
  },

  logo: {
    width: "56px",

    marginBottom: "15px",
  }

}))


export default function SideBar({sideBar, setSideBar}) {

  const history = useHistory()

  const {location: {pathname}} = history

  const classes = useStyles()

  const handleReturn = () => {
    history.push("/")
    setSideBar(!sideBar)
  }

  return(
    <Drawer
      open={sideBar}
    >



      <IconButton onClick={ () => setSideBar(!sideBar)} sx={{position: "absolute", right: "0"}} >
        <MenuIcon />
      </IconButton>

      
      <Box className={classes.sideBarContainer} >  

        <img src={Logo} alt="logo" className={classes.logo} />

        <Typography variant="h6" color="blueTwo" mb="25px" >Olá Lucas!</Typography>
        
        <Box className={classes.sideBar} >

          {pathname !== "/" && 
            <Link href="/" underline="hover" color="#303030" >INICIO</Link>
          }

          <Link href="/perfil" underline="hover" color="#303030" >MEU PERFIL</Link>

          <Link href="/sobre" underline="hover" color="#303030" >SOBRE</Link>

          <Link href="/produtos" underline="hover" color="#303030" >PRODUTOS</Link>

          {/* <Link href="/locais" underline="hover" color="#303030" >PONTOS DE COLETA</Link> */}

          <Button onClick={handleReturn} sx={{alignSelf: "center", padding: "10px 22px", marginTop: "10px"}} >SAIR</Button>

        </Box>

      </Box>

    </Drawer>
  )

}