import cx from 'clsx';
import { Title, Text, Container, Button, Overlay } from '@mantine/core';
import classes from './Header.module.css';

export default function Header() {
  return (
    <div className={classes.wrapper}>
    <Overlay color="#000" opacity={0.70} zIndex={1} />

    <div className={classes.inner}>
    <Title className={classes.title}>
    Fight Club Nepal
    </Title>

    <Container size={640}>
    <Text size="lg" className={classes.description}>
    Unleash Your Inner Fighter
    </Text>
    </Container>

    <div className={classes.controls}>
    <Button className={classes.control} color="#EF233C" variant="filled" size="xl">
    Be a Member
          </Button>
        </div>
      </div>
    </div>
  );
}
