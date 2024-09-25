import { Box } from "@mui/material";
import CardComponent from "./cardComponent";
//import { useEffect, useState } from "react";

const ProductList = ({productsData}) =>{

    
    return(
<>
<Box m={2} pt={2}   sx={{ display: 'flex' , justifyContent: "space-between", flexWrap :"wrap"}}> 
      {productsData && productsData.map((product)=><CardComponent product={product}/>)}
      
      </Box>
</>
    );
}
export default ProductList;