import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
    colors: {
        brand: {
            900: '#1a365d',
            800: '#153e75',
            700: '#2a69ac',
            600: '#2989d8',
            500: '#2ca3f8',
            400: '#74b9ff',
            300: '#a6eaff',
            200: '#d8f8ff',
            100: '#f0fbff',
            50: '#fafdfe',
            25: '#fcfcfa',
            10: '#fafafa',
            0: '#fafafa',
        },
    },
    fonts: {
        body: "'Open Sans', sans-serif",
        heading: "'Lato', sans-serif",
        mono: 'Menlo, monospace',
        roboto: "'Roboto', sans-serif",
        poppins: "'Poppins', sans-serif",
    },
});

export default theme;
