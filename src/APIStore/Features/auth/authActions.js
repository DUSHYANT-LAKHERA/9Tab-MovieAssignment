import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const baseURL = process.env.REACT_APP_API_URL;

const apiKey = process.env.REACT_APP_API_KEY;
const NewUrl = process.env.REACT_APP_LOGIN_SIGNUP_URL;

axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem("Token")}`;

export const PostLogin = createAsyncThunk('auth/PostLogin', async (data, { rejectWithValue }) => {
    try {
        const PostLoginresponse = await axios.post(`${NewUrl}/login`, data, {
            validateStatus: false
        });
        if (PostLoginresponse?.data?.token) {
            localStorage.setItem("Token", "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZTE4ZDgzOWZhNmZiYzk4NjllZmE3ZDZhZGZhMTAyZSIsInN1YiI6IjY2NDhiMWY4ZmQ0MWQ1M2NhZmYyNDA3YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WadM8kTBoovU9Ib_xngW7QR36tq-q4qB0q1Xorn2DGQ")
        }
        if (PostLoginresponse.status !== 200) {
            throw new Error('Login Error');

        }

        return PostLoginresponse.data;
    } catch (err) {
        return rejectWithValue(err);
    }
});
export const PostSignUp = createAsyncThunk('auth/PostSignUp', async (data, { rejectWithValue }) => {
    try {
        const PostSignUpresponse = await axios.post(`${NewUrl}/register`, data, {
            validateStatus: false
        });

        if (PostSignUpresponse.status !== 200) {
            throw new Error('SignUp Error');
        }

        return PostSignUpresponse.data;
    } catch (err) {
        return rejectWithValue(err);
    }
});
export const fetchMovieList = createAsyncThunk('auth/fetchMovieList', async ({ page }, { rejectWithValue }) => {
    try {
        const response = await axios.get(`${baseURL}discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}`, {
            validateStatus: false
        });

        if (response.status !== 200) {
            throw new Error('Failed to fetch movies');
        }

        return response.data;
    } catch (err) {
        return rejectWithValue(err);
    }
});

export const fetchNowPlaying = createAsyncThunk('auth/fetchNowPlaying', async ({ page }, { rejectWithValue }) => {
    try {
        console.log("response");
        const response = await axios.get(`${baseURL}movie/now_playing?language=en-US&page=${page}`);
        return response.data;
    } catch (err) {
        return rejectWithValue(err);
    }
});

export const fetchTopRated = createAsyncThunk('auth/fetchTopRated', async ({ page }, { rejectWithValue }) => {
    try {
        const response = await axios.get(`${baseURL}movie/top_rated?language=en-US&page=${page}`);
        return response.data;
    } catch (err) {
        return rejectWithValue(err);
    }
});

export const fetchUpcoming = createAsyncThunk('auth/fetchUpcoming', async ({ page }, { rejectWithValue }) => {
    try {
        const response = await axios.get(`${baseURL}movie/upcoming?language=en-US&page=${page}`);
        return response.data;
    } catch (err) {
        return rejectWithValue(err);
    }
});
export const fetchPopular = createAsyncThunk('auth/fetchPopular', async ({ page }, { rejectWithValue }) => {
    try {
        const response = await axios.get(`${baseURL}movie/popular?language=en-US&page=${page}`);
        return response.data;
    } catch (err) {
        return rejectWithValue(err);
    }
});

export const searchMovies = createAsyncThunk('movies/searchMovies', async (searchQuery) => {
    try {
        const response = await axios.get(`${baseURL}search/movie`, {
            params: {
                api_key: apiKey,
                query: searchQuery,
            }
        });
        return response.data;
    } catch (error) {
        throw error;
    }
});
export const fetchMovieDetails = createAsyncThunk('movies/fetchMovieDetails', async (movieId) => {
    const response = await axios.get(`${baseURL}/movie/${movieId}`, {
        params: {
            api_key: apiKey,
        },
    });
    return response.data;
});