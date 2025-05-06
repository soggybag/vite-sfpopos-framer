import React from 'react'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'

function About() {
  return (
    <motion.div 
      className="POPOSList"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
    >
      <h1>About SFPOPOS</h1>
      <p>POPOS are publicly accessible spaces in 
        forms of plazas, terraces, atriums, small 
        parks, and even snippets which are provided 
        and maintained by private developers. In San 
        Francisco, POPOS mostly appear in the Downtown 
        office district area.</p>
    </motion.div>
  )
}

export default About