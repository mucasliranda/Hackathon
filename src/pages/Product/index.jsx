import { Box, TextField, Typography, Button } from "@mui/material"
import { makeStyles } from "@mui/styles"
import SideBar from "../../components/SideBar"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import api from "../../services/api"
import { toast } from "react-toastify"

const useStyles = makeStyles( (theme) => ({
  
  containerAll: {
    width: "100vw", 
    maxWidth: "768px", 
    margin: "0px auto",
    padding: "30px 8px"
  },

  containerProduct: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  
  valor: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },

  cepContainer: {
    margin: "15px 0px"
  },

  cepText: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    gap: "15px"
  },

  img: {
    display:"block",
    width: "215px",
    alignSelf: "center",
    marginBottom: "30px",
    borderRadius: "8px",

    objectFit: "cover",
  }

  
}))


export default function Product({sideBar, setSideBar}) {

  let { id } = useParams()

  const [product, setProduct] = useState([])

  useEffect( () => {
    
    api.get(`./produtos/${id}`)
      .then( (res) => {
        setProduct(res.data[0])
      })
      .catch( (err) => {
        console.log(err)
      })

  },[id])

  const classes = useStyles()

  const handleBuy = () => {
    toast.success('Compra efetuada!!');
  }

  return(
    <Box className={classes.containerAll} >

      <Box className={classes.containerProduct} >

        <img src={product.img_url} alt={product.name} className={classes.img} />

        <Typography variant="h2" color="blueTwo" >{product.name}</Typography>

        <Typography variant="h5" color="blueThree" >Cód. do produto</Typography>

        <Typography variant="h5" color="blueThree" >{product.id}</Typography>

        <Box mt="10px" mb="10px" className={classes.valor} >

          <Typography color="blueTwo" sx={{fontSize: "28px", fontWeight: "800", fontFamily: "MontSerrat"}} >300</Typography>

          <Typography variant="subtitle1" color="blueThree" ml="5px" mb="-6px" >Pts</Typography>

        </Box>

        <Button onClick={ () => handleBuy()} sx={{alignSelf: "center", borderRadius: "16px", padding: "14px 20px"}} >Trocar pontos</Button>

      </Box>

      {/* <Box className={classes.cepContainer} >

        <Typography variant="h6" color="blueTwo" mb="15px" >Disponibilidade para entrega</Typography>
        
        <Box className={classes.cepText} >
          
          <Box>

            <TextField />

            <Typography variant="h5" color="blueThree" >Não sei meu CEP</Typography>

          </Box>

          <Button>Buscar</Button>

        </Box>

      </Box> */}

      <Typography variant="h6" color="blueTwo" mt="35px" mb="15px" >Descrição do produto</Typography>

      <Typography variant="subtitle2" color="blueTwo" sx={{fontFamily: "Montserrat"}} >{product.description}</Typography>

      <SideBar sideBar={sideBar} setSideBar={setSideBar} />

    </Box>
  )

}