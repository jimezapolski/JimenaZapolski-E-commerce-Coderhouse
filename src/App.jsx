
import './App.css'
import  ItemListContainer  from './components/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/Navbar/Navbar';

function App() {
  const greeting = 'hola! cómo estas?'
  return (
   <div>
      <NavBar />
      <ItemListContainer greeting = {greeting}/>
   </div>
  


  )
}

export default App