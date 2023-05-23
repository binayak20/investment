import React from 'react';
import { ActionIcon, Container, createStyles, Flex, Group, Header, Image, rem } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import MobileMenu from './MobileMenu';

import Logo from "../assets/images/logo.png";
import LanguageModal from './LanguageModal';
import { VscBell } from 'react-icons/vsc';
import { MdOutlineHeadsetMic } from 'react-icons/md';
import { Link } from 'react-router-dom';


const useStyles = createStyles((theme) => ({
    header: {
      paddingLeft: theme.spacing.md,
      paddingRight: theme.spacing.md,
      position: "fixed",
      left: 0,
      right: 0,
      top: 0,
    },

    inner: {
      height: rem(45),
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },

    links: {
      [theme.fn.smallerThan('md')]: {
        display: 'none',
      },
    },

    link: {
        display: 'block',
        lineHeight: 1,
        padding: `${rem(8)} ${rem(12)}`,
        borderRadius: theme.radius.sm,
        textDecoration: 'none',
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
        fontSize: theme.fontSizes.sm,
        fontWeight: 500,

        '&:hover': {
          backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        },
    },

    mobileLinks: {
      [theme.fn.largerThan('md')]: {
        display: 'none',
      },
      link: {
        display: 'flex',
        flexDirection: 'column',
      }
    },

    burger: {
        [theme.fn.largerThan('md')]: {
          display: 'none',
        },
    },
}));

const RootHeader = ({links}) => {
    const { classes } = useStyles();
    const isMobile = useMediaQuery('(max-width: 768px)');

    const linkItems = links.map((link) => (
        <Link
          key={link.label}
          to={link.url}
          className={classes.link}
          // onClick={(event) => event.preventDefault()}
        >
          {link.label}
        </Link>
    ));

    return (
        <>
            <Header className={classes.header}>
                <Container size="xl" px={0}>
                    <div className={classes.inner}>
                        <Group>
                            {/* <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" /> */}
                            <Image className='logo' src={Logo} alt="Eastminer" mx="auto" maw={ 240} />
                        </Group>

                        <Group>
                            <Group ml={50} spacing={5} className={classes.links}>
                                {linkItems}
                            </Group>
                            <Flex
                                className="toolbar"
                                gap="5"
                                justify="center"
                                align="center"
                                direction="row"
                                wrap="wrap"
                            >
                                <LanguageModal />
                                <ActionIcon variant="transparent">
                                    <VscBell size={18} color="#2a2a2a" />
                                </ActionIcon>
                                <ActionIcon variant="transparent">
                                    <MdOutlineHeadsetMic size={18} color="#2a2a2a" />
                                </ActionIcon>
                            </Flex>
                        </Group>
                    </div>
                </Container>
                {/* <Drawer
                    opened={opened}
                    onClose={toggle}
                    title="Menu"
                    overlayProps={{ opacity: 0.5, blur: 4 }}
                >
                    {links.map((link) => {
                        return (
                            <NavLink component='a' href={link.url} label={link.label} />
                        )
                    })}
                </Drawer> */}
            </Header>
            {
                isMobile && <MobileMenu links={links} />
            }
        </>
    )
}

export default RootHeader