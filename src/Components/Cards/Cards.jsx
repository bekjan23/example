import React from 'react';
import Cardsitem from './Cardsitem';
import './Cards.css';

export default function Cards({list}) {
  return (
    <div className="middle container">
      <h1 className="middle__title">Consider everyone's best interest</h1>
      <p className="middle__text">HR is for everyone. Clerksy can help you.</p>
      <div className="cards">
        {list.map(item => <Cardsitem key={item.id} info={item}/>)}
      </div>
    </div>
  )
}
