import { AppBar, IconButton, Box } from "@mui/material"
import { makeStyles } from "@mui/styles"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles( (theme) => ({

  appBar: {
    height: "50px",
    width: "100vw",
    // backgroundColor: theme.palette.grey.ice,
    display: "flex",
    alignItems: "center",
  },

  container: {
    height: "100%",
    maxWidth: "768px",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  }

}))

export default function HeaderVolta({sideBar, setSideBar}) {

  const history = useHistory()

  const classes = useStyles()

  return(
    <AppBar elevation={0} position="sticky" className={classes.appBar} sx={{backgroundColor: "#fff",}} >

      <Box className={classes.container} >
        <IconButton onClick={ () => history.push("/")} >
          <ArrowBackIcon />
        </IconButton>
      </Box>

    </AppBar>
  )

}