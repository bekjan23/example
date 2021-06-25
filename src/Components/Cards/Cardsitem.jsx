import React from 'react';

import './Cards.css'

export default function Cardsitem({info}) {
  return (
      <div className="card">
        <img src={info.icon} alt="" />
        <h3 className="card__title">{info.title}</h3>
        <ul>
          <li className="card__text">{info.text1}</li>
          <li className="card__text">{info.text2}</li>
          <li className="card__text">{info.text3}</li>
        </ul>
      </div>
  )
};