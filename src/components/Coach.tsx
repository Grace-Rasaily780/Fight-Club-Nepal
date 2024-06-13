"use client";
import { useState, useEffect } from "react";
import styles from "./Coach.module.css";
import { Title } from "@mantine/core";
import Image from "next/image";
import axios from "axios";

export default function Coach() {
  const [coaches, setCoaches] = useState<any[]>([]);
  useEffect(() => {
    const fetchCoach = async () => {
      const { data } = await axios.get(
        "https://fightclubnepal.com/wordpress/wp-json/wp/v2/coach",
      );
      setCoaches(data);
    };
    fetchCoach();
  }, []);

  // let coaches = [
  // {
  //   img: "/about_photo.jpg",
  //   name: "Sajan Theeng Tamang",
  //   phone: "+977 9702339383",
  // },
  // {
  //   img: "/about_photo.jpg",
  //   name: "Suman Nepali ",
  //   phone: "+977 9823725634",
  // },
  // {
  //   img: "/about_photo.jpg",
  //   name: "Roshan Achhami ",
  //   phone: "+977 9845877861",
  // },
  // ];
  return (
    <div className={styles.container} id="coach">
      <Title className={styles.title}>Our Coaches</Title>

      <div className={styles.card_container}>
        {coaches.map((coach) => (
          <div className={styles.card} key={coach?.id}>
            <div className={styles.image_container}>
              <Image
                alt={coach.acf.full_name}
                src={coach.acf.img}
                fill={true}
                // objectFit="co ver" // Scale your image down to fit into the container
                className={styles.image}
              />
            </div>
            <div className={styles.card_text}>
              <p className={styles.name}>{coach.acf.full_name}</p>
              <a
                className={styles.post}
                href={`tel:${coach.acf.phone}`}
                target="_blank"
              >
                {coach.acf.phone}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
