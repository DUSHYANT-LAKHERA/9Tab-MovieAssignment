import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PostSignUp } from '../../APIStore/Features/auth/authActions';
import { useDispatch } from 'react-redux';

const SignUpPage = () => {
    const [emailSignUp, setEmailSignUp] = useState('eve.holt@reqres.in');
    const [passwordSignUp, setPasswordSignUp] = useState('pistol');

    const nav = useNavigate();
    const dispatch = useDispatch()
    const handleSignUp = async () => {
        dispatch(PostSignUp({ email: emailSignUp, password: passwordSignUp }))
    };

    console.log(emailSignUp, "dkjajn")
    const handleBackToLogin = () => {
        nav("/login");
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="max-w-md w-full py-12 px-6">
                <h2 className="text-3xl font-semibold mb-4">Sign Up</h2>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                            placeholder="Enter your email"
                            value={emailSignUp}
                            onChange={(e) => setEmailSignUp(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">Password</label>
                        <input
                            type="password"
                            id="password"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                            placeholder="Enter your password"
                            value={passwordSignUp}
                            onChange={(e) => setPasswordSignUp(e.target.value)}
                        />
                    </div>
                    <button
                        className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md mb-4 transition duration-300 hover:bg-blue-600"
                        onClick={handleSignUp}
                    >
                        Sign Up
                    </button>
                    <button
                        className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md transition duration-300 hover:bg-blue-600"
                        onClick={handleBackToLogin}
                    >
                        Login
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SignUpPage;
