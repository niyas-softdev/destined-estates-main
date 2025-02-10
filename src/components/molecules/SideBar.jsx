'use client';

import classNames from 'classnames';
import headerNavLinks from '../../content/headerNavLinks';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

export default function Sidebar() {
  const [navShow, setNavShow] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState({});
  const [scrolling, setScrolling] = useState(false);

  const pathName = usePathname();

  const toggleDropdown = (title) => {
    setOpenDropdowns((prevState) => ({
      ...prevState,
      [title]: !prevState[title], // Toggle the dropdown state
    }));
  };

  const variants = {
    enter: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: '100%' },
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 150);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = navShow ? 'hidden' : 'auto';
  }, [navShow]);

  return (
    <div className="xl:hidden">
      <button
        type="button"
        className="ml-2 mr-2 h-8 w-8 rounded"
        aria-label="Toggle Menu"
        onClick={() => setNavShow(!navShow)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className={classNames(
            'transition-colors duration-300',
            { 'text-black': scrolling },
            { 'text-white': !scrolling }
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
            initial="exit"
            animate="enter"
            exit="exit"
            variants={variants}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="fixed inset-0 z-50 bg-black opacity-95 overflow-y-scroll"
          >
            <header className="flex justify-between py-4 px-5 w-full fixed top-0 left-0 bg-gray-900 shadow-lg">
              <Link href="/" aria-label="Destined Estates">
                <img src="/static/Logo_1.png" alt="LOGO" width={200} />
              </Link>
              <button
                type="button"
                className="h-8 w-8 text-white"
                onClick={() => setNavShow(!navShow)}
                aria-label="Close Menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="transition-transform duration-300 transform hover:rotate-90"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </header>

            <nav className="mt-16">
              <ul className="flex flex-col items-center space-y-6 px-6 text-white">
                <li>
                  <Link
                    href="/"
                    onClick={() => setNavShow(false)}
                    className={classNames(
                      'text-2xl font-bold uppercase hover:underline',
                      { 'underline': pathName === '/' }
                    )}
                  >
                    Home
                  </Link>
                </li>
                {headerNavLinks.map(({ title, href, links }) => (
                  <li key={title} className="w-full">
                    {links.length === 0 ? (
                      <Link
                        href={href}
                        onClick={() => setNavShow(false)}
                        className={classNames(
                          'block py-4 px-2 text-lg font-semibold text-center hover:bg-gray-800',
                          { 'underline': pathName.includes(href) }
                        )}
                      >
                        {title}
                      </Link>
                    ) : (
                      <>
                        <button
                          onClick={() => toggleDropdown(title)}
                          className="w-full text-left py-4 px-2 flex items-center justify-between"
                        >
                          <span className="text-lg font-semibold">{title}</span>
                          <IoIosArrowDown
                            className={classNames('transition-transform', {
                              'rotate-180': openDropdowns[title],
                            })}
                          />
                        </button>
                        <div
                          className={classNames(
                            'overflow-hidden transition-all',
                            { 'max-h-screen': openDropdowns[title] },
                            { 'max-h-0': !openDropdowns[title] }
                          )}
                        >
                          {links.map(({ href, title }) => (
                            <Link
                              key={title}
                              href={href}
                              className="block py-2 pl-8 text-gray-400 hover:text-gray-200"
                            >
                              {title}
                            </Link>
                          ))}
                        </div>
                      </>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
