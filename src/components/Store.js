import React from 'react';
import StoreItem from './StoreItem';
import './Store.css';

function Store() {
  return (
    <div className='store'>
      <h1>OFFICIAL K/DA MERCH</h1>
       <div className="store__container">
         <div className="store__wrapper">
           <ul className="store__items">
             <StoreItem 
              src="images/hoodie.jpg"
              text="Hoodie Game League Of Legends Kda Akali Dragon."
              label='Hoodie'
              path='/products'
             />
             <StoreItem 
              src="images/pins.PNG"
              text="Kit 2 Pins League Of Legends Kda"
              label='Pins'
              path='/products'
             />
           </ul>
           <ul className='store__items'>
           <StoreItem
              src='images/short.jpg'
              text='Short Beach League Of Legends KDA '
              label='Short'
              path='/products'
            />
            <StoreItem
              src='images/moletom.PNG'
              text='Hoodie League Of Legends Kda Akali Dragon.'
              label='Hoodie'
              path='/products'
            />
          </ul>
          <ul className='store__items'>
           <StoreItem
              src='images/mascara.jpg'
              text='Fabric mask League Of Legends KDA '
              label='Mask'
              path='/products'
            />
            <StoreItem
              src='images/blusao.jpg'
              text='Jacket Game League Of Legends Kda Akali Dragon.'
              label='Jacket'
              path='/products'
            />
          </ul>
         </div>
       </div>
    </div>
  )
}

export default Store;
