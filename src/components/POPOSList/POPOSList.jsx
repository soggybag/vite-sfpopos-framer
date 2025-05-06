import React from 'react'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'

import POPOSSpace from '../POPOSSpace/POPOSSpace'
import './POPOSList.css'

import data from '../../sfpopos-data.json'

function POPOSList() {
  const spaces = data.map(({ title, address, images, hours }, i) => {
    return (
      <POPOSSpace 
        id={i}
        key={title}
        name={title} 
        address={address} 
        image={images[0]} 
        hours={hours}
      />
    )
  })

  return (
    <motion.div 
      className="POPOSList"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
    >
      { spaces }
    </motion.div>
  )
}

export default POPOSList
