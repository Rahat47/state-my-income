import { chakra } from '@chakra-ui/react';
import { Auth, Footer, Navbar } from './components';
import { Counter } from './features/counter/Counter';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

function App() {
    const location = useLocation();

    return (
        <>
            <chakra.header>
                <Navbar />
            </chakra.header>

            <chakra.main>
                <AnimatePresence exitBeforeEnter>
                    <Routes location={location} key={location.key}>
                        <Route path='/auth' element={<Auth />} />
                        <Route path='/' element={<Counter />} />
                    </Routes>
                </AnimatePresence>
            </chakra.main>

            <chakra.footer>
                <Footer />
            </chakra.footer>
        </>
    );
}

export default App;
