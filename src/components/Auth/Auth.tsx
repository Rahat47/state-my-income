import {
    Box,
    Button,
    Heading,
    SimpleGrid,
    Text,
    useColorModeValue,
    VisuallyHidden,
    Link,
} from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';
import AuthCard from './AuthCard';
import DividerWithText from './DividerWithText';
import LoginForm from './LoginForm';
import Logo from './Logo';
import RegisterForm from './RegisterForm';

const Auth = () => {
    const [authMode, setAuthMode] = useState<'login' | 'register' | 'forgot'>(
        'login'
    );

    const handleAuthModeChange = () => {
        setAuthMode(authMode === 'login' ? 'register' : 'login');
    };

    const variants = {
        hidden: {
            opacity: 0,
            x: -100,
        },

        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5,
                ease: 'easeInOut',
            },
        },

        exit: {
            opacity: 0,
            x: 100,
            transition: {
                duration: 0.5,
                ease: 'easeInOut',
            },
        },
    };

    return (
        <Box
            bgGradient={useColorModeValue(
                'linear(to-br, gray.300, blue.400, cyan.200)',
                'linear(to-br, gray.900, blue.700, cyan.500)'
            )}
            minH='100vh'
            py='12'
            px={{ base: '4', lg: '8' }}
        >
            <Box maxW='md' mx='auto'>
                <Logo mx='auto' h='8' mb={{ base: '10', md: '20' }} />
                <Heading textAlign='center' size='xl' fontWeight='extrabold'>
                    {authMode === 'login'
                        ? 'Sign in to your account'
                        : 'Sign up for an account'}
                </Heading>
                <Text
                    mt='4'
                    mb='8'
                    align='center'
                    maxW='md'
                    fontWeight='medium'
                >
                    <Text as='span' mr={2}>
                        {authMode === 'login'
                            ? "Don't have an account?"
                            : 'Already have an account?'}
                    </Text>
                    <span>•</span>
                    <Link ml='2' onClick={handleAuthModeChange}>
                        {authMode === 'login' ? 'Create one now' : 'Sign in'}
                    </Link>
                </Text>
                <AuthCard>
                    <AnimatePresence exitBeforeEnter>
                        {authMode === 'login' ? (
                            <motion.div
                                variants={variants}
                                initial='hidden'
                                animate='visible'
                                exit='exit'
                                key='login'
                            >
                                <LoginForm />
                            </motion.div>
                        ) : (
                            <motion.div
                                variants={variants}
                                initial='hidden'
                                animate='visible'
                                exit='exit'
                                key='register'
                            >
                                <RegisterForm />
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <DividerWithText mt='6'>or continue with</DividerWithText>

                    <SimpleGrid mt='6' columns={3} spacing='3'>
                        <Button color='currentColor' variant='outline'>
                            <VisuallyHidden>Login with Facebook</VisuallyHidden>
                            <FaFacebook />
                        </Button>
                        <Button color='currentColor' variant='outline'>
                            <VisuallyHidden>Login with Google</VisuallyHidden>
                            <FaGoogle />
                        </Button>
                        <Button color='currentColor' variant='outline'>
                            <VisuallyHidden>Login with Github</VisuallyHidden>
                            <FaGithub />
                        </Button>
                    </SimpleGrid>
                </AuthCard>
            </Box>
        </Box>
    );
};

export default Auth;
