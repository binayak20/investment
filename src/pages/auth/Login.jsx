import React from 'react';
import { Box, Button, Container, Flex, Paper, PasswordInput, Stack, TextInput } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import SiteHeader from '../../components/SiteHeader';
import { BsHeadset } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import AuthLogoSection from '../../components/AuthLogoSection';
import { useForm } from '@mantine/form';

const Login = () => {
    const isMobile = useMediaQuery('(max-width: 768px)');

    const form = useForm({
        initialValues: { email: '', password: '' },

        // functions will be used to validate values at corresponding key
        validate: {
          email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
          password: (value) => (value.length < 6 ? 'Password must have at least 6 character ' : null),
        },
    });

    return (
        <>
            { isMobile && <SiteHeader isInnerPage={true} title="Log In" /> }

            <Container size={"xl"} style={{ paddingTop: isMobile ? 26 : 0, paddingBottom: isMobile ? 0 : 46 }}>
                <Stack>
                    <AuthLogoSection />
                    <Box>
                        <Paper className='login-form' p={"xl"} radius="lg">
                            <form onSubmit={form.onSubmit((values) => console.log(values))}>
                                <Flex
                                    direction={"column"}
                                    gap="lg"
                                >
                                    <TextInput
                                        placeholder="Please input your email"
                                        label="E-Mail"
                                        withAsterisk={false}
                                        required
                                        {...form.getInputProps('email')}
                                    />

                                    <PasswordInput
                                        placeholder="Please enter the password"
                                        label="Password"
                                        withAsterisk={false}
                                        {...form.getInputProps('password')}
                                    />

                                    <Button type='submit' radius={"lg"} size="md">Log In</Button>
                                    <Button component={Link} to="/sign-up" radius={"lg"} size="md" variant="outline">Sign up Now</Button>
                                    <Button component={Link} to="/support" radius={"lg"} size="md" variant="outline" leftIcon={<BsHeadset />}>Customer Service</Button>
                                    <Link to={"/privacy-policy"} className="privacy-policy-link" >Privacy Policy</Link>
                                </Flex>
                            </form>
                        </Paper>

                    </Box>
                </Stack>
            </Container>
        </>
    )
}

export default Login