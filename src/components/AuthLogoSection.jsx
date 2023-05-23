import React from 'react';
import { Group, Image, Text } from '@mantine/core';

const AuthLogoSection = () => {
  return (
    <>
        <Group position="center" align={"center"}>
            <Image className="login-logo" fit='contain' height={100} src={"https://eastminer.com/logo.png"} />
            <Text ta={"center"} fw={500} >eastminer.com-MINER</Text>
        </Group>
    </>
  )
}

export default AuthLogoSection