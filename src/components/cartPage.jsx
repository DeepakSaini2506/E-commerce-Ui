// use mui's paper component to show the cart as on elevated surface 
// for that in normal css we use shadow property . but in mui there is no need 
// to use shadow property for that paper component is enaugh.

import { Box,Button,Divider,Grid,IconButton,Paper,Typography, } from "@mui/material";
  import { 
    decreaseQuantity, 
    increaseQuantity,
    removeFromCart
   }
  from "../store/action/productAction";
  import { useDispatch, useSelector } from "react-redux";
  
  import React from "react";
  import Navbar from "./navBar";
  
  const CartPage = () => {
    const cart = useSelector((state) => state.cart.products);
    console.log("🚀 ~ file: cartPage.jsx:23 ~ CartPage ~ cart:", cart);
    const dispatch = useDispatch();
  
    const handleRemoveFromCart = (productId) => {
      dispatch(removeFromCart(productId));
    };
  
    const handleIncreaseQuantity = (productId) => {
      dispatch(increaseQuantity(productId));
    };
  
    const handleDecreaseQuantity = (productId) => {
      dispatch(decreaseQuantity(productId));
    };
  
    return (
            <>
            <Navbar/>
            
      <Grid container justifyContent="center">
        <Grid item xs={12} md={8} lg={6}>
          <Box mt={4}>
            <Typography variant="h4" align="center" gutterBottom>
              Your Cart
            </Typography>
            {cart.length === 0 ? (
              <Typography variant="h6" align="center">
                Your cart is empty.
              </Typography>
            ) : (
              cart.map((item) => (
                <Paper
                  key={item.id}
                  elevation={3}
                  style={{ marginBottom: "16px" }}
                >
                  <Box p={2}>
                    <Typography variant="h6">{item.name}</Typography>
                    <Box
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <Box>
                        <Typography color="text.secondary">
                          Product Name: ${item.title}
                        </Typography>
  
                        <Typography color="text.secondary">
                          Price: $
                          {item.totalPrice
                            ? item.totalPrice
                            : item.price.toFixed(2)}
                        </Typography>
                        <Typography>
                          Quantity: {item.quantity ? item.quantity : 1}
                        </Typography>
                      </Box>
  
                      <Box>
                        <img src={item.image} height={50} width={50} />
                      </Box>
                    </Box>
                  </Box>
                  <Divider />
                  <Box display="flex" justifyContent="space-between" p={2}>
                    <Box>
                      <IconButton onClick={() =>
                         handleDecreaseQuantity(item.id)
                      }>
                        -
                       </IconButton> 
                      <IconButton onClick={() => handleIncreaseQuantity(item.id)}>
                        +
                      </IconButton>
                    </Box>
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={() => handleRemoveFromCart(item.id)}
                    >
                      Remove
                    </Button>
                  </Box>
                </Paper>
              ))
            )}
            {cart.length > 0 && (
              <Button variant="contained" color="primary" fullWidth>
                Proceed to Checkout
              </Button>
            )}
          </Box>
        </Grid>
      </Grid>
      </>
    );
    
  };
  
  export default CartPage;