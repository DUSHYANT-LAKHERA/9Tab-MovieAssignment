
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from '../../APIStore/Features/auth/authActions';

const MovieDetailsPage = () => {
    const { id } = useParams();
    const dispatch = useDispatch();


    const { movieDetailsData } = useSelector((state) => state.auth);
    console.log(movieDetailsData, "movieDetailsData");
    useEffect(() => {
        dispatch(fetchMovieDetails(id));
    }, [id]);

    return (
        <div className="relative bg-gray-800 p-4 rounded-lg shadow-lg text-white">
            {/* Banner */}
            <img
                src={`https://image.tmdb.org/t/p/original${movieDetailsData.backdrop_path}`}
                alt={movieDetailsData?.title}
                className="absolute inset-0 w-full object-cover blur-lg rounded-lg"
            />
            <div className="relative flex flex-col md:flex-row">
                <div className="flex-shrink-0 md:w-1/3 lg:w-1/4">
                    <img
                        src={`https://image.tmdb.org/t/p/original${movieDetailsData.backdrop_path}`}
                        alt={movieDetailsData?.title}
                        className="w-full h-72 object-cover rounded-lg shadow-lg"
                    />
                    <div className="flex flex-col mt-4">
                        <div className="auto actions mb-0"></div>


                        <div className="button flex items-center">
                            <div className="provider mr-2">
                                <img
                                    src="https://media.themoviedb.org/t/p/original/pbpMk2JmcoNnQwx5JGpXngfoWtp.jpg"
                                    width={36}
                                    height={36}
                                    alt="Now Streaming on Netflix"
                                />
                            </div>
                            <div className="text">
                                <span>
                                    <h4 className="text-sm">Now Streaming</h4>
                                    <h3>
                                        <a
                                            className="no_click text-blue-500"
                                            href="/tv/1431-csi-crime-scene-investigation/watch"
                                            title="Now Streaming on Netflix"
                                        >
                                            Watch Now
                                        </a>
                                    </h3>
                                </span>
                            </div>
                        </div>



                    </div>
                </div>
                {/* Movie Details */}
                <div className="md:ml-4 lg:ml-8 md:w-2/3 lg:w-3/4">
                    <h1 className="text-3xl font-bold mt-4 md:mt-0">{movieDetailsData?.title}</h1>
                    <div className="mt-2">
                        <p><strong>Length:</strong> {Math.floor(movieDetailsData?.runtime / 60)}h {movieDetailsData?.runtime % 60}m</p>
                        <p><strong>Director:</strong> {movieDetailsData?.director ? movieDetailsData?.director.name : 'N/A'}</p>
                        <p><strong>Cast:</strong> {movieDetailsData?.castList}</p>
                        <p><strong>Release Date:</strong> {movieDetailsData?.release_date}</p>
                        <p><strong>Rating:</strong> {movieDetailsData?.vote_average}%</p>
                        <p className="mt-2"><strong>Description:</strong> {movieDetailsData?.overview}</p>
                    </div>
                </div>
            </div>

        </div>
    );
};


export default MovieDetailsPage;

