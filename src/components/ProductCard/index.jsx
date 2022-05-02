import { Box, Button, Typography } from "@mui/material"
import { makeStyles } from "@mui/styles";
import { useHistory } from "react-router-dom";


const useStyles = makeStyles( (theme) => ({

  containerAll: {
    width: "100vw", 
    maxWidth: "768px", 
    margin: "0px auto"
  },
  
  productCard: {
    width: "270px",
    height: "151px",

    padding: "12px",
    
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    
    borderRadius: "8px",
    backgroundColor: theme.palette.aquaTwo,
  },
  
  img: {
    width: "100px",
    height: "100px",

    objectFit: "cover",
  },
  
  productInfos: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: "10px",
  }

}))

export default function ProductCard({each}) {

  const classes = useStyles()

  const history = useHistory()

  const handleBuy = (event) => {
    history.push(`/produto/${event.target.id}`)
  }

  return(
    <Box className={classes.productCard} >

      <img src={each.img_url} alt={each.name} className={classes.img} />

      <Box className={classes.productInfos} >

        <Typography variant="subtitle1" color="blueTwo" >{each.name}</Typography>

        <Box sx={{display: "flex"}}>
            <Typography variant="h6" color="blueTwo" >{each.price}</Typography>
            <Typography variant="h6" color="blueTwo" ml="5px" >pts</Typography>
        </Box>

        <Button id={each.id} onClick={handleBuy} sx={{fontSize: "12px", padding: "5px 3px", margin: "0px auto"}} >Adquirir produto</Button>

      </Box>

    </Box>
  )

}