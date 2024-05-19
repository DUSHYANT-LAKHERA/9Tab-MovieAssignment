import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from '../../APIStore/Features/auth/authActions';

const MovieDetailsPage = () => {
    const { id } = useParams();
    const dispatch = useDispatch();

    const { movieDetails, status, error } = useSelector((state) => state.movies);

    useEffect(() => {
        dispatch(fetchMovieDetails(id));
    }, [dispatch, id]);

    if (status === 'loading') {
        return <div className="text-center mt-10">Loading...</div>;
    }

    if (status === 'failed') {
        return <div className="text-center mt-10 text-red-500">Error: {error}</div>;
    }

    if (!movieDetails) {
        return null;
    }

    const {
        title,
        vote_average,
        release_date,
        runtime,
        overview,
        credits: { crew, cast },
    } = movieDetails;

    const director = crew.find((member) => member.job === 'Director');
    const castList = cast.slice(0, 5).map((actor) => actor.name).join(', ');

    return (
        <div className="container mx-auto p-4">
            <div className="flex justify-center">
                <img src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`} alt={title} />
            </div>
            <div className="mt-4">
                <h1 className="text-3xl font-bold">{title}</h1>
                <p><strong>Rating:</strong> {vote_average}</p>
                <p><strong>Year of release:</strong> {release_date.split('-')[0]}</p>
                <p><strong>Length:</strong> {Math.floor(runtime / 60)}h {runtime % 60}m</p>
                <p><strong>Director:</strong> {director ? director.name : 'N/A'}</p>
                <p><strong>Cast:</strong> {castList}</p>
                <p><strong>Description:</strong> {overview}</p>
            </div>
        </div>
    );
};

export default MovieDetailsPage;
