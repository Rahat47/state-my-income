import {
    Button,
    chakra,
    FormControl,
    FormLabel,
    HTMLChakraProps,
    Input,
    Stack,
    useToast,
} from '@chakra-ui/react';
import { useRef } from 'react';
import PasswordField from './PasswordField';
import validator from 'validator';

const LoginForm = (props: HTMLChakraProps<'form'>) => {
    const toast = useToast({
        position: 'top-left',
        duration: 5000,
        isClosable: true,
    });

    const emailRef = useRef<HTMLInputElement>(null)!;
    const passwordRef = useRef<HTMLInputElement>(null)!;

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const email = emailRef.current?.value;
        const password = passwordRef.current?.value;

        if (!email || !password) {
            toast({
                title: 'Error',
                description: 'Please fill in all fields',
                status: 'error',
            });
            return;
        }

        if (!validator.isEmail(email)) {
            toast({
                title: 'Error',
                description: 'Please provide a valid email',
                status: 'error',
            });
            emailRef?.current?.focus();
            return;
        }

        console.log({
            email,
            password,
        });

        toast({
            title: 'Success',
            description: 'You have successfully logged in',
            status: 'success',
        });
    };

    return (
        <chakra.form onSubmit={handleSubmit} {...props}>
            <Stack spacing='6'>
                <FormControl id='email' isRequired>
                    <FormLabel>Email address</FormLabel>
                    <Input
                        name='email'
                        type='email'
                        autoComplete='email'
                        required
                        ref={emailRef}
                    />
                </FormControl>
                <PasswordField mode='login' ref={passwordRef} />
                <Button
                    type='submit'
                    colorScheme='blue'
                    size='lg'
                    fontSize='md'
                >
                    Sign in
                </Button>
            </Stack>
        </chakra.form>
    );
};

export default LoginForm;
