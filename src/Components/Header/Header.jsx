import React, { useState, useEffect, useRef } from 'react';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isSortMenuOpen, setIsSortMenuOpen] = useState(false);
    const sortMenuRef = useRef(null);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const toggleSortMenu = () => {
        setIsSortMenuOpen(!isSortMenuOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (sortMenuRef.current && !sortMenuRef.current.contains(event.target)) {
                setIsSortMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <header className="bg-gray-800 text-white">
            <div className="container mx-auto flex justify-between items-center p-4">
                {/* Logo/Brand */}
                <div className="text-xl font-bold">MyApp</div>

                {/* Navigation Links */}
                <nav className="hidden md:flex space-x-4">
                    <a href="/" className="hover:text-gray-400">Home</a>
                    <a href="/about" className="hover:text-gray-400">About</a>
                    <button className="hover:text-gray-400">Logout</button>
                </nav>

                {/* Search and Sort */}
                <div className="hidden md:flex items-center space-x-4">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="px-2 py-1 rounded text-black"
                    />
                    <div className="relative" ref={sortMenuRef}>
                        <button onClick={toggleSortMenu} className="hover:text-gray-400">Sort</button>
                        {isSortMenuOpen && (
                            <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded shadow-lg">
                                <button className="block px-4 py-2 hover:bg-gray-200">1</button>
                                <button className="block px-4 py-2 hover:bg-gray-200">2</button>
                                <button className="block px-4 py-2 hover:bg-gray-200">3</button>
                            </div>
                        )}
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center">
                    <button onClick={toggleMobileMenu} className="mobile-menu-button">
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7"
                            ></path>
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} mobile-menu`}>
                <a href="/" className="block px-4 py-2 text-sm hover:bg-gray-700">Home</a>
                <a href="/about" className="block px-4 py-2 text-sm hover:bg-gray-700">About</a>
                <button className="block px-4 py-2 text-sm hover:bg-gray-700">Logout</button>
                <input
                    type="text"
                    placeholder="Search..."
                    className="block w-full px-4 py-2 text-black"
                />
                <div className="relative" ref={sortMenuRef}>
                    <button onClick={toggleSortMenu} className="block w-full px-4 py-2 text-sm hover:bg-gray-700">Sort</button>
                    {isSortMenuOpen && (
                        <div className="absolute left-0 mt-2 w-full bg-white text-black rounded shadow-lg">
                            <button className="block px-4 py-2 hover:bg-gray-200">1</button>
                            <button className="block px-4 py-2 hover:bg-gray-200">2</button>
                            <button className="block px-4 py-2 hover:bg-gray-200">3</button>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
