import logo from './logo.svg';
import './App.css';
import NavBar from './componets/global/NavBar'
import ItemListContainer from './containers/ItemListContainer'
import Itemcount from './componets/store/Itemcount';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Itemcount></Itemcount>
      <ItemListContainer greeting="Tus compras" />
    </div>
  );
}

export default App;
