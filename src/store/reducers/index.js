import {combineReducers} from "redux";
import { productReducer } from "./productReducer";
import { userReducer } from "./userReducer";


const rootReducer = combineReducers({
    cart: productReducer,
    user: userReducer,
});

export default rootReducer;