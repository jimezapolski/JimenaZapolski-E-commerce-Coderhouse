import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar/NavBar";
// import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

import 'bootstrap/dist/css/bootstrap.min.css'
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import CartContextProvider from "./context/CartContext";

function App() {
  // const greeting = "";

  return (
    <BrowserRouter>
    <CartContextProvider>
     <NavBar />
     <Routes>
                <Route path='/' element={<ItemListContainer /> }/>
                <Route path='/category/:cid' element={<ItemListContainer /> }/>
                <Route path='/detalle/:pid' element={<ItemDetailContainer/>  }/>      

            </Routes>        
      {/* <Footer /> */}
    </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
