//import { Box } from "@mui/material";
//import CardComponent from "./cardComponent";
import { useEffect, useState } from "react";
//import Navbar from "./navBar";
import ProductList from "./productList";
import Navbar from "./navBar";

const HomePage = () =>{
  const [productsData , setProductsData] = useState()
    const getProductsData = async()=>{

        const response = await fetch("https://fakestoreapi.com/products");
        const result = await response.json()
        setProductsData(result)
        console.log(result)
    }

    useEffect(()=> {
 
        getProductsData();
    },[])
    

    return(
        <>

<Navbar/>
      
      <ProductList productsData = {productsData}/>
      
        </>
    );
}
export default HomePage;