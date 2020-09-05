import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
      <h1>OFFICIAL K / DA FAN-CLUB</h1>
       <div className="cards__container">
         <div className="cards__wrapper">
           <ul className="cards__items">
             <CardItem 
              src="images/ahri.jpg"
              text="Leader, founder and lead singer of K / DA, Ahri enchants the public with his infectious charm."
              label='Ahri'
              path='/services'
             />
             <CardItem 
              src="images/akali.jpg"
              text="The main rapper of the group and her grip is more focused on daring and subversion."
              label='Akali'
              path='/services'
             />
           </ul>
           <ul className='cards__items'>
           <CardItem
              src='images/evelynn.jpg'
              text='The lead singer of K / DA and imposes a mesmerizing presence on stage.'
              label='Evelynn'
              path='/products'
            />
            <CardItem
              src='images/kaisa.jpg'
              text='Choreographer and main dancer of the group, KaiSa accepts nothing less than perfection.'
              label='Kaisa'
              path='/services'
            />
          </ul>
         </div>
       </div>
    </div>
  )
}

export default Cards;
