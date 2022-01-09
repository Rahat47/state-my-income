import {
    Flex,
    Icon,
    FlexProps,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

import { FcMoneyTransfer } from 'react-icons/fc';

const Logo = (props: FlexProps) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/');
    };

    return (
        <Flex
            {...props}
            align='center'
            justify='center'
            onClick={handleClick}
            cursor='pointer'
        >
            <Icon boxSize={10} as={FcMoneyTransfer} />
            <Text
                as='span'
                ml={2}
                fontSize='xl'
                color={useColorModeValue('gray.900', 'whiteAlpha.900')}
                fontWeight='bold'
                fontFamily='poppins'
            >
                State My Income
            </Text>
        </Flex>
    );
};

export default Logo;
