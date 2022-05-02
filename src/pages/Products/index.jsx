import { Box, Typography, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import SideBar from "../../components/SideBar"
import { useEffect, useState } from "react";
import api from "../../services/api"
import ProductCard from "../../components/ProductCard";


const useStyles = makeStyles( (theme) => ({

  containerAll: {
    width: "100vw", 
    maxWidth: "768px", 
    minHeight: "calc(100vh - 220px)",
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
  
  produtosContainer: {
    padding: "20px 0px",

    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    gap: "25px"
  },

  partnerCard: {
    width: "115px",

    padding: "8px",
    
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    
    borderRadius: "8px",
    backgroundColor: theme.palette.aquaTwo,
  },
  
  imgFake: {
    width: "62px",
    height: "66px",
    backgroundColor: "black",
  }

}))


export default function Products({sideBar, setSideBar}) {

  const classes = useStyles()

  const  [products, setProducts] = useState([])

  useEffect( () => {

    api.get("./produtos")
      .then( (res) => {
        setProducts(res.data)
      })
      .catch( (err) => {
        console.log(err)
      })

  },[])

  console.log(products)

  return(
    <Box className={classes.containerAll} >
      
      <Box elevation={0} className={classes.paperAbout} >

        <Typography variant="h3" color="blueTwo" >Produtos</Typography>

        <Typography variant="subtitle2" color="blueTwo" lineHeight="18px" >A RePontua se conecta com empresas que buscam transformar um munda mais sustentável.</Typography>


      </Box>

      <Box className={classes.produtosContainer} >

        {products.map( (each) => {
          return <ProductCard each={each} />
        })}

      </Box>

      <SideBar sideBar={sideBar} setSideBar={setSideBar} />

    </Box>
  )

}