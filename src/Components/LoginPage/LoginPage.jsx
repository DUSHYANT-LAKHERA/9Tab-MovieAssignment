import React, { useEffect, useState } from 'react';
// import { signIn } from './services/api';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { PostLogin } from '../../APIStore/Features/auth/authActions';
import { useDispatch, useSelector } from 'react-redux';

const LoginPage = () => {
    const [email, setEmail] = useState('eve.holt@reqres.in');
    const [password, setPassword] = useState('cityslicka');
    const { postLoginData } = useSelector((state) => state.auth);


    const dispatch = useDispatch()
    const nav = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(PostLogin({ email: email, password: password }))
    };
    useEffect(() => {
        if (postLoginData?.token) {
            localStorage.setItem("Token", "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZTE4ZDgzOWZhNmZiYzk4NjllZmE3ZDZhZGZhMTAyZSIsInN1YiI6IjY2NDhiMWY4ZmQ0MWQ1M2NhZmYyNDA3YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WadM8kTBoovU9Ib_xngW7QR36tq-q4qB0q1Xorn2DGQ")
            nav("/home")
        }
    }, [postLoginData])


    const handleSignUp = (e) => {
        nav("/signin");
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="max-w-md w-full py-12 px-6">
                <h2 className="text-3xl font-semibold mb-4">Login</h2>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">Password</label>
                        <input
                            type="password"
                            id="password"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button
                        className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md mb-4 transition duration-300 hover:bg-blue-600"
                        onClick={handleLogin}
                    >
                        Login
                    </button>
                    <button
                        className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md transition duration-300 hover:bg-blue-600"
                        onClick={handleSignUp}
                    >
                        Sign Up
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
