import React from 'react'
import { useParams } from 'react-router-dom'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'

import data from '../../sfpopos-data.json'

function POPOSDetails() {
  const { id } = useParams()
  const { images, title, desc, hours, features, geo } = data[id]

  const imgs = images.map((image, i) => {
    return <img key={i} src={`images/${image}`} alt="" />
  })

  return (
    <motion.div 
      className="POPOSList"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
    >
      <div>
        {imgs}
      </div>
      
      <div>
        <h1>{ title }</h1>
        <p>{ desc }</p>
        <p>{ hours }</p>
        <p>{ features }</p>
        <p>{ geo.lat } { geo.lon }</p>
      </div>
      
    </motion.div>
  )
}

export default POPOSDetails
