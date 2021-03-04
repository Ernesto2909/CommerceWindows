import React from 'react';
import { Link } from 'react-router-dom';
import camisas from '../camisas';

function CamisasScreen (props){
    return <ul className="products">
    {
      camisas.camisas.map(camisas=>
        <li>
      <div className="product">
      <Link to={'/products/'+ camisas._id}>
      <img className="product-image" src={camisas.imagen} alt="product" />
      
      </Link>
        
        <div className="product-name">
            <Link to={'/products/'+ camisas._id}>{camisas.nombre}</Link>
          
        </div>
        <div className="product-brand">{camisas.descripcion}</div>
       
      </div>
    </li>
        
        )
    }

  </ul>
}

export default CamisasScreen;