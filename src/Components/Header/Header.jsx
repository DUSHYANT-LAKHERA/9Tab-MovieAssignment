import React, { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { fetchMovieList, fetchNowPlaying, fetchPopular, fetchTopRated, fetchUpcoming, searchMovies } from '../../APIStore/Features/auth/authActions';
import { useNavigate } from 'react-router-dom';


const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [selectedSortOption, setSelectedSortOption] = useState('AllMovies');
    const [isSortMenuOpen, setIsSortMenuOpen] = useState(false);
    const sortMenuRef = useRef(null);
    const dispatch = useDispatch();
    const [query, setQuery] = useState('');
    const navigate = useNavigate();

    const handleSortOption = (option) => {
        switch (option) {
            case 'AllMovies':
                dispatch(fetchMovieList({ page: "1" }));

                break;
            case 'nowPlaying':
                dispatch(fetchNowPlaying({ page: "1" }));
                break;

            case 'popular':
                console.log("helloooooo")
                dispatch(fetchPopular({ page: "1" }));
                break;
            case 'topRated':
                console.log("helloooooo")
                dispatch(fetchTopRated({ page: "1" }));
                break;
            case 'upcoming':
                console.log("helloooooo")
                dispatch(fetchUpcoming({ page: "1" }));
                break;
            default:
                break;
        }
        setIsSortMenuOpen(false);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const toggleSortMenu = () => {
        setIsSortMenuOpen(!isSortMenuOpen);
    };

    const handleSelectChange = (e) => {
        setSelectedSortOption(e.target.value);
        handleSortOption(e.target.value);
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



    const handleSearch = () => {
        dispatch(searchMovies(query));
    };
    const handleHome = () => {
        navigate("home")
    };

    return (
        <header className="bg-gray-800 text-white">
            <div className="container mx-auto flex justify-between items-center p-4">
                <div className="text-xl font-bold" onClick={handleHome}>MyApp</div>

                <nav className="hidden md:flex space-x-4">
                    <a href="/" className="hover:text-gray-400">Home</a>
                    <a href="/about" className="hover:text-gray-400">About</a>
                    <button className="hover:text-gray-400">Logout</button>
                </nav>


                <div className="hidden md:flex items-center space-x-4">
                    <input
                        type="text"
                        placeholder="Search..."
                        value={query} onChange={(e) => setQuery(e.target.value)}
                        className="px-2 py-1 rounded text-black"
                    />
                    <button onClick={handleSearch}>Search</button>

                    <div className="relative" ref={sortMenuRef}>
                        <select
                            value={selectedSortOption}
                            onChange={handleSelectChange}
                            className="px-4 py-2 text-sm bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            style={{ color: '#4A5568', backgroundColor: '#F7FAFC' }}
                        >
                            <option value="AllMovies">All Movies</option>
                            <option value="nowPlaying">Now Playing</option>
                            <option value="popular">Popular</option>
                            <option value="topRated">Top Rated</option>
                            <option value="upcoming">Upcoming</option>
                        </select>
                    </div>
                </div>

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

            <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} mobile-menu`}>
                <a href="/" className="block px-4 py-2 text-sm hover:bg-gray-700">Home</a>
                <a href="/about" className="block px-4 py-2 text-sm hover:bg-gray-700">About</a>
                <button className="block px-4 py-2 text-sm hover:bg-gray-700">Logout</button>
                <input
                    type="text"
                    placeholder="Search..."
                    value={query} onChange={(e) => setQuery(e.target.value)}

                    className="block w-full px-4 py-2 text-black"
                />
                <button onClick={handleSearch}>Search</button>

                <div className="relative" ref={sortMenuRef}>
                    <select
                        value={selectedSortOption}
                        onChange={(e) => {
                            setSelectedSortOption(e.target.value);
                            handleSortOption(e.target.value);
                        }}
                        className="block w-full px-4 py-2 text-sm hover:bg-gray-700"
                        style={{ color: '#4A5568', backgroundColor: '#F7FAFC' }}
                    >
                        <option value="AllMovies">All Movies</option>
                        <option value="nowPlaying">Now Playing</option>
                        <option value="popular">Popular</option>
                        <option value="topRated">Top Rated</option>
                        <option value="upcoming">Upcoming</option>
                    </select>
                </div>
            </div>
        </header>
    );
};

export default Header;
