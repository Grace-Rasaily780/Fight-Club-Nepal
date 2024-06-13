"use client";
import styles from "./Service.module.css";
import { Title } from "@mantine/core";
import Image from "next/image";

export default function Service() {
  let services = [
    {
      img: "/services/kick_boxing.jpg",
      service: "KICK BOXING",
    },
    {
      img: "/services/boxing.jpg",
      service: "BOXING",
    },
    {
      img: "/services/mma.jpg",
      service: "MMA",
    },
    {
      img: "/services/wushu_sanda.jpg",
      service: "Wushu Sanda",
    },
    {
      img: "/services/muay_thai.jpg",
      service: "Muay Thai",
    },
  ];
  return (
    <div className={styles.container} id="service">
      <Title className={styles.title}>Our Services</Title>

      <div className={styles.card_container}>
        {services.map((service) => (
          <div
            className={styles.card}
            key={service.service}
            onClick={() => {
              window.open(
                "https://fightclubnepal.com/wordpress/membership",
                "_blank",
              );
            }}
          >
            <p className={styles.card_text}>{service.service}</p>
            <div className={styles.image_container}>
              <Image
                alt={service.service}
                src={service.img}
                fill={true}
                // objectFit="co ver" // Scale your image down to fit into the container
                className={styles.image}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
