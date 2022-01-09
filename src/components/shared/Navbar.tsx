import { ReactNode } from 'react';

type NavbarProps = {
    text?: string;
    children?: ReactNode;
};

const Navbar = ({ text }: NavbarProps) => {
    return (
        <div>
            <h1>Hello World {text}</h1>
        </div>
    );
};

export default Navbar;
