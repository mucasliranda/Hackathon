import { Box, Typography, Button, FormControl, InputLabel, Select, MenuItem, TextField, IconButton, Drawer, Link } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import { makeStyles } from "@mui/styles"
import Image from "../../img/fundo.png"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Logo from "../../img/Ativo 2.png"
import LogoeNome from "../../img/Ativo 3.png"
import SideBar from "../../components/SideBar"
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../services/api"


const useStyles = makeStyles( (theme) => ({

  containerAll: {
    width: "100vw", 
    maxWidth: "768px", 
    // padding: "30px 0px", 
    // backgroundColor: "blue", 
    margin: "0px auto"
  },

  button: {
    padding: "10px 6px"
  },

  backgroundWithImage: {
    backgroundImage: `url(${Image})`, 
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",

    padding: "27px 15px",

    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "33px",
    position: "relative",

  },

  blur: {
    padding: "15px 2px",

    width: "98%",
    minHeight: "215px",

    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: "15px",
    position: "relative",

    borderRadius: "10px",
    backgroundColor: "rgba(255, 255, 255, 0.6)",
  },

  textFieldContainer: {
    width: "100%",
    display: "flex",
    padding: "0px 10px",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "16px",
  },

  typeSelect: {
    width: "150px"
  },

  carouselContainer: {
    width: "100%",
    minHeight: "180px",

    padding: "15px 0px",
    
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "20px",

    color: "#FFF",
    backgroundColor: theme.palette.aqua,
  },

  carousel: {
    width: "85%",
    
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "30px",

    overflowX: "scroll",

    padding: "5px 25px",

    [theme.breakpoints.up('sm')]: {
      justifyContent: "center",
      overflowX: "hidden",
    }

  },

  parceirosCard: {
    width: "80px",
    height: "80px",

    objectFit: "cover",

    borderRadius: "12px",
  },

  impactoContainer: {
    width: "100%",

    padding: "20px 0px",

    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "30px",
  },

  impactoBox: {
    width: "110px",
    height: "75px",

    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

    backgroundColor: theme.palette.aqua,
    borderRadius: "16px",
  },

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


export default function Home({sideBar, setSideBar}) {

  const classes = useStyles()

  const history = useHistory()

  const [parceiros, setParceiros] = useState([])

  useEffect( () => {
    api.get("/parceiros")
      .then( (res) => {
        setParceiros(res.data)
      })
      .catch( (err) => {
        console.log(err)
    })
  },[])

  return(<Box className={classes.containerAll} >

    <Box className={classes.backgroundWithImage} >

      <Box className={classes.blur} >

        <Typography variant="h3" color="blueTwo" width="170px" >
          Conheça nossos pontos de coleta
        </Typography>

        <Box className={classes.textFieldContainer} >

          <TextField label="CEP" sx={{minWidth: "50px", width: "40%", height: "56px", color: "blueThree"}} />

          <FormControl classes={classes.typeSelect} sx={{minWidth: "100px", width: "40%", color:"blueThree"}} >
            <InputLabel id="tipoDeReciclado" sx={{color: "blueThree"}} >Tipo de reciclado</InputLabel>
            <Select
              labelId="tipoDeReciclado"
              id="tipoDeReciclado"
              // value={}
              label="Tipo de reciclado"
              // onChange={}
              sx={{color: "blueThree"}}
            >
              <MenuItem value={10}>Orgânico</MenuItem>
              <MenuItem value={20}>Vidro</MenuItem>
              <MenuItem value={30}>Eletrônico</MenuItem>
              <MenuItem value={40}>Papel</MenuItem>
              <MenuItem value={50}>Plástico</MenuItem>
              <MenuItem value={60}>Metal</MenuItem>
            </Select>
          </FormControl>

          <Button onClick={ () => history.push("/locais")} sx={{minWidth: "180px", maxWidth: "250px", width: "100%"}} >Buscar</Button>

        </Box>

      </Box>

    </Box>

    <Box padding="32px 22px" sx={{display: "flex", flexDirection: "column", gap: "11px", alignItems: "flex-start" }} >

      <Typography variant="h3" color="blueTwo" lineHeight="25px" >Sua reciclagem além de ajudar o meio ambiente te gera um retorno</Typography>

      <Typography variant="subtitle2" color="blueTwo" lineHeight="15px" >Somos um  programa de recompensas no qual junta pontos e troca por produtos produtos de empresas que se preocupam com o meio ambiente</Typography>

      <Button onClick={()=>history.push("/produtos")} >Veja os produtos</Button>

    </Box>

    <Box className={classes.carouselContainer} >

      <Typography>Algumas marcas parceiras sustentáveis</Typography>

      <Box className={classes.carousel} >

        {parceiros.map( (each) => {
          return <img src={each.logo_url} alt={each.name} className={classes.parceirosCard} />
        })}

      </Box>

    </Box>

    <Box className={classes.impactoContainer} >

     <Typography mb="-10px" variant="h3" fontFamily="Roboto" color="blueTwo" width="250px" sx={{textAlign: "center", }} >Como fazer o descarte correto dos materiais recicláveis?</Typography>

      <Box mt="25px" mb="45px" sx={{display: "flex", flexDirection: "row", flexWrap: "wrap", gap: "20px", justifyContent: "center"}} >

        <Box className={classes.impactoBox} >

          <Link href="http://blog.contemar.com.br/lixo-organico-como-e-o-descarte/#:~:text=A%20maneira%20mais%20f%C3%A1cil%20%C3%A9,a%20compostagem%20usando%20materiais%20recicl%C3%A1veis." target="_blank" variant="h3" fontFamily="Roboto" color="blueTwo" sx={{textDecoration: "none"}} >Orgânico</Link>

        </Box>

        <Box className={classes.impactoBox} >

        <Typography href="https://vidramaq.com.br/blog/descarte-de-vidro-como-fazer-corretamente/" target="_blank" variant="h3" fontFamily="Roboto" color="blueTwo" >Vidro</Typography>

        </Box>

        <Box className={classes.impactoBox} >

          <Typography href="https://vidramaq.com.br/blog/descarte-de-vidro-como-fazer-corretamente/" target="_blank" variant="h3" fontFamily="Roboto" color="blueTwo" >Eletrônico</Typography>

        </Box>

        <Box className={classes.impactoBox} >

          <Typography href="https://www.fragmaq.com.br/blog/descarte-de-papel/#:~:text=Jogue%20seus%20pap%C3%A9is%20sempre%20em,ao%20m%C3%A1ximo%20o%20seu%20volume." target="_blank" variant="h3" fontFamily="Roboto" color="blueTwo" >Papel</Typography>

        </Box>

        <Box className={classes.impactoBox} >

          <Typography href="https://www.recicloteca.org.br/plastico/cadeia-da-reciclagem-de-plasticos/" target="_blank" variant="h3" fontFamily="Roboto" color="blueTwo" >Plástico</Typography>

        </Box>

        <Box className={classes.impactoBox} >

          <Typography href="https://www.reciclasampa.com.br/artigo/entenda-por-que-a-reciclagem-de-metais-deve-ir-alem-das-latas-de-aluminio#:~:text=A%20coleta%20seletiva%20%C3%A9%20um,de%20Entrega%20Volunt%C3%A1ria%20(PEV)." target="_blank" variant="h3" fontFamily="Roboto" color="blueTwo" >Metal</Typography>

        </Box>

      </Box> 

    </Box>

    <SideBar sideBar={sideBar} setSideBar={setSideBar} />

  </Box>)

}