
import './App.css'
import  ItemListContainer  from './components/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';

function App() {
  const greeting = ''
 
  return (
   <div>
      <NavBar />
      <ItemListContainer greeting = {greeting}/>
     
   </div>
  


  )
}

export default App