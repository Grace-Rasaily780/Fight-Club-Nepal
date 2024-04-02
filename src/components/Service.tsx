import styles from './Service.module.css';
import { Title, Text, Container, Button, Overlay } from '@mantine/core';
import Image from 'next/image';

export default function Service() {
  let services = [
  {
    img: '/about_photo.jpg',
    service: 'KICK BOXING'
  },
  {
    img: '/about_photo.jpg',
    service: 'BOXING'
  },
  {
    img: '/about_photo.jpg',
    service: 'MMA'
  }

  ]
  return (
    <div className={styles.container} id="service">
      <Title className={styles.title}>
        Our Services 
      </Title>
          
      <div className={styles.card_container}>
        {
          services.map(service => (
            <div className={styles.card} key={service.service}>
              <p className={styles.card_text}>{service.service}</p>
              <div className={styles.image_container}>
                <Image
                  alt="Image"
                  src="/about_photo.jpg"
                  fill="true"
                  // objectFit="co ver" // Scale your image down to fit into the container
                  className={styles.image}
                />
              </div>
            </div>
          ))
        }
        
      </div>
    </div>

  )
}
