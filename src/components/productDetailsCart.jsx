import { Box } from "@mui/material";
import CardComponent from "./cardComponent";

function productsOfCard  ({CardComponent}){
    return
     (
    <>
    <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            { CardComponent.map((Product) => (
                <CardComponent key={Product.id} Product ={Product} />
            ))}
            </Box>
    </>
    )
}
export default productsOfCard