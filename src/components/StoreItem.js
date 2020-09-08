import React from 'react';
import { Link } from 'react-router-dom';

function StoreItem(props) {
  return (
    <>
     <li className="store__item">
       <Link className="store__item__link" to={props.path}>
         <figure className="store__item__pic-wrap" data-category={props.label}>
           <img src={props.src} alt="Kda Image" className="store__item__img"/>
         </figure>
         <div className="store__item__info">
          <h5 className="store__item__text">{props.text}</h5>
         </div>
         </Link>
       </li> 
    </>
  )
}

export default StoreItem;
