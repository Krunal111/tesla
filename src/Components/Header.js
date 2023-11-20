import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import TopBar from './TopBar';

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
    let toggle = "☰";
    if(showMenu) {
        toggle = "✕";
    }
    const menuToggle = (e) => {
        e.preventDefault();
        setShowMenu(!showMenu)
    }

  return (
    <React.Fragment>
        <header className='fixed top-0 left-0 w-full z-10 bg-white'>
            <TopBar />
            <div className='container mx-auto px-5'>
                <div className='flex items-center justify-between relative py-4'>
                    <h1><a href='/'><img src="./logo.svg" width={120} height={24} /></a></h1>
                    <div className={showMenu ? '' : "max-lg:hidden"}>
                        <ul className='flex items-center pl-20 gap-8 max-lg:flex-col max-lg:items-start max-lg:absolute max-lg:top-11 max-lg:gap-2 max-lg:right-0 max-lg:bg-white max-lg:p-5 max-lg:w-40 max-lg:shadow'>
                            <li>
                                <NavLink to="/" className='hover:font-bold transition-all'>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/model-s" className='hover:font-bold transition-all'>Model S</NavLink>
                            </li>
                            <li>
                                <NavLink to="/m-3" className='hover:font-bold transition-all'>Model 3</NavLink>
                            </li>
                            <li>
                                <NavLink to="/m-x" className='hover:font-bold transition-all'>Model X</NavLink>
                            </li>
                            <li>
                                <NavLink to="/model-y" className='hover:font-bold transition-all'>Model Y</NavLink>
                            </li>
                        </ul>
                    </div>
                    <ul className='flex items-center ml-14 gap-5'>
                        <li>
                            <Link to="/products">Shop</Link>
                        </li>
                        <li>
                            <Link to="#">Account</Link>
                        </li>
                        <li className="hidden max-lg:block">
                            <Link to="#" onClick={menuToggle}>{toggle}</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    </React.Fragment>
  )
}

export default Header