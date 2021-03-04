import React from 'react';
import { Link } from 'react-router-dom';
import data from '../data';
import about from '../about'

function AboutScreen (props){
    return <div class="overlay">
        <h1>ErazoCommerce, tu mejor opcion en ropa.</h1> 
       
       
    <ul className="products">
      {
      about.info.map(info=>
        <li>
      <div className="product">
      <Link to={'/about/'+ info._id}>
      <img className="product-image" src={info.imagen} alt="product" />
      
      </Link>
        
        <div className="product-name">
            <Link to={'/about/'+ info._id}>{info.nombre}</Link>
          
        </div>
        <div className="product-brand">{info.descripcion}</div>
        
      </div>
    </li>
        
        )
    }

  </ul>
  <h3>Tienda de ropa 100% de marca oroginales</h3>
    <p>Somos un sitio donde puedes realizar la compra de ropa de la mejor calidad.</p>
       
      
  
    </div> 

    
}
export default AboutScreen;