import React from 'react';
import { Avatar, Button, Container, createStyles, Grid, Group, Paper, Text, UnstyledButton } from '@mantine/core';
import SiteHeader from '../components/SiteHeader';

const supports = [
    { icon: "https://eastminer.com/static/customer/kf.png", title: "online service", time: "00:00-23:59" },
    { icon: "https://eastminer.com/static/customer/telegram.png", title: "Telegram service", time: "00:00-23:59" },
    { icon: "https://eastminer.com/static/customer/telegram.png", title: "Eastminer Official Group 30", time: "00:00-23:59" },
    { icon: "https://eastminer.com/static/customer/whatsapp.png", title: "WhatsApp service", time: "00:00-23:59" },
    { icon: "https://eastminer.com/static/customer/line.png", title: "LINE service", time: "00:00-23:59" }
];

const SupportButton = ({item}) => (
    <Paper component='a' href='#' radius={"md"} withBorder>
        <Group spacing="sm" p={'md'} >
            <Avatar size={40} src={item.icon} radius={40} />
            <div>
                <Text fz="sm" fw={500}>
                    {item.title}
                </Text>
                <Text c="dimmed" fz="xs">
                    {item.time}
                </Text>
            </div>
        </Group>
    </Paper>
)

const Support = () => {
    // const { classes } = useStyles();

    return (
        <>
            <SiteHeader isInnerPage={true} title="Customer Service" />

            <section className="section-padding">
                <Container size={"xl"}>
                    <Grid>
                        {
                            supports.map((item, i) => (
                                <Grid.Col span={12} md={6}>
                                    <SupportButton item={item} />
                                </Grid.Col>
                            ))
                        }
                    </Grid>
                </Container>
            </section>
        </>
    )
}

export default Support