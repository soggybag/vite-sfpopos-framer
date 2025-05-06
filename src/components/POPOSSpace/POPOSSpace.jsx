import React from 'react'
import { Link } from 'react-router-dom'

import './POPOSSpace.css'

function POPOSSpace(props) {
  const { name, image, address, hours, id } = props
  return (
    <section className="POPOSSpace">
      <Link to={`/details/${id}`}>
        <img 
          src={`images/${image}`} 
          width="300" 
          height="300" 
          alt={`Image taken at ${address}`}
        />
      </Link>
      <h1>
        <Link to={`/details/${id}`}>
          {name}
        </Link>
      </h1>
      <div>{address}</div>
      <div>{hours}</div>
    </section>
  )
}

export default POPOSSpace
