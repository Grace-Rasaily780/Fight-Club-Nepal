import styles from "./Coach.module.css";
import { Title, Text, Container, Button, Overlay } from "@mantine/core";
import Image from "next/image";

export default function Coach() {
  let coaches = [
    {
      img: "/about_photo.jpg",
      name: "Sajan Theeng Tamang",
      phone: "+977 9702339383",
    },
    {
      img: "/about_photo.jpg",
      name: "Suman Nepali ",
      phone: "+977 9823725634",
    },
    {
      img: "/about_photo.jpg",
      name: "Roshan Achhami ",
      phone: "+977 9845877861",
    },
  ];
  return (
    <div className={styles.container} id="coach">
      <Title className={styles.title}>Our Coaches</Title>

      <div className={styles.card_container}>
        {coaches.map((coach) => (
          <div className={styles.card} key={coach.name}>
            <div className={styles.image_container}>
              <Image
                alt={coach.name}
                src="/about_photo.jpg"
                fill={true}
                // objectFit="co ver" // Scale your image down to fit into the container
                className={styles.image}
              />
            </div>
            <div className={styles.card_text}>
              <p className={styles.name}>{coach.name}</p>
              <a
                className={styles.post}
                href={`tel:${coach.phone}`}
                target="_blank"
              >
                {coach.phone}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
