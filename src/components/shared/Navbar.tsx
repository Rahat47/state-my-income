import { ReactNode } from 'react';
import {
    Box,
    Flex,
    HStack,
    Link,
    IconButton,
    Button,
    useColorMode,
    useDisclosure,
    useColorModeValue,
    Stack,
    Container,
    Collapse,
    LinkProps,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import Logo from '../Auth/Logo';
import { Link as RouterLink } from 'react-router-dom';

const Links = [
    {
        name: 'Home',
        href: '/',
    },
    {
        name: 'Auth',
        href: '/auth',
    },
    {
        name: 'About',
        href: '/about',
    },
];

interface NavLinkProps extends LinkProps {
    children: ReactNode;
    linkTo?: string;
}

const NavLink = (props: NavLinkProps) => (
    <Link
        px={2}
        py={1}
        rounded={'md'}
        _hover={{
            textDecoration: 'none',
            bg: useColorModeValue('gray.200', 'gray.700'),
        }}
        to={props.linkTo}
        as={RouterLink}
        isExternal={false}
        onClick={props.onClick}
        {...props}
    >
        {props.children}
    </Link>
);

const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Container maxW='8xl'>
            <Box px={4}>
                <Flex
                    h={16}
                    alignItems={'center'}
                    justifyContent={'space-between'}
                >
                    <IconButton
                        size={'md'}
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        aria-label={'Open Menu'}
                        display={{ md: 'none' }}
                        onClick={isOpen ? onClose : onOpen}
                    />
                    <HStack spacing={8} alignItems={'center'}>
                        <Logo />

                        <HStack
                            as={'nav'}
                            spacing={4}
                            display={{ base: 'none', md: 'flex' }}
                        >
                            {Links.map((link, i) => (
                                <NavLink
                                    linkTo={link.href}
                                    onClick={onClose}
                                    key={i}
                                >
                                    {link.name}
                                </NavLink>
                            ))}
                        </HStack>
                    </HStack>
                    <Flex alignItems={'center'}>
                        <Button onClick={toggleColorMode}>
                            {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                        </Button>
                    </Flex>
                </Flex>

                <Collapse in={isOpen} animateOpacity>
                    <Box pb={4} display={{ md: 'none' }}>
                        <Stack as={'nav'} spacing={4} mt={4}>
                            {Links.map((link, i) => (
                                <NavLink
                                    linkTo={link.href}
                                    textAlign='center'
                                    key={i}
                                    onClick={onClose}
                                >
                                    {link.name}
                                </NavLink>
                            ))}
                        </Stack>
                    </Box>
                </Collapse>
            </Box>
        </Container>
    );
};

export default Navbar;
