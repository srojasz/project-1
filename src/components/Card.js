import React from 'react'
import '../stylesheets/card.scss';


function Card(props) {
  return (
    <React.Fragment>
      <div className={`card ${props.class}`}>
        <p className="card__title">
          {props.name}
        </p>
        <p className="card__icon">{props.icon}</p>
      </div>
    </React.Fragment>
  )
}

export default Card;