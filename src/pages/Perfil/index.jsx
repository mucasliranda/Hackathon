import { Box, TextField, Typography } from "@mui/material"
import { makeStyles } from "@mui/styles"
import SideBar from "../../components/SideBar"
import api from "../../services/api"
import { useState, useEffect } from "react"
import ProductCard from "../../components/ProductCard"

const useStyles = makeStyles( (theme) => ({

  containerAll: {
    width: "100vw", 
    maxWidth: "768px", 
    minHeight: "calc(100vh - 220px)",
    margin: "0px auto",
    padding: "30px 8px"
  },

  infoPointsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  infoContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: "8px",
  },
  
  pointsContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-end",
  },

  points: {
    padding: "10px 8px",

    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "2px",

    borderRadius: "8px",
    backgroundColor: theme.palette.aquaTwo,
  },

  text: {
    maxWidth: "450px",
    margin: "0px auto",
    "& fieldset": {
      borderRadius: "20px",
      border: "none",
      backgroundColor: "#E5EBED",
    }
  },

  vistosContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  vistosInfo: {
    width: "100%",
    padding: "0px 4px",
    marginTop: "20px",
    marginBottom: "10px",

    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  productsContainer: {
    width: "100%",

    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: "10px",

    overflowX: "scroll",
  },

  partnersContainer: {
    width: "100%",

    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: "10px",

    overflowX: "scroll",

    [theme.breakpoints.up('sm')]: {
      justifyContent: "center",
      overflowX: "hidden",
    }
  },

  products: {
    minWidth: "130px",
    height: "130px",

    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "8px",

    borderRadius: "8px",
    backgroundColor: theme.palette.aquaTwo,
  },

  parceirosCard: {
    width: "130px",
    height: "130px",
    objectFit: "cover",
    borderRadius: "12px",
  },

}))


export default function Perfil({sideBar, setSideBar}) {

  const classes = useStyles()

  const [parceiros, setParceiros] = useState([])

  const  [products, setProducts] = useState([])

  useEffect( () => {



  },[])

  useEffect( () => {
    api.get("/parceiros")
      .then( (res) => {
        setParceiros(res.data)
      })
      .catch( (err) => {
        console.log(err)
    })

    api.get("./produtos")
    .then( (res) => {
      setProducts(res.data)
    })
    .catch( (err) => {
      console.log(err)
    })
  },[])

  return(
    <Box className={classes.containerAll} >

      <Box className={classes.infoPointsContainer} >

        <Box className={classes.infoContainer} >

          <Typography variant="h1" color="blueTwo" >
            Olá Lucas
          </Typography>

          <Typography variant="subtitle2" color="blueTwo" >
            Vamos trocar pontos hoje ?
          </Typography> 

          <Typography variant="h5" color="blueTwo" fontWeight="400" sx={{textDecoration: "underline"}}  >
            Editar cadastro
          </Typography> 

        </Box>

        <Box className={classes.pointsContainer} >

          <Box className={classes.points} >

            <Typography variant="h5" color="blueTwo" >Você possui</Typography>

            <Typography variant="subtitle1" color="blueTwo" >400</Typography>

            <Typography variant="subtitle1" color="blueTwo" >Pontos</Typography>

          </Box>

        </Box>

      </Box>

      <Box sx={{display: "flex", justifyContent: "center", margin: "28px 0px 0px 0px"}} >
        <TextField label="Procure empresas parceiras ou produtos" className={classes.text} fullWidth />
      </Box>

      <Box className={classes.vistosContainer} >

        <Box className={classes.vistosInfo} >
          <Typography variant="h6" color="blueTwo" >Vistos recentemente</Typography>

          <Typography variant="h5" color="blueTwo" sx={{textDecoration: "underline"}} >ver mais</Typography>
        </Box>

        <Box className={classes.productsContainer} >

          {products.map( (each) => {
            return <ProductCard each={each} />
          })}

        </Box>

      </Box>



      <Box className={classes.vistosContainer} >

        <Box className={classes.vistosInfo} >
          <Typography variant="h6" color="blueTwo" >Parceiros</Typography>

          <Typography variant="h5" color="blueTwo" sx={{textDecoration: "underline"}} >ver mais</Typography>
        </Box>

        <Box className={classes.partnersContainer} >

          {parceiros.map( (each) => {
            return <img src={each.logo_url} alt={each.name} className={classes.parceirosCard} />
          })}

        </Box>

      </Box>
      
      <SideBar sideBar={sideBar} setSideBar={setSideBar} />

    </Box>
  )

}