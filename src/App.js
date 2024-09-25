import './App.css'
//import DemoComponent from './components/demo';
import HomePage from './components/homePage';
import {BrowserRouter ,Route,Routes} from 'react-router-dom'
import Navbar from './components/navBar';
import ProductPage from './components/productpage';

import LoginPage from './components/Loginpage';
import { store } from './store/store';
import { Provider } from 'react-redux';
import CartPage from './components/cartPage';
function App() {
  

  return (
    <>
    <Provider store={store}>
    
    <BrowserRouter>
    {/* <Navbar/> */}
    <Routes>
      
      <Route path = "/" element={<HomePage/>} />
      <Route path = "/cart" element={<CartPage/>}/>
      <Route path = "/products/:productId" element={<ProductPage/>} />
      <Route path = "/login" element={<LoginPage/>} />
      {/* for a for page route Put this route at the bottom */}
      {/* <Route path = "/*" element={<DemoComponent/>} /> */}
      </Routes>
    </BrowserRouter>
    </Provider>
    </>
  );
}

export default App;
