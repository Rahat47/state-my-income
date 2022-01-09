import {
    Button,
    chakra,
    FormControl,
    FormLabel,
    HTMLChakraProps,
    Input,
    Stack,
} from '@chakra-ui/react';
import PasswordField from './PasswordField';

const RegisterForm = (props: HTMLChakraProps<'form'>) => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Submitted');
    };

    return (
        <chakra.form onSubmit={handleSubmit} {...props}>
            <Stack spacing='6'>
                <FormControl id='name' isRequired>
                    <FormLabel>Your Name</FormLabel>
                    <Input
                        name='name'
                        type='text'
                        autoComplete='text'
                        required
                    />
                </FormControl>
                <FormControl id='email' isRequired>
                    <FormLabel>Email address</FormLabel>
                    <Input
                        name='email'
                        type='email'
                        autoComplete='email'
                        required
                    />
                </FormControl>
                <PasswordField mode='register' />
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

export default RegisterForm;
