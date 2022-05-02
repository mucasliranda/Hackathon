import { AppBar, IconButton, Box } from "@mui/material"
import { makeStyles } from "@mui/styles"
import MenuIcon from '@mui/icons-material/Menu';
import Logo from "../../img/Ativo 3.png"
import { useHistory } from "react-router-dom";

const useStyles = makeStyles( (theme) => ({

  appBar: {
    height: "50px",
    width: "100vw",
    // backgroundColor: theme.palette.grey.ice,
    display: "flex",
    alignItems: "center",
    boxShadow: "0px 0px 30px 15px rgba(0,0,0)",
  },

  container: {
    height: "100%",
    maxWidth: "768px",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  logo: {
    width: "90px",
    height: "35px",
  }

}))

export default function Header({sideBar, setSideBar}) {

  const classes = useStyles()

  const history = useHistory()

  return(
    <AppBar elevation={0} position="sticky" className={classes.appBar} sx={{backgroundColor: "#fff",}} >

      <Box className={classes.container} >

        <IconButton onClick={ () => setSideBar(!sideBar)} >
          <MenuIcon />
        </IconButton>

        <img onClick={ () => history.push("/")} src={Logo} alt="logo" className={classes.logo} />

        <IconButton sx={{opacity: "0"}} >
          <MenuIcon />
        </IconButton>

      </Box>

    </AppBar>
  )

}