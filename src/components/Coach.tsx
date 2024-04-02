import styles from './Coach.module.css';
import { Title, Text, Container, Button, Overlay } from '@mantine/core';
import Image from 'next/image';

export default function Coach() {
  let coaches = [
  {
    img: '/about_photo.jpg',
    name: 'John Doe',
    post: 'Coach'
  },
  {
    img: '/about_photo.jpg',
    name: 'John Doe',
    post: 'Coach'
  },
  {
    img: '/about_photo.jpg',
    name: 'John Doe',
    post: 'Coach'
  },

  ]
  return (
    <div className={styles.container} id="coach">
      <Title className={styles.title}>
        Our Coaches 
      </Title>
          
      <div className={styles.card_container}>
        {
          coaches.map(coach => (
            <div className={styles.card} key={coach.name}>
                           
              <div className={styles.image_container}>
                <Image
                  alt="Image"
                  src="/about_photo.jpg"
                  fill="true"
                  // objectFit="co ver" // Scale your image down to fit into the container
                  className={styles.image}
                />
                </div>
                <div className={styles.card_text}>
                  <p className={styles.name}>{coach.name}</p>
                  <p className={styles.post}>{coach.post}</p>
                </div>

            </div>
          ))
        }
        
      </div>
    </div>
  )
}
