import React from 'react'
import Marquee from 'react-fast-marquee'
import { Brands_images } from './data'
import styles from './brands.module.css'
import Image from 'next/image'
function Brand() {
  return (
    <div  className={styles.marquee}>
        <div className={styles.marquee_title}>
          <p>Our Product <span>Companies</span></p>
        </div>
      <Marquee>
        {Brands_images.map((image) => (
          <div key={image.id} className={styles.marquee_content}>
              <Image
                src={`/images/brands/${image.name}.jpg`}
                alt={image.name}
                width={200}
                height={200}
                className={styles.marquee_image}
              />
         
          </div>
        ))}
      </Marquee>
    </div>
  )
}

export default Brand
