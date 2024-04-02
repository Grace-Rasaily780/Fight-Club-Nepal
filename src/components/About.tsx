import styles from './About.module.css';
import { Title, Text, Container, Button, Overlay } from '@mantine/core';
import Image from 'next/image';

export default function About(){
  return (
   <div className={styles.container} id="about">
    <div className={styles.content_container}>
    <Title className={styles.title}>
    About Us
    </Title>
    <Text className={styles.content}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>

    
    </div>
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
  )
}
