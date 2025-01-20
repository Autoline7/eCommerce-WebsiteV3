import React, { useState } from 'react';
import Navbar from "./ui/Navbar.jsx"
import Menu from './ui/Menu.jsx';
import Cart from './ui/Cart.jsx';


const Nav = () => {
    const [cartOpen, setCarOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <Navbar setCarOpen={setCarOpen} setMenuOpen={setMenuOpen} />
            <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
            <Cart cartOpen={cartOpen} setCarOpen={setCarOpen}/>
        </>
    );
}

export default Nav;
