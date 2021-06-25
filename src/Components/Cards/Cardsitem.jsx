import React from 'react';
import Icon1 from '../../img/icons/icon-1.png';
import Icon2 from '../../img/icons/icon-2.png';
import Icon3 from '../../img/icons/icon-3.png';
import './Cards.css'

export default function Cardsitem({info}) {
  return (
      <div className="card-1">
        <img src={Icon1} alt="" />
        <h3 className="card__title">{info.title}</h3>
        <ul>
          <li className="card__text">{info.text1}</li>
          <li className="card__text">{info.text2}</li>
          <li className="card__text">{info.text3}</li>
        </ul>
      </div>
  )
}
