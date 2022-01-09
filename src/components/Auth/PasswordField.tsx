import {
    Box,
    Flex,
    FormControl,
    FormLabel,
    IconButton,
    Input,
    InputGroup,
    InputProps,
    InputRightElement,
    useColorModeValue as mode,
    useDisclosure,
    useMergeRefs,
} from '@chakra-ui/react';
import * as React from 'react';
import { HiEye, HiEyeOff } from 'react-icons/hi';

interface PasswordFieldProps extends InputProps {
    mode?: 'register' | 'login';
}

const PasswordField = React.forwardRef<HTMLInputElement, PasswordFieldProps>(
    (props, ref) => {
        const { isOpen, onToggle } = useDisclosure();
        const inputRef = React.useRef<HTMLInputElement>(null);

        const mergeRef = useMergeRefs(inputRef, ref);

        const onClickReveal = () => {
            onToggle();
            const input = inputRef.current;
            if (input) {
                input.focus({ preventScroll: true });
                const length = input.value.length * 2;
                requestAnimationFrame(() => {
                    input.setSelectionRange(length, length);
                });
            }
        };

        return (
            <FormControl id='password' isRequired>
                <Flex justify='space-between'>
                    <FormLabel>Password</FormLabel>
                    {props.mode === 'login' && (
                        <Box
                            as='a'
                            color={mode('blue.600', 'blue.200')}
                            fontWeight='semibold'
                            fontSize='sm'
                        >
                            Forgot Password?
                        </Box>
                    )}
                </Flex>
                <InputGroup>
                    <InputRightElement>
                        <IconButton
                            bg='transparent !important'
                            variant='ghost'
                            aria-label={
                                isOpen ? 'Mask password' : 'Reveal password'
                            }
                            icon={isOpen ? <HiEyeOff /> : <HiEye />}
                            onClick={onClickReveal}
                        />
                    </InputRightElement>
                    <Input
                        ref={mergeRef}
                        name='password'
                        type={isOpen ? 'text' : 'password'}
                        autoComplete='current-password'
                        required
                        {...props}
                    />
                </InputGroup>
            </FormControl>
        );
    }
);

PasswordField.displayName = 'PasswordField';

export default PasswordField;
