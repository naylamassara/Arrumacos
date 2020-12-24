import logo from './logo.svg';
import './App.css';
import NavBar from './componets/global/NavBar';
import ItemListContainer from './containers/ItemListContainer';
import Itemcount from './componets/store/Itemcount';
import CoverPage from './componets/home/CoverPage';
import { BrowserRouter,Switch,Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App"></div>
      <NavBar></NavBar>  
        
        <Switch>
          <Route path="/">
            <CoverPage/>
          </Route>
        </Switch>
   
        <Switch>
          <Route path="/ItemList">
            <ItemListContainer/>
          </Route>
        </Switch>

        <Switch>
          <Route path="/Itemcount">
            <Itemcount/>
          </Route>
        </Switch>

  {/* <ItemListContainer greeting="Tus compras" /> */}
       
    
    </BrowserRouter>
  );
}

export default App;
