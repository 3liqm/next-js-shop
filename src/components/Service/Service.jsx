import React from 'react'
import { services } from './data'
import styles from './Service.module.css'
import Image from 'next/image'
function Service() {
  return (
    <div>
        <div className={styles.title}>
        <p >Our <span>Services</span></p>
        </div>
      <div className={styles.service}>
      {services.map((service) => (
          <div key={service.id} className={styles.service_content}>
              <Image
                src={`/images/services/${service.name}.jpg`}
                alt={service.name}
                width={25}
                height={25}
                className={styles.service_image}
              />
               <div>
                <h4>{service.title}</h4>
                <p>{service.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Service
