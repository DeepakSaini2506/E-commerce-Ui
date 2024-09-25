import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../store/action/productAction';
export default function CardComponent({product}) {
  //console.log(product)


const dispatch = useDispatch();
const productsInCart = useSelector((state)=>state.cart.products);
console.log(productsInCart,"please")

function isItemInCart (){
 return productsInCart.some((oneObj)=>oneObj.id == product.id);
 }
  return (
    <Card sx={{ maxWidth: 345 }}>
      
      <Link to={`/products/${product.id}`} style={{textDecoration:"none" , color:"inherit"}}>
      <CardMedia
        component="img"
        height="140"
        image={product.image}
        alt="green iguana"
        style={{backgroundSize: "contain"}}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {product.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {product.description}
        </Typography>

      </CardContent>
      </Link>
      <CardActions>
        <Button size="small">${product.price}</Button>
   
        {isItemInCart() ? (
          
     <button size= "small" disabled>
     Already Added
    </button>
        )
      : 
      (
        <Button size="small" onClick={()=>dispatch(setProducts(product))}>
          Add to cart
        </Button>
      )}
        
      </CardActions>
    </Card>
  );
}
