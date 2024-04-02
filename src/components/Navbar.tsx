'use client'
import { useEffect, useState } from 'react';
import { Menu, Group, Center, Burger, Container, Drawer } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { FiMenu } from "react-icons/fi";
import classes from './Navbar.module.css';
import Image from 'next/image';
import Link from 'next/link';
import {usePathname} from 'next/navigation'; 

const links = [
  { link: '/#about', label: 'ABOUT' },
  { link: '/#service', label: 'SERVICES' },
  { link: '/#coach', label: 'COACHES' },
  { link: '/fighters', label: 'FIGHTERS' },
  { link: '/#contact', label: 'CONTACT' },
  { link: '/membership', label: 'MEMBERSHIP' },
  ];

export default function Navbar() {
  const [opened, { toggle, close }] = useDisclosure(false);
  const [dark, setDark] = useState(false);
  const path = usePathname();

  
  useEffect(() => {
    // console.log(path);
    if(path === "/"){
      setDark(false);
      if(window.scrollY >= 72){
        setDark(true);
      } else {
        setDark(false);
      }
    } else {
      setDark(true);
    }

    window.addEventListener('scroll', () => {
    if(path === "/"){
      if(window.scrollY >= 72){
        setDark(true);
      } else {
        setDark(false);
      }
    } else {
      setDark(true);
    }
    })
  }, [path])
  
  const items = links.map((link) => {
    // const menuItems = link.links?.map((item) => (
    //   <Menu.Item key={item.link}>{item.label}</Menu.Item>
    // ));
    //
    // if (menuItems) {
    //   return (
    //     <Menu key={link.label} trigger="hover" transitionProps={{ exitDuration: 0 }} withinPortal>
    //       <Menu.Target>
    //         <Link
    //           href={link.link}
    //           className={[classes.link, dark ? classes.link_dark : ''].join(" ")}
    //           // onClick={(event) => event.preventDefault()}
    //         >
    //           <Center>
    //             <span className={classes.linkLabel}>{link.label}</span>
    //             <FiMenu size="0.9rem" stroke={1.5} />
    //           </Center>
    //         </Link>
    //       </Menu.Target>
    //       <Menu.Dropdown>{menuItems}</Menu.Dropdown>
    //     </Menu>
    //   );
    // }

    return (
      <Link
        key={link.label}
        href={link.link}
        className={[classes.link, dark ? classes.link_dark : ''].join(" ")}
        // onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </Link>
    );
  });

  return (
    <header className={[classes.header, dark ? classes.dark : ''].join(" ")}>
      <Container size="lg" className={classes.container}>
        <Link href="/">
        <Image src={ dark ? "/logo.svg" : "/logo_w.svg"} width={90} height={90} alt="logo">
        </Image>
        </Link>
        <div className={classes.inner}>
          <Group gap={6} visibleFrom="sm">
            {items}
          </Group>
          <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" color={dark ? "#000" : "#fff"} />
        </div>
      </Container>
      <Drawer
        opened={opened}
        onClose={close}
        position="right"
        size="70%"
        withCloseButton={false}
      >
        <div className={classes.mobileMenu}>
          {items}
        </div>
      </Drawer>
    </header>
  );
}
