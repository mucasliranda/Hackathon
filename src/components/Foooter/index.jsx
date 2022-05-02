import { Box, Typography } from "@mui/material"
import { makeStyles } from "@mui/styles"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LanguageIcon from '@mui/icons-material/Language';
import GoogleIcon from '@mui/icons-material/Google';


const useStyles = makeStyles( (theme) => ({

  footer: {
    backgroundColor: theme.palette.blueTwo,
    padding: "22px 27px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "9px",
  },

  underline: {
    textDecoration: "underline",
    fontFamily: "Montserrat"
  },

  iconsContainer: {
    display: "flex",
    flexDirection: "row",
    gap: "9px",
    color: "white"
  }


}))

export default function Footer() {

  const classes = useStyles()

  return(
    <Box component="footer" className={classes.footer} >

      <Box sx={{maxWidth:"768px", display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "9px", width: "100%"}} >

        <Typography color="white" variant="caption" className={classes.underline} >Acessar como parceiro</Typography>

        <Typography color="white" sx={{fontWeight: "800", fontSize: "12px", fontFamily: "Montserrat"}} >SOCIAL</Typography>

        <Box className={classes.iconsContainer} >
          <FacebookIcon />
          <GoogleIcon />
          <InstagramIcon />
          <LanguageIcon />
        </Box>

        <Typography color="white" sx={{fontWeight: "800", fontSize: "12px", fontFamily: "Montserrat"}} >CONTATO</Typography>

        <Typography color="white" sx={{fontWeight: "400", fontSize: "10px", fontFamily: "Montserrat"}} >CONTATO@REPONTUA.COM</Typography>

        <Typography color="white" mt="5px" sx={{fontWeight: "400", fontSize: "10px", fontFamily: "Montserrat", alignSelf: "center"}} >WWW.REPONTUA.COM.BR</Typography>

      </Box>

    </Box>
  )

}