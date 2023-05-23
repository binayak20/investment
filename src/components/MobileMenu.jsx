import React from 'react';
import { Flex, Text } from '@mantine/core';
import { Link, useLocation } from 'react-router-dom';

const MobileMenu = ({links}) => {
    const location = useLocation();

    return (
        <>
            <Flex
                className='mobile-menu'
                justify="center"
                align="center"
                direction="row"
                wrap="nowrap"
            >
                { links.map((link, i) => <Link
                        className={`w-100 d-flex flex-column align-center justify-content-center ${(location.pathname === link.url) && "active"}`}
                        to={link.url}
                        key={`mobile-link-${i}`}
                    >
                        {link.icon}
                        <Text className='label'>{link.label}</Text>
                    </Link>
                )}
            </Flex>
        </>
    )
}

export default MobileMenu