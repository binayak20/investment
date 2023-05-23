import React from 'react';
import { Box, Button, Container, Flex, Paper, PasswordInput, Stack, Text, TextInput } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import SiteHeader from '../../components/SiteHeader';
import { BsHeadset } from 'react-icons/bs';
import { AiOutlineHeart, AiOutlineLock, AiOutlineMail } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import AuthLogoSection from '../../components/AuthLogoSection';
import { useForm } from '@mantine/form';

const SignUp = () => {
    const isMobile = useMediaQuery('(max-width: 768px)');

    const form = useForm({
        initialValues: { code: '099880', email: '', password: '', confirmPassword: '', withdrawalPassword: '' },

        // functions will be used to validate values at corresponding key
        validate: {
          email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
          password: (value) => (value.length < 6 ? 'Password must have at least 6 character ' : null),
          confirmPassword: (value, values) => (value !== values.password ? 'Passwords did not match' : null),
          withdrawalPassword: (value) => (value.length < 6 ? 'Withdrawal password must have at least 6 character ' : null),
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
                                        placeholder="Invitation Code"
                                        label="Invitation code"
                                        icon={<AiOutlineHeart />}
                                        withAsterisk={false}
                                        required
                                        {...form.getInputProps('code')}
                                    />

                                    <TextInput
                                        placeholder="Please input your email"
                                        label="Email"
                                        icon={<AiOutlineMail />}
                                        withAsterisk={false}
                                        required
                                        {...form.getInputProps('email')}
                                    />

                                    <PasswordInput
                                        placeholder="Password"
                                        label="Password"
                                        icon={<AiOutlineLock />}
                                        withAsterisk={false}
                                        required
                                        {...form.getInputProps('password')}
                                    />

                                    <PasswordInput
                                        placeholder="Confirm Password"
                                        label="Confirm Password"
                                        icon={<AiOutlineLock />}
                                        withAsterisk={false}
                                        required
                                        {...form.getInputProps('confirmPassword')}
                                    />

                                    <PasswordInput
                                        placeholder="Withdrawal Password"
                                        label="Withdrawal Password"
                                        icon={<AiOutlineLock />}
                                        withAsterisk={false}
                                        required
                                        {...form.getInputProps('withdrawalPassword')}
                                    />

                                    <Button type="submit" radius={"lg"} size="md">Sign up</Button>
                                    <Button component={Link} to="/login" radius={"lg"} size="md" variant="outline">Log In</Button>
                                    <Button component={Link} to="/support" radius={"lg"} size="md" variant="outline" leftIcon={<BsHeadset />}>Customer Service</Button>
                                    <Link to={"/privacy-policy"} className="privacy-policy-link" >Privacy Policy</Link>
                                    {/* <Space h={"xs"} /> */}
                                    <Text fz={"xs"}>
                                        The password is stored in a decentralized manner and cannot be retrieved if lost.
                                        Please remember your password and contact customer service staff to modify it if
                                        necessary.
                                    </Text>
                                </Flex>
                            </form>
                        </Paper>

                    </Box>
                </Stack>
            </Container>
        </>
    )
}

export default SignUp