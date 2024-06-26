"use client";
import { Text, Container, ActionIcon, Group, rem } from "@mantine/core";
import {
  IconBrandFacebook,
  IconBrandYoutube,
  IconBrandInstagram,
} from "@tabler/icons-react";
import classes from "./Footer.module.css";
import Image from "next/image";
import Link from "next/link";

const data = [
  {
    title: "Navigation",
    links: [
      { label: "About", link: "/#about" },
      { label: "Services", link: "/#service" },
      { label: "Coaches", link: "/#coach" },
      { label: "Contact", link: "/#contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Fighters", link: "/fighters" },
      { label: "Membership Form", link: "/wordpress/membership" },
    ],
  },
];

export default function Footer() {
  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Link
        key={index}
        className={classes.link}
        href={link.link}
        // onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </Link>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });
  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
        <div className={classes.logo}>
          <Image
            src="/logo_full.svg"
            width={200}
            height={120}
            alt="FightClub logo"
          />
          <Text size="lg" c="dimmed" className={classes.description}>
            Unleash Your Inner Fighter
          </Text>
        </div>
        <div className={classes.groups}>{groups}</div>
      </Container>
      <Container className={classes.afterFooter}>
        <Text c="dimmed" size="sm">
          © 2024 Fight Club Nepal. All rights reserved. | Made by{" "}
          <a href="https://github.com/Grace-Rasaily780" target="_blank">
            Grace Rasaily
          </a>
        </Text>

        <Group
          gap={0}
          className={classes.social}
          justify="flex-end"
          wrap="nowrap"
        >
          <ActionIcon
            size="lg"
            color="gray"
            variant="subtle"
            component="a"
            href="https://www.facebook.com/profile.php?id=61550903675711"
            target="_blank"
          >
            <IconBrandFacebook
              style={{ width: rem(18), height: rem(18) }}
              stroke={1.5}
            />
          </ActionIcon>
          <ActionIcon
            size="lg"
            color="gray"
            variant="subtle"
            component="a"
            href="https://www.youtube.com/@FightClubNepal"
            target="_blank"
          >
            <IconBrandYoutube
              style={{ width: rem(18), height: rem(18) }}
              stroke={1.5}
            />
          </ActionIcon>
          <ActionIcon
            size="lg"
            color="gray"
            variant="subtle"
            component="a"
            href="https://www.instagram.com/fightclub_nepal/"
            target="_blank"
          >
            <IconBrandInstagram
              style={{ width: rem(18), height: rem(18) }}
              stroke={1.5}
            />
          </ActionIcon>
        </Group>
      </Container>
    </footer>
  );
}

// <MantineLogo size={30} />
