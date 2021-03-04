import logo from './logo.svg';
import data from './data';
import {BrowserRouter, Link, Route} from 'react-router-dom';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import AboutScreen from './screens/AboutScreen';
import ContactScreen from './screens/ContacScreen';
import PantaloneScreen from './screens/PantaloneScreen';
import CamisasScreen from './screens/CamisasScreen';

function App() {
  const openMenu=()=>{
    document.querySelector(".sidebar").classList.add("open");
  }
  const closeMenu=()=>{
    document.querySelector(".sidebar").classList.remove("open")
  }
  return (
    <BrowserRouter>
    <div className="grid-container">
    <header className="header">
      <div className="brand">
        <button  onClick={openMenu}>
          &#9776;
        </button>
        <Link to="/">ErazoCommerce</Link>
        
      </div>
      <div className="header-links">
        <a href="cart.html">Carrito de compra</a>
        <a href="signin.html">Ingresar al sitio</a>
      </div>
    </header>
    <aside className="sidebar">
      <h3>Categorias</h3>
      <button className="sidebar-close-button" onClick={closeMenu}>x</button>
      <h4>Hombres</h4>
      <ul>
        <li>
        <Link to="/pantalones">Pantalones/hombre</Link>
        </li>

        <li>
        <Link to="/camisas">Camisas/hombre</Link>
        </li>

      </ul>
      <h4>Mujeres</h4>
      <ul>
        <li>
          <a href="femenino.html">Pantalones/Jeans</a>
        </li>

        <li>
          <a href="femenino.html">Camisas</a>
        </li>

      </ul>
      <h4>Niños/as</h4>
      <ul>
        <li>
          <a href="niños.html">Pantalones/Jeans</a>
        </li>

        <li>
          <a href="niños.html">Camisas</a>
        </li>

      </ul>
    </aside>
    <main className="main">
      <div className="content">
        <Route path="/products/:id" component={ProductScreen}/>
        <Route path="/" exact={true} component={HomeScreen}/>
        <Route path="/about" component={AboutScreen}/>
        <Route path="/contact" component={ContactScreen}/>
        <Route path="/pantalones" component={PantaloneScreen}/>
        <Route path="/camisas" component={CamisasScreen}/>
       

        
      </div>

    </main>
    <footer className="footer">
      <Link to="/about">Acerca de nosotros</Link>
      <Link to="/contact">Contactanos</Link>
     
    
      <a href="https://www.facebook.com/erazo.erazo.37454/">Facebook</a>
      <a href="https://www.instagram.com/clothing_men_sv/">Instagram</a>
    </footer>
  </div>
  </BrowserRouter>
  );
}

export default App;
