import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import "./App.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar/NavBar";
// import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

import 'bootstrap/dist/css/bootstrap.min.css'
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
  // const greeting = "";
let {pid} = useParams();
console.log(pid)
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
                <Route path='/' element={<ItemListContainer /> }/>
                <Route path='/category/:cid' element={<ItemListContainer /> }/>
                <Route path='/detalle/:pid' element={<ItemDetailContainer/>  }/>      

            </Routes>        
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
