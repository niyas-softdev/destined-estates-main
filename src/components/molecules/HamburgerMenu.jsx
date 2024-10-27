"use client"
import React from 'react'
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
const HamburgerMenu = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    return (
        <>
            <div className="md:hidden">
                    <button
                        className="text-2xl"
                        onClick={() => setIsNavOpen(!isNavOpen)}
                    >
                        {isNavOpen ? <FaTimes /> : <FaBars />}
                    </button>
                    {isNavOpen && (
                        <ul>
                            <li>
                                <div className='px-5'>Home</div>
                            </li>
                            <li>
                                <div className='px-5'>About</div>
                            </li>
                            {/* Add more navigation links here */}
                        </ul>
                    )}
                </div>

        </>
    )
}

export default HamburgerMenu