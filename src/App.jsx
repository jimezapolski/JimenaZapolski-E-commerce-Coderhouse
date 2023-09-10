import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar/NavBar";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

import 'bootstrap/dist/css/bootstrap.min.css'
import ItemDetail from "./components/ItemDetail/ItemDetail";

function App() {
  // const greeting = "";

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
                <Route path='/' element={<ItemListContainer /> }/>
                <Route path='/category/:cid' element={<ItemDetailContainer /> }/>
                <Route path='/detalle/:pid' element={<ItemDetail /> }/>             
            </Routes>        
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
