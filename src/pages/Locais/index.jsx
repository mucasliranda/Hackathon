import { Box, Typography, Button, FormControl, InputLabel, Select, MenuItem, TextField, IconButton, Drawer, Link } from "@mui/material"
import { makeStyles } from "@mui/styles"
import SideBar from "../../components/SideBar"
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';


const useStyles = makeStyles( (theme) => ({
  
  containerAll: {
    width: "100vw", 
    maxWidth: "768px", 
    minHeight: "calc(100vh - 220px)",
    padding: "10px 8px", 
    // backgroundColor: "blue", 
    margin: "0px auto"
  },

  avisoContainer: {
    width: "200px",
    height: "50vh",

    margin: "0px auto",

    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
  },

  card: {
    display: "flex",
    borderRadius: "8px",
    backgroundColor: theme.palette.aquaTwo,
  }

}))

export default function Locais({sideBar, setSideBar}) {

  const classes = useStyles()

  return(
    <Box className={classes.containerAll} >

      <Typography variant="h2" color="blueTwo" >Pontos de coleta</Typography>

      <Typography variant="h5" color="blueTwo" fontWeight="400" ml="4px" >Encontre os pontos de coleta de materiais recicláveis mais próximos do seu endereço ou solicite coleta para saber se na sua região está disponível.</Typography>

      {/* <Box className={classes.avisoContainer} >
        
        <Typography variant="h1" color="blueTwo" >Infelizmente ainda não temos pontos de coleta na sua região :/</Typography>

      </Box> */}

      <Box mt="35px" mb="25px" className={classes.card} >

        <Box sx={{padding: "5px", minWidth: "174px", display: "flex", justifyContent: "center", alignItems: "flex-start", flexDirection: "column", gap: "5px", borderRight: "1px solid black"}} >
          <Typography variant="h3" color="blueTwo" >Vir até nós:</Typography>

          <Typography variant="subtitle2" color="blueTwo" > Av. Roque Petroni Júnior, 1089 - Loja 19 S - Jardim das Acacias</Typography>
        </Box>

        <Box sx={{padding: "5px", minWidth: "126px", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", gap: "5px"}} >
          <Typography variant="h3" color="blueTwo" sx={{textAlign: "center"}} >Solicitar coleta</Typography>

          <Box sx={{display: "flex", flexDirection: "row", gap: "10px"}} >
            <WhatsAppIcon fontSize="large" sx={{backgroundColor: "blueTwo", borderRadius: "50%", padding: "5px", color: "white"}} />
            <EmailOutlinedIcon fontSize="large" sx={{backgroundColor: "blueTwo", borderRadius: "50%", padding: "5px", color: "white"}} />
          </Box>
          
        </Box>

      </Box>



      <Box mb="25px" className={classes.card} >

        <Box sx={{padding: "5px", minWidth: "174px", display: "flex", justifyContent: "center", alignItems: "flex-start", flexDirection: "column", gap: "5px", borderRight: "1px solid black"}} >
          <Typography variant="h3" color="blueTwo" >Vir até nós:</Typography>

          <Typography variant="subtitle2" color="blueTwo" > Rua Sabiá Que Sabia Assobiar, 66 - Campo dos Pássaros</Typography>
        </Box>

        <Box sx={{padding: "5px", minWidth: "126px", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", gap: "5px"}} >
          <Typography variant="h3" color="blueTwo" sx={{textAlign: "center"}} >Solicitar coleta</Typography>

          <Box sx={{display: "flex", flexDirection: "row", gap: "10px"}} >
            <WhatsAppIcon fontSize="large" sx={{backgroundColor: "blueTwo", borderRadius: "50%", padding: "5px", color: "white"}} />
            <EmailOutlinedIcon fontSize="large" sx={{backgroundColor: "blueTwo", borderRadius: "50%", padding: "5px", color: "white"}} />
          </Box>
          
        </Box>

      </Box>



      <Box mb="25px" className={classes.card} >

        <Box sx={{padding: "5px", minWidth: "174px", display: "flex", justifyContent: "center", alignItems: "flex-start", flexDirection: "column", gap: "5px", borderRight: "1px solid black"}} >
          <Typography variant="h3" color="blueTwo" >Vir até nós:</Typography>

          <Typography variant="subtitle2" color="blueTwo" > Equipe vencedora, 15 - Hackathon</Typography>
        </Box>

        <Box sx={{padding: "5px", minWidth: "126px", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", gap: "5px"}} >
          <Typography variant="h3" color="blueTwo" sx={{textAlign: "center"}} >Solicitar coleta</Typography>

          <Box sx={{display: "flex", flexDirection: "row", gap: "10px"}} >
            <WhatsAppIcon fontSize="large" sx={{backgroundColor: "blueTwo", borderRadius: "50%", padding: "5px", color: "white"}} />
            <EmailOutlinedIcon fontSize="large" sx={{backgroundColor: "blueTwo", borderRadius: "50%", padding: "5px", color: "white"}} />
          </Box>
          
        </Box>

      </Box>

      <SideBar sideBar={sideBar} setSideBar={setSideBar} />

    </Box>
  )

}