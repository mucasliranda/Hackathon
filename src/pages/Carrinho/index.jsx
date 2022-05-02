import { Box, TextField, Typography, Button } from "@mui/material"
import { makeStyles } from "@mui/styles"

const useStyles = makeStyles( (theme) => ({

  containerAll: {
    width: "100vw", 
    maxWidth: "1080px", 
    margin: "0px auto",
    padding: "30px 8px"
  },

  saldo: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },


}))


export default function Carrinho() {

  const classes = useStyles()

  return(
    <Box className={classes.containerAll} >

      <Box className={classes.saldo} >
        <Typography variant="subtitle1" color="blueTwo" fontWeight="400" fontFamily="Ubuntu" >Seu saldo</Typography>
        <Typography variant="subtitle2" color="blueTwo" fontWeight="700" fontFamily="Ubuntu" >200 pts</Typography>
      </Box>

    </Box>
  )

}