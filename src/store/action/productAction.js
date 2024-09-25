export const setProducts = (products)=>({
    
        type:"SET_PRODUCTS",
        payload : products,
    
});
export const increaseQuantity = (productId)=>({
        type:"INCREASE_QUANTITY",
        payload:productId,
});
export const removeFromCart = (productId ,)=>({
        type:"REMOVE_CART",
        payload:productId,
})
export const decreaseQuantity = (productId)=>({
        type: "DECREASE_QUANTITY",
        payload:productId
})

// export const setLoading = ()=>({
//     type: "SET_LOADING" ,
// });

// export const setError = ()=>({
//     type:"SET_ERROR",
//     payload :error,
// });