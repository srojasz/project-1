import React from 'react'
import '../stylesheets/card.scss';
import 'font-awesome/css/font-awesome.min.css';


function Card(props) {
  return (
    <React.Fragment>
      <div className={`card ${props.class}`}>
        <p className="card__title">
          {props.name}
        </p>
        <i className={`card__icon ${props.icon}`}></i>

      </div>


    </React.Fragment>
  )
}

export default Card;