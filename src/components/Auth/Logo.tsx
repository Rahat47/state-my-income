import { Flex, Icon, FlexProps, Text } from '@chakra-ui/react';
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
                color='gray.600'
                fontWeight='bold'
                fontFamily='heading'
            >
                State My Income
            </Text>
        </Flex>
    );
};

export default Logo;
