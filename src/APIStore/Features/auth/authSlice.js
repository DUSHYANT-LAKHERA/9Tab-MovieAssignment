
import { createSlice } from "@reduxjs/toolkit";
import { PostLogin, PostSignUp, fetchMovieList, fetchNowPlaying, fetchTopRated, fetchUpcoming, fetchPopular, searchMovies, fetchMovieDetails } from "./authActions";

const movieSlice = createSlice({
    name: 'movies',
    initialState: {

        postLoginData: null,
        postLoginDataLoading: false,
        postLoginDataError: null,

        PostSignUpData: null,
        PostSignUpDataLoading: false,
        PostSignUpDataError: null,

        movieList: [],
        totalPages: 1,
        status: 'idle',
        error: null,

        searchResults: [],

        movieDetailsData: [],
        movieDetailsDatastatus: 'idle',
        movieDetailsDataerror: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(PostLogin.pending, (state) => {
            state.postLoginData = null;
            state.postLoginDataLoading = true;
            state.postLoginDataError = null;
        }).addCase(PostLogin.rejected, (state, action) => {
            state.postLoginData = null;
            state.postLoginDataLoading = false;
            state.postLoginDataError = action.error.message;
        }).addCase(PostLogin.fulfilled, (state, action) => {
            state.postLoginData = action.payload;
            state.postLoginDataLoading = false;
            state.postLoginDataError = null;
        })
            .addCase(PostSignUp.pending, (state) => {
                state.PostSignUpData = null;
                state.PostSignUpDataLoading = true;
                state.PostSignUpDataError = null;
            }).addCase(PostSignUp.rejected, (state, action) => {
                state.PostSignUpData = null;
                state.PostSignUpDataLoading = false;
                state.PostSignUpDataError = action.error.message;
            }).addCase(PostSignUp.fulfilled, (state, action) => {
                state.PostSignUpData = action.payload;
                state.PostSignUpDataLoading = false;
                state.PostSignUpDataError = null;
            })
            .addCase(fetchMovieList.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchMovieList.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.movieList = action.payload.results;
                state.totalPages = action.payload.total_pages;
            })
            .addCase(fetchMovieList.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            })
            .addCase(fetchNowPlaying.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchNowPlaying.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.movieList = action.payload.results;
                state.totalPages = action.payload.total_pages;
            })
            .addCase(fetchNowPlaying.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            })
            .addCase(fetchTopRated.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchTopRated.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.movieList = action.payload.results;
                state.totalPages = action.payload.total_pages;
            })
            .addCase(fetchTopRated.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            })
            .addCase(fetchUpcoming.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchUpcoming.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.movieList = action.payload.results;
                state.totalPages = action.payload.total_pages;
            })
            .addCase(fetchUpcoming.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            })
            .addCase(fetchPopular.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchPopular.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.movieList = action.payload.results;
                state.totalPages = action.payload.total_pages;
            })
            .addCase(fetchPopular.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            })
            .addCase(searchMovies.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(searchMovies.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.searchResults = action.payload.results;
            })
            .addCase(searchMovies.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(fetchMovieDetails.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchMovieDetails.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.movieDetailsData = action.payload;
            })
            .addCase(fetchMovieDetails.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error;
            });
    },
});

export default movieSlice.reducer;
