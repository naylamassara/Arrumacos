import logo from './logo.svg';
import './App.css';
import NavBar from './componets/global/NavBar'
import ItemListContainer from './componets/ItemList/ItemListContainer'

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <ItemListContainer greeting="Tus compras"/>
    </div>
  );
}

export default App;
