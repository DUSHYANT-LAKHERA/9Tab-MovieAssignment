import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";
import LoginPage from "./Components/LoginPage/LoginPage";
import SignUpPage from "./Components/SignUpPage/SignUpPage";
import MovieDetailsPage from "./Components/DetailsPage/MovieDetailsPage";

const Layout = React.lazy(() => import("./Components/Layout"));

const RoutingPage = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/" element={<Navigate to="/login" />} />
                    <Route path="home" element={<HomePage />} />
                    <Route path="login" element={<LoginPage />} />
                    <Route path="/movie/:id" element={<MovieDetailsPage />} />
                    <Route path="signin" element={<SignUpPage />} />
                </Route>
            </Routes>
        </div>
    );
};

export default RoutingPage;
