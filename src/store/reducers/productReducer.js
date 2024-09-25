const initialState = {
    products : [],
}

export const productReducer = (state = initialState , action) => {
    switch(action.type){
     case "SET_PRODUCTS" : 
     return {
        ...state , 
        products: [...state.products , action.payload],
     };
     case "INCREASE_QUANTITY":
        return{
            ...state,
            products:state.products.map((item)=>{
                console.log("The value is iteration",action.payload);
                return item.id===action.payload
                ?{
                    ...item,
                    quantity:item.quantity ?item.quantity+1 : 2,
                    totalPrice : item.quantity
                    ?item.price * (item.quantity+1)
                    :item.price*2,
                }
                :item;
            })
        }
        case "DECREASE_QUANTITY":
            return{
            
                ...state,
                products:state.products.map((item)=>
                    item.id===action.payload ?
                {...item ,quantity:item.quantity?
                    item.quantity-1:
                    1 ,totalPrice:item.quantity?item.price *(item.quantity-1):item.price*1}:item)
        }


        case "REMOVE_CART" :
            return{
                ...state ,
               products: state.products.filter(item=>item.id!==action.payload)

                  
                
            }

     default: 
     return state;

     
    } 

}

//Issues in the app-

// Remove the app bar from the the login page.

//Keep cartPage Private.(use useEffect hook because when the component start buiding this
// is the first hook which fires first.), check for the user in redux wheathe he is 
// -null if user is null then redirect the user to the homePage.

//Decrease quantity ,price in the cart.
// Remove the particular product from the  Cart Page.
//Change the particular product button to already added in case of cart.
// Apply search feature in the home page.
// Next button and previous buttons in the E-commerce  