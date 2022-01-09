import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import theme from './styles/theme';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <ChakraProvider resetCSS theme={theme}>
                <Provider store={store}>
                    <App />
                </Provider>
            </ChakraProvider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
