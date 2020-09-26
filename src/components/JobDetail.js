import React from 'react'

function JobDetail(props) {

  return (
    <div>
      <p>
        {props.date}
      </p>
      <p>
        {props.role} en {props.company}
      </p>
    </div>
  )

}

export default JobDetail;