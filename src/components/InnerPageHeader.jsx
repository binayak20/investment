import React from 'react';
import { ActionIcon, Container, createStyles, Flex, Group, Header, rem, Text } from '@mantine/core';
import LanguageModal from './LanguageModal';
import { VscBell } from 'react-icons/vsc';
import { MdOutlineHeadsetMic, MdArrowBackIos } from 'react-icons/md';
import { useMediaQuery } from '@mantine/hooks';
import MobileMenu from './MobileMenu';
import { Link, useNavigate } from 'react-router-dom';

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
      position: "relative"
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

const InnerPageHeader = ({title, links}) => {
    const { classes } = useStyles();
    const isMobile = useMediaQuery('(max-width: 768px)');
    const navigate = useNavigate();

    return (
        <>
            <Header className={classes.header}>
                <Container size="xl" px={0}>
                    <div className={classes.inner}>
                        <Group style={{ position: "absolute", left: 0, top: 0, bottom: 0 }}>
                            <ActionIcon onClick={() => navigate(-1)}>
                                <MdArrowBackIos />
                            </ActionIcon>
                        </Group>

                        <Group className='w-100'>
                            <Text className='w-100' ta={"center"}>{title}</Text>
                        </Group>

                        <Group style={{ position: "absolute", right: 0, top: 0, bottom: 0 }}>
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
                                <ActionIcon component={Link} to="/support" variant="transparent">
                                    <MdOutlineHeadsetMic size={18} color="#2a2a2a" />
                                </ActionIcon>
                            </Flex>
                        </Group>
                    </div>
                </Container>
            </Header>

            {
                !!links
                && (links.length > 0)
                && isMobile
                && <MobileMenu links={links} />
            }
        </>
    )
}

export default InnerPageHeader