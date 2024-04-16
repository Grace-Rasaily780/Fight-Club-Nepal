import styles from './Contact.module.css';
import { Title, Text, Container, Button, Overlay } from '@mantine/core';
import Image from 'next/image';

export default function Contact(){
  return (
    <div className={styles.container} id="contact">
      <Title className={styles.title}>
        Get In Touch
      </Title>

      <div className={styles.content_container}>

        <div className={styles.image_container}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.377148942724!2d85.35109001029915!3d27.67473597610196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1981a333dcb5%3A0x4848948779021616!2sFight%20Club%20Nepal!5e0!3m2!1sen!2snp!4v1711819320592!5m2!1sen!2snp" height="450" style={{border:0}} allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>

        <div className={styles.content}>
          <div>
            <h2>Location</h2>
            <p>Jadibuti, Kathmandu, Nepal</p>
          </div>
          <div>
            <h2>Email</h2>
            <p>fightclubnepal@gmail.com</p>
          </div>
          <div>
            <h2>Phone</h2>
            <p>9823725634</p>
          </div>
        </div>

      </div>
    </div>
  )
}
