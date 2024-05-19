import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovieList } from '../../APIStore/Features/auth/authActions';

const HomePage = () => {
    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(1);

    const { searchResults, movieList, totalPages, status, error } = useSelector((state) => state.auth);

    useEffect(() => {
        dispatch(fetchMovieList({ page: currentPage }));
    }, [currentPage]);

    const handlePreviousPage = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    };

    const handleNextPage = () => {
        setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
    };

    if (status === 'loading') {
        return <div className="text-center mt-10">Loading...</div>;
    }

    if (status === 'failed') {
        return <div className="text-center mt-10 text-red-500">Error: {error}</div>;
    }
    console.log(searchResults, "searchResults");
    return (
        <div className="container mx-auto p-4">
            <div className="flex flex-wrap justify-center">
                {movieList && movieList.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
            <div className="flex justify-center mt-4">
                <button
                    className="px-4 py-2 mx-2 bg-gray-300 rounded"
                    onClick={handlePreviousPage}
                    disabled={currentPage === 1 || status === 'loading'}
                >
                    Previous
                </button>
                <button
                    className="px-4 py-2 mx-2 bg-gray-300 rounded"
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages || status === 'loading'}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default HomePage;
