
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const MovieCard = ({ movie }) => {
    const [isHovered, setIsHovered] = useState(false);

    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate(`/movie/${movie.id}`);
    };

    return (
        <div
            className={`max-w-sm rounded overflow-hidden shadow-lg m-4 ${isHovered ? 'transform hover:scale-105 transition duration-300 ease-in-out' : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <img className="w-full" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{movie.title}</div>
                <p className="text-gray-700 text-base">Vote Average: {movie.vote_average}</p>
                <p className="text-gray-700 text-base">Adult: {movie.adult ? "Yes" : "No"}</p>
            </div>
            <div className="px-6 py-4">
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={handleButtonClick}
                >
                    Details....
                </button>
            </div>
        </div>
    );
};

export default MovieCard;
