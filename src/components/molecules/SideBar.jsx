'use client';

import classNames from 'classnames';
import headerNavLinks from '../../content/headerNavLinks';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";

export default function Sidebar() {
    const [navShow, setNavShow] = useState(false);
    const [openDropdowns, setOpenDropdowns] = useState({});
    const [scrolling, setScrolling] = useState(false); // State to track scroll position

    const pathName = usePathname();

    const toggleDropdown = (title) => {
        setOpenDropdowns((prevState) => ({
            ...prevState,
            [title]: !prevState[title], // Toggle the dropdown state
        }));
    };

    const variants = {
        enter: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: '100vw' },
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 150) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        if (navShow) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [navShow]);

    return (
        <div className="xl:hidden items-baseline">
            <button
                type="button"
                className="ml-1 mr-1 h-7 w-7 rounded"
                aria-label="Toggle Menu"
                onClick={() => setNavShow(!navShow)}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className={classNames(
                        { 'text-black': scrolling } // Change color when scrolling
                    )}
                >
                    <path
                        fillRule="evenodd"
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clipRule="evenodd"
                    />
                </svg>
            </button>
            <AnimatePresence>
                {navShow && (
                    <motion.div
                        key="MobileNav"
                        transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
                        initial="exit"
                        animate="enter"
                        exit="exit"
                        variants={variants}
                        className={classNames(
                            'fixed inset-0 z-50 h-full w-full  opacity-95 bg-black overflow-y-scroll'
                        )}
                    >
                        <header
                            className={classNames(
                                "flex justify-between py-5 px-4 w-full fixed top-0 left-0 z-50 transition-all duration-300  bg-gray-100"
                            )}
                        >
                            <Link href="/" aria-label="Destined Estates">
                                <img src={'/static/Logo_1.png'} alt="LOGO" width={300} />
                            </Link>
                            <button
                                type="button"
                                aria-label="toggle modal"
                                className="h-8 w-8 rounded"
                                onClick={() => setNavShow(!navShow)}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className={classNames(
                                        "transition-colors duration-300 text-gray-900 ", // Add transition for smooth color change

                                    )}
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </button>
                        </header>

                        <nav className="absolute top-36 h-full w-full">
                            <div key="Home" className="px-12 py-4">
                                <Link
                                    href="/"
                                    onClick={() => setNavShow(!navShow)}
                                    className={classNames(
                                        'horizontal-underline font-bold tracking-widest  text-2xl text-gray-100',
                                        { 'horizontal-underline-active': pathName === '/' }
                                    )}
                                >
                                    Home
                                </Link>
                            </div>

                            <div className="w-full px-12 py-4">
                                {headerNavLinks.map(({ title, href, links }) => {
                                    const active = href && pathName?.includes(href);

                                    return (
                                        <div key={title} className="relative w-full">
                                            {/* Check if links is empty */}
                                            {links.length === 0 ? (
                                                // Render as a link when there are no child links
                                                <Link
                                                    href={href}
                                                    className={classNames(
                                                        'w-full text-sm flex items-center justify-between py-4',
                                                        {
                                                            'horizontal-underline-active': active,
                                                        }
                                                    )}
                                                >
                                                    <span className="font-semibold tracking-wide text-gray-100">
                                                        {title}
                                                    </span>
                                                </Link>
                                            ) : (
                                                // Render as a dropdown when there are child links
                                                <>
                                                    <button
                                                        onClick={() => toggleDropdown(title)}
                                                        className={classNames(
                                                            'w-full text-sm flex items-center justify-between py-4',
                                                            {
                                                                'horizontal-underline-active': active,
                                                            }
                                                        )}
                                                        aria-label={title}
                                                    >
                                                        <span className="font-semibold tracking-wide text-gray-100">
                                                            {title}
                                                        </span>
                                                        {/* Show arrow only if there are links */}
                                                        {links.length > 0 && (
                                                            <span
                                                                className={`ml-2 transform transition-transform duration-300 text-gray-100 ${openDropdowns[title] ? 'rotate-180' : 'rotate-0'
                                                                    }`}
                                                            >
                                                                <IoIosArrowDown size={20} />
                                                            </span>
                                                        )}
                                                    </button>

                                                    <div
                                                        className={`overflow-hidden transition-all duration-300 ease-in-out ${openDropdowns[title] ? 'max-h-screen' : 'max-h-0'
                                                            }`}
                                                    >
                                                        {links.length > 0 && (
                                                            <div className="w-full">
                                                                {links.map(({ href, title }) => (
                                                                    <Link
                                                                        key={title}
                                                                        href={href}
                                                                        className="block px-4 py-2 text-gray-100"
                                                                    >
                                                                        {title}
                                                                    </Link>
                                                                ))}
                                                            </div>
                                                        )}
                                                    </div>
                                                </>
                                            )}
                                        </div>
                                    );
                                })}

                            </div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
