import './Cards.css'

import React from 'react'
import Cardsitem from './Cardsitem'

export default function Cards({list}) {
  return (
    <div className="cards container">
      <h1 className="cards__title">Consider everyone's best interest</h1>
      <p className="cards__text">HR is for everyone. Clerksy can help you.</p>
      <ul className="card">
        {list.map(item => <Cardsitem key={item.id} info={item}/>)}
      </ul>
    </div>
  )
}
