import React from 'react'
import '../stylesheets/card.scss';


function Card(props) {
  return (
    <React.Fragment>
      <div className={`card ${props.style}`}>
        <p className="card__title">
          {props.title}
        </p>
        <p className="card__icon">{props.icon}</p>

      </div>


    </React.Fragment>
  )
}

export default Card;