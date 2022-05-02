import { Box, Paper, Typography } from "@mui/material"
import SideBar from "../../components/SideBar"
import Scheme from "../../img/ciclo.png"
import { makeStyles } from "@mui/styles"
import Calculo from "../../img/img2.png"


const useStyles = makeStyles( (theme) => ({

  containerAll: {
    width: "100vw", 
    maxWidth: "768px", 
    // padding: "30px 0px", 
    // backgroundColor: "blue", 
    margin: "0px auto"
  },

  paperAbout: {
    padding: "24px 26px",

    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "14px",

    backgroundColor: theme.palette.ice,
  },

  howItWorks: {
    width: "100%", 
    padding: "15px 20px",

    display: "flex",
    flexDirection: "column",
    alignItems: "center",

    backgroundColor: "white",
  },

  factsContainer: {
    width: "100%",
    padding: "18px 20px",

    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "16px",

    backgroundColor: theme.palette.aquaTwo,

    [theme.breakpoints.up('sm')]: {
      flexDirection: "row",
    }
    
  },

  factsRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: "16px",
  },

  facts: {
    width: "133px",
    height: "131px",
    padding: "11px 16px",

    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "8px",

    borderRadius: "6px",
    backgroundColor: "white",
  },

  imgScheme: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  imgCalculo: {
    width: "70%",
    height: "70%",
    objectFit: "cover",
  },

}))


export default function About({sideBar, setSideBar}) {

  const classes = useStyles()

  return(<Box className={classes.containerAll} >
    
    <Box elevation={0} className={classes.paperAbout} >

      <Typography variant="h3" color="blueTwo" >Conheça a RePontua</Typography>

      <Typography variant="subtitle2" color="blueTwo" lineHeight="18px" >A RePontua é uma plataforma que tem como missão diminuir os impactos ambientais causados pela atividade humana e aumentar o engajamento da população, transformando o futuro da reciclagem.</Typography>
      
      <Typography variant="subtitle2" color="blueTwo" lineHeight="18px" >Acreditamos que o futuro da reciclagem depende de todos.</Typography>

    </Box>

    <Box className={classes.howItWorks} >

      <Typography variant="h1" color="blueTwo" textAlign="center" mt="5px" mb="20px" >Como funciona?</Typography>

      <img src={Scheme} alt="ciclo" className={classes.imgScheme} />

      <Typography variant="h2" color="blueTwo" textAlign="center" mt="35px" mb="40px" >Quanto você ganha pelo seu material reciclado?</Typography>

      <img src={Calculo} alt="calculo" className={classes.imgCalculo} />

    </Box>

    <Box className={classes.factsContainer} >

      <Box className={classes.factsRow} >

        <Box className={classes.facts} >

          <Typography variant="h4" color="blueTwo" >99%</Typography>

          <Typography variant="h5" color="blueTwo" textAlign="center" >das mudanças climáticas estão atreladas à ação humana.</Typography>

        </Box>


        <Box className={classes.facts} >

        <Typography variant="h5" color="blueTwo" textAlign="center" >Apenas</Typography>

          <Typography variant="h4" color="blueTwo" >2,1%</Typography>

          <Typography variant="h5" color="blueTwo" textAlign="center" >dos resíduos no Brasil, são reciclados.</Typography>

        </Box>

      </Box>

      <Box className={classes.factsRow} >

        <Box className={classes.facts} >

          <Typography variant="h4" color="blueTwo" >59%</Typography>

          <Typography variant="h5" color="blueTwo" textAlign="center" >dos brasileiros não sabem pouco ou nada sobre reciclagem.</Typography>

        </Box>

        <Box className={classes.facts} >

          <Typography variant="h5" color="blueTwo" textAlign="center" >Brasil</Typography>

          <Typography variant="h4" color="blueTwo" >4°</Typography>

          <Typography variant="h5" color="blueTwo" textAlign="center" >Maior produtor de lixo do mundo.</Typography>

        </Box>

      </Box>

    </Box>

    <SideBar sideBar={sideBar} setSideBar={setSideBar} />

  </Box>)

}