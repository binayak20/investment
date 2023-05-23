import React, { forwardRef, useRef, useState } from 'react';
import { Avatar, Box, Button, Container, Flex, Grid, Group, Image, Paper, Select, SimpleGrid, Space, Stack, Table, Text, TextInput, ThemeIcon } from '@mantine/core';
import SiteHeader from '../components/SiteHeader';
import { Carousel } from '@mantine/carousel';
import Clock from 'react-live-clock';
// import Autoplay from 'embla-carousel-autoplay';
import { useMediaQuery } from '@mantine/hooks';
import { ImVolumeMedium } from 'react-icons/im';
import { MdOutlineArrowForwardIos } from 'react-icons/md';

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import SliderOne from '../assets/images/slider/Slider1.jpg';
import SliderTwo from '../assets/images/slider/Slider2.jpg';
import SliderThree from '../assets/images/slider/Slider3.jpg';
import SliderOneLg from '../assets/images/slider/SliderLg1.jpg';
import SliderTwoLg from '../assets/images/slider/SliderLg2.jpg';
import SliderThreeLg from '../assets/images/slider/SliderLg3.jpg';
// import Ticker, { NewsTicker } from 'nice-react-ticker';
import { ReactTicker } from '@guna81/react-ticker';
import { Link } from 'react-router-dom';
import StackedIconButton from '../components/StackedIconButton';
import { IoMdArrowDropdown } from 'react-icons/io';

const tickers = [
    {
        _id: "1",
        text: "DOGE mining officially launched",
        date: "2023-05-19",
        url: "#",
        type: 'internal'
    },
    {
        _id: "2",
        text: "Platform promotion commission upgrade",
        date: "2023-05-15",
        url: "https://google.com",
        type: 'external'
    },
    {
        _id: "3",
        text: "Announcement on platform decentralization and token issuance",
        date: "2023-05-01",
        url: "#",
        type: 'internal'
    },
    {
        text: "DOGE computing power mining will be launched soon",
        date: "2023-04-28",
        url: "#",
        type: 'internal'
    },
    {
        _id: "4",
        text: "The system maintenance and upgrade is completed, and recharge and withdrawal resume.",
        date: "2023-04-07",
        url: "#",
        type: 'internal'
    },
    {
        _id: "5",
        text: "system maintenance",
        date: "2023-04-06",
        url: "#",
        type: 'internal'
    },
    {
        _id: "6",
        text: "System upgrade new features",
        date: "2022-12-06",
        url: "#",
        type: 'internal'
    },
    {
        _id: "7",
        text: "The system upgrade is completed, and LTC mining is officially launched.",
        date: "2022-11-05",
        url: "#",
        type: 'internal'
    },
    {
        _id: "8",
        text: "LTC mining will be launched soon",
        date: "2022-11-01",
        url: "#",
        type: 'internal'
    },
];

const calculatorItems = [
    { _id: "1", icon: "https://eastminer.com/static/coin/TRX.png", label: "TRX 200 Day", value: "TRX" },
    { _id: "2", icon: "https://eastminer.com/static/coin/DOGE.png", label: "DOGE 230 Day", value: "DOGE" },
    { _id: "3", icon: "https://eastminer.com/static/coin/BTC.png", label: "BTC 200 Day", value: "BTC" },
    { _id: "4", icon: "https://eastminer.com/static/coin/LTC.png", label: "LTC 200 Day", value: "LTC" },
]

const Home = () => {
    // const autoplay = useRef(Autoplay({ delay: 2000 }));
    const isMobile = useMediaQuery('(max-width: 768px)');
    const [selectedCalculator, setSelectedCalculator] = useState(calculatorItems[0])

    const selectCalculator = (value) => {
        const selected = calculatorItems.find((obj) => (obj.value === value));
        setSelectedCalculator(selected);
    }

    return (
        <>
            <SiteHeader />

            <div style={{  background: "#fff" }}>
                <Container size="xl" px={0}>
                    <Box
                        style={{
                            display: "block",
                            width: "100%",
                            position: "relative"
                        }}
                    >
                        <Swiper
                            spaceBetween={30}
                            centeredSlides={true}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            navigation={false}
                            modules={[Autoplay, Pagination]}
                            className="mySwiper"
                        >
                            <SwiperSlide className="item">
                                <Image src={isMobile ? SliderOne : SliderOneLg } />
                            </SwiperSlide>
                            <SwiperSlide className="item">
                                <Image src={isMobile ? SliderTwo : SliderTwoLg } />
                            </SwiperSlide>
                            <SwiperSlide className="item">
                                <Image src={isMobile ? SliderThree : SliderThreeLg } />
                            </SwiperSlide>
                        </Swiper>
                    </Box>
                    <Flex
                        h={40}
                    >
                        <ThemeIcon className='ticker-pre-icon' size="xl" h={40} variant="default" radius={0} color="dark">
                            <ImVolumeMedium size={20} />
                        </ThemeIcon>
                        {/* <Ticker className="notice" isNewsTicker={true} slideSpeed={30} style={{ background: "#fff" }}>
                            {tickers.map((ticker, i) => (
                                <NewsTicker id={i} title={ticker.text} url={ticker.url} meta={ticker.date} />
                            ))}
                        </Ticker> */}
                        <div className="pos-relative w-100">
                            <ReactTicker
                                data={tickers}
                                component={(item , i) => (item.type === "external") ? <a key={`ticker-${item._id}`} href={item.url} target="_blank" rel='nofollow noreferrer'>{`${i+1}. ${item.text}`}</a> : <Link key={`ticker-${item._id}`} to={item.url}>{`${i+1}. ${item.text}`}</Link> }
                                speed={60}
                                keyName="_id"
                                tickerStyle={{
                                    position: "absolute",
                                    bottom: 0,
                                    left: 0,
                                    width: "100%",
                                    height: "40px",
                                    backgroundColor: "#fff",
                                    zIndex: 99,
                                    // borderTop: "1px solid #e0e0e0"
                                }}
                                tickerClassName="news-ticker-container"
                                itemClassName="news-ticker"
                            />
                        </div>
                        <ThemeIcon className='ticker-suf-icon' size="xl" h={40} variant="default" radius={0} color="dark">
                            <MdOutlineArrowForwardIos size={20} />
                        </ThemeIcon>
                    </Flex>
                </Container>
            </div>

            <section className='section-padding' style={{  background: "#fff" }}>
                <Container size="xl">
                    <Grid gutter="xl" gutterXl={50} columns={12}>
                        <Grid.Col span={3}>
                            {/* <StackedIconButton
                                className="home-links"
                                icon={<HiShare size={"2rem"} />}
                                label="Promote"
                                link="/"
                                textSize={"lg"}
                                iconProps={{
                                    size: "4rem",
                                    radius: "lg",
                                    variant: "gradient",
                                    gradient: { from: '#ed6ea0', to: '#ec8c69', deg: 35  }
                                }}
                            /> */}

                            <StackedIconButton
                                className="home-links"
                                icon={<Image src='https://eastminer.com/static/menu/invite.png' />}
                                label="Promote"
                                link="/promote"
                                textSize={"lg"}
                            />
                        </Grid.Col>
                        <Grid.Col span={3}>
                            <StackedIconButton
                                className="home-links"
                                icon={<Image src='https://eastminer.com/static/menu/tk.png' />}
                                label="Recharge"
                                link="/recharge"
                                textSize={"lg"}
                            />
                        </Grid.Col>
                        <Grid.Col span={3}>
                            <StackedIconButton
                                className="home-links"
                                icon={<Image src='https://eastminer.com/static/menu/wheel.png' />}
                                label="Roulette"
                                link="/roulette"
                                textSize={"lg"}
                            />
                        </Grid.Col>
                        <Grid.Col span={3}>
                            <StackedIconButton
                                className="home-links"
                                icon={<Image src='https://eastminer.com/static/menu/course.png' />}
                                label="Tutorial"
                                link="/tutorial"
                                textSize={"lg"}
                            />
                        </Grid.Col>
                        <Grid.Col span={3}>
                            <StackedIconButton
                                className="home-links"
                                icon={<Image src='https://eastminer.com/static/menu/faq.png' />}
                                label="FAQ"
                                link="/faq"
                                textSize={"lg"}
                            />
                        </Grid.Col>
                        <Grid.Col span={3}>
                            <StackedIconButton
                                className="home-links"
                                icon={<Image src='https://eastminer.com/static/menu/activity.png' />}
                                label="Activity"
                                link="/activity"
                                textSize={"lg"}
                            />
                        </Grid.Col>
                        <Grid.Col span={3}>
                            <StackedIconButton
                                className="home-links"
                                icon={<Image src='https://eastminer.com/static/menu/xunbao.png' />}
                                label="Treasure hunt"
                                link="/treasure-hunt"
                                textSize={"lg"}
                            />
                        </Grid.Col>
                        <Grid.Col span={3}>
                            <StackedIconButton
                                className="home-links"
                                icon={<Image src='https://eastminer.com/static/menu/zhongchou.png' />}
                                label="Crowdfunding"
                                link="/crowdfunding"
                                textSize={"lg"}
                            />
                        </Grid.Col>
                    </Grid>
                </Container>
            </section>

            {/* <section className='section-padding pt-0' style={{  background: "#fff" }}>
                <Container size={"xl"}>
                    <Box
                        sx={(theme) => ({
                            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.gray[0] : "rgba(26,217,255,.21)",
                            padding: theme.spacing.xl,
                            borderRadius: theme.radius.md,
                        })}
                    >
                        <Text ta="center">UK Time</Text>
                        <Text ta="center" fw={500} fz="lg">
                            <Clock
                                format={'dddd, MMMM Mo, YYYY, HH:mm:ss'}
                                ticking={true}
                                timezone={'Europe/London'}
                            />
                        </Text>
                        <Space h="xs" />
                        <Text ta="center">Cumulative mining output(FoldedUSDT)</Text>
                        <Text ta="center" fw={500} fz="lg" c={"red"}>303,659,776.9</Text>
                        <Space h="xs" />
                        <SimpleGrid cols={2}>
                            <div>
                                <Text ta="center" weight={500} size="md">1452</Text>
                                <Text ta="center" size="sm" color="dimmed">Run(Day)</Text>
                            </div>
                            <div>
                                <Text ta="center" weight={500} size="md">246,047</Text>
                                <Text ta="center" size="sm" color="dimmed">The number of participants</Text>
                            </div>
                        </SimpleGrid>
                    </Box>
                </Container>
            </section> */}

            <section className='section-padding'>
                <Container size={"xl"}>
                    <Grid gutter={"xl"}>
                        <Grid.Col xs={12} md={6}>
                            <SimpleGrid cols={1}>
                                <Box
                                    sx={(theme) => ({
                                        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.gray[0] : "rgba(26,217,255,.21)",
                                        padding: theme.spacing.xl,
                                        borderRadius: theme.radius.md,
                                    })}
                                >
                                    <Text ta="center">UK Time</Text>
                                    <Text ta="center" fw={500} fz="lg">
                                        <Clock
                                            format={'dddd, MMMM Mo, YYYY, HH:mm:ss'}
                                            ticking={true}
                                            timezone={'Europe/London'}
                                        />
                                    </Text>
                                    <Space h="xs" />
                                    <Text ta="center">Cumulative mining output(FoldedUSDT)</Text>
                                    <Text ta="center" fw={500} fz="lg" c={"red"}>303,659,776.9</Text>
                                    <Space h="xs" />
                                    <SimpleGrid cols={2}>
                                        <div>
                                            <Text ta="center" weight={500} size="md">1452</Text>
                                            <Text ta="center" size="sm" color="dimmed">Run(Day)</Text>
                                        </div>
                                        <div>
                                            <Text ta="center" weight={500} size="md">246,047</Text>
                                            <Text ta="center" size="sm" color="dimmed">The number of participants</Text>
                                        </div>
                                    </SimpleGrid>
                                </Box>

                                <Paper p="md" withBorder>
                                    <Group position="apart" grow>
                                        <Box pos="relative">
                                            <Select
                                                sx={{
                                                    '.mantine-Select-dropdown': {
                                                    width: '180px !important',
                                                    left: '0 !important',
                                                    },
                                                }}
                                                onChange={selectCalculator}
                                                defaultValue={selectedCalculator.value}
                                                className="calculator-select"
                                                rightSection={<IoMdArrowDropdown />}
                                                icon={<Image radius={100} src={selectedCalculator.icon} />}
                                                data={calculatorItems}
                                                itemComponent={forwardRef(
                                                    ({ icon, label, ...others }, ref)=> (
                                                        <div ref={ref} {...others}>
                                                            <Group noWrap>
                                                                <Avatar src={icon} size="sm" />

                                                                <div>
                                                                <Text size="sm">{label}</Text>
                                                                </div>
                                                            </Group>
                                                        </div>
                                                    )
                                                )}
                                            />
                                        </Box>
                                        <Text fw={500} fz={isMobile ? "md" : "lg"} ta="right">Income Calculator</Text>
                                    </Group>
                                    <Space h={"md"} />
                                    <Table className='calculator-table' withBorder withColumnBorders>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <Stack align="center" spacing={2}>
                                                        <Text>Amount</Text>
                                                        <Text>(TRX)</Text>
                                                    </Stack>
                                                </td>
                                                <td colSpan={2} className='p-0'><TextInput className='amount-input' variant="unstyled" /></td>
                                            </tr>
                                            <tr>
                                                <td><Text ta={"center"}>Amount</Text></td>
                                                <td><Text ta={"center"}>Amount</Text></td>
                                                <td><Text ta={"center"}>Amount</Text></td>
                                            </tr>
                                            <tr>
                                                <td><Text ta={"center"}>Amount</Text></td>
                                                <td><Text ta={"center"}>Amount</Text></td>
                                                <td><Text ta={"center"}>Amount</Text></td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                    <Space h={"md"} />
                                    <Button
                                        color="blue.4"
                                        radius="xs"
                                        style={{ display: "inline-block", width: "100%", background: "#1ad9ff" }}
                                        leftIcon={<Image height={"1rem"} src={"https://eastminer.com/static/ic_cal.png"} />}
                                    >
                                        Invest
                                    </Button>
                                </Paper>
                            </SimpleGrid>
                        </Grid.Col>
                        <Grid.Col xs={12} md={6} >
                            <Paper p="md" withBorder>
                                <Text fw={500} style={{ borderLeft: "4px solid #2e2e2e", paddingLeft: 15 }}>Market volatility</Text>
                                <Space h={"md"} />
                                <Table className='market-volatility-table' horizontalSpacing={isMobile ? "sm" : "xl"}>
                                    <tbody>
                                        <tr>
                                            <td><Text fw={500} span>BTC<Text c="dimmed" fz="xs" span>/USDT</Text></Text></td>
                                            <td><Text ta={"right"} fw={500} >26914.401</Text></td>
                                            <td><Text className='rate red' ta="center">-0.04%</Text></td>
                                        </tr>
                                        <tr>
                                            <td><Text fw={500} span>ETH<Text c="dimmed" fz="xs" span>/USDT</Text></Text></td>
                                            <td><Text ta="right" fw={500} >1819.8414</Text></td>
                                            <td><Text className='rate green' ta="center"> 0.49%</Text></td>
                                        </tr>
                                        <tr>
                                            <td><Text fw={500} span>EOS<Text c="dimmed" fz="xs" span>/USDT</Text></Text></td>
                                            <td><Text ta="right" fw={500} >0.85704921</Text></td>
                                            <td><Text className='rate red' ta="center">-1.26%</Text></td>
                                        </tr>
                                        <tr>
                                            <td><Text fw={500} span>DOGE<Text c="dimmed" fz="xs" span>/USDT</Text></Text></td>
                                            <td><Text ta="right" fw={500} >0.072930228</Text></td>
                                            <td><Text className='rate green' ta="center"> 0.79%</Text></td>
                                        </tr>
                                        <tr>
                                            <td><Text fw={500} span>BCH<Text c="dimmed" fz="xs" span>/USDT</Text></Text></td>
                                            <td><Text ta="right" fw={500} >114.30917</Text></td>
                                            <td><Text className='rate red' ta="center">-0.72%</Text></td>
                                        </tr>
                                        <tr>
                                            <td><Text fw={500} span>DOT<Text c="dimmed" fz="xs" span>/USDT</Text></Text></td>
                                            <td><Text ta="right" fw={500} >5.3133374</Text></td>
                                            <td><Text className='rate green' ta="center"> 0.36%</Text></td>
                                        </tr>
                                        <tr>
                                            <td><Text fw={500} span>XRP<Text c="dimmed" fz="xs" span>/USDT</Text></Text></td>
                                            <td><Text ta="right" fw={500} >0.45733729</Text></td>
                                            <td><Text className='rate red' ta="center">-0.37%</Text></td>
                                        </tr>
                                        <tr>
                                            <td><Text fw={500} span>TRX<Text c="dimmed" fz="xs" span>/USDT</Text></Text></td>
                                            <td><Text ta={"right"} fw={500} >0.078903889</Text></td>
                                            <td><Text className='rate green' ta="center"> 4.31%</Text></td>
                                        </tr>
                                        <tr>
                                            <td><Text fw={500} span>ETC<Text c="dimmed" fz="xs" span>/USDT</Text></Text></td>
                                            <td><Text ta={"right"} fw={500} >18.318839</Text></td>
                                            <td><Text className='rate green' ta="center"> 1.22%</Text></td>
                                        </tr>
                                        <tr>
                                            <td><Text fw={500} span>LTC<Text c="dimmed" fz="xs" span>/USDT</Text></Text></td>
                                            <td><Text ta={"right"} fw={500} >91.225285</Text></td>
                                            <td><Text className='rate red' ta="center">-0.62</Text></td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Paper>
                        </Grid.Col>
                    </Grid>
                </Container>
            </section>
        </>
    )
}

export default Home