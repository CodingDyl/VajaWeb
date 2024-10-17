import React from 'react'
import { Image, Title, Container } from '@mantine/core'
import { motion } from 'framer-motion'
import { sun, sabi, bhp, fair, shera, inter, legacy, woodland, earth, cloud9, planetFit, vodacom, royalSax, idc, wildCoast, virgin, maldives } from '../assets'

const customers = [sun, sabi, bhp, fair, shera, inter, legacy, woodland, earth, cloud9, planetFit, vodacom, royalSax, idc, wildCoast, virgin, maldives]

const HomeCustomers = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-primary overflow-hidden"
    >
      <Container size="xl">
        <div className="logo-scroll-container bg-white">
          <div className="logo-scroll">
            {[...customers, ...customers].map((customer, index) => (
              <div key={index} className="logo-item">
                <Image
                  src={customer}
                  alt={`Customer ${index + 1}`}
                  fit="contain"
                  className="w-32 h-32 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </motion.section>
  )
}

export default HomeCustomers