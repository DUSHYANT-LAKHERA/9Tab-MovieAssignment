import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";

const Layout = React.lazy(() => import("./Components/Layout"));

const RoutingPage = () => {


    return (
        <div>

            <Routes>

                <Route path="/" element={<Layout />} >
                    <Route path="Home" element={<HomePage />} />

                </Route>

            </Routes>

        </div>
    );
};

export default RoutingPage;
