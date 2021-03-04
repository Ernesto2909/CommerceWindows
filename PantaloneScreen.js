import React from 'react';
import { Link } from 'react-router-dom';
import pantalones from '../pantalones';

function PantaloneScreen (props){
    return <ul className="products">
    {
      pantalones.pantalones.map(pantalones=>
        <li>
      <div className="product">
      <Link to={'/products/'+ pantalones._id}>
      <img className="product-image" src={pantalones.imagen} alt="product" />
      
      </Link>
        
        <div className="product-name">
            <Link to={'/products/'+ pantalones._id}>{pantalones.nombre}</Link>
          
        </div>
        <div className="product-brand">{pantalones.descripcion}</div>
       
      </div>
    </li>
        
        )
    }

  </ul>
}

export default PantaloneScreen;