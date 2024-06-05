import styles from "./About.module.css";
import { Title, Text, Container, Button, Overlay } from "@mantine/core";
import Image from "next/image";

export default function About() {
  return (
    <div className={styles.container} id="about">
      <div className={styles.content_container}>
        <Title className={styles.title}>About Us</Title>
        <div className={styles.image_container}>
          <Image
            alt="FightClub Nepal"
            src="/about_photo.jpg"
            fill={true}
            // objectFit="co ver" // Scale your image down to fit into the container
            className={styles.image}
          />
        </div>

        <Text className={styles.content}>
          Welcome to Fight Club, where martial arts enthusiasts of all levels
          come together to train, learn, and grow. Founded with a passion for
          the art of combat and a commitment to fostering discipline, respect,
          and camaraderie, our club provides a supportive and inclusive
          environment for practitioners of all ages and backgrounds. <br />
          <br />
          At FightClub, we believe that martial arts is not just about physical
          prowess, but also about mental fortitude and spiritual growth. Our
          experienced instructors are dedicated to helping each student reach
          their full potential, whether they are beginners taking their first
          steps on the mat or seasoned practitioners honing their skills. <br />
          <br /> With a curriculum that encompasses a variety of martial arts
          disciplines, including but not limited to karate, taekwondo, judo,
          wushu, kickboxing, and mma, our club offers something for everyone.
          Whether your goal is to improve your fitness, learn self-defense
          techniques, compete at a high level, or simply find a supportive
          community, you&apos;ll find what you&apos;re looking for at FightClub.{" "}
          <br />
          <br />
          Beyond physical training, Fight Club is also a place where lasting
          friendships are formed and life lessons are learned. Our members not
          only develop strength, flexibility, and coordination but also
          cultivate qualities such as perseverance, humility, and resilience
          that extend far beyond the dojo. <br />
          <br />
          Join us at Fight Club and embark on a journey of self-discovery,
          personal growth, and martial arts mastery. No matter where you are in
          your martial arts journey, you&apos;ll find a home here among fellow
          practitioners who share your passion and dedication. <br />
          <br />
          Come train with us and unleash your full potential at Fight Club
        </Text>
      </div>
    </div>
  );
}
