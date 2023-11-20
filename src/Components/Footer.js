import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='sticky top-full px-3 py-5'>
        <div className='container mx-auto'>
            <ul className='flex flex-wrap justify-center items-center gap-6'>
                <li>
                    <Link className='text-sm uppercase' to="#">Tesla © {new Date().getFullYear()}</Link>
                </li>
                <li>
                    <Link className='text-sm uppercase' to="#">Privacy & Legal</Link>
                </li>
                <li>
                    <Link className='text-sm uppercase' to="#">Vehicle Recalls</Link>
                </li>
                <li>
                    <Link className='text-sm uppercase' to="/contact">Contact</Link>
                </li>
                <li>
                    <Link className='text-sm uppercase' to="#">Careers</Link>
                </li>
            </ul>
        </div>
    </footer>
  )
}

export default Footer