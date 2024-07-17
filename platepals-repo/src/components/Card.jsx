import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";

const Card = () => {
    const [heart, setHeart] = useState(false);
    const handleHeartClick = () => {
        setHeart(!heart);
    };
    return (
        <div className="w-72 bg-white p-4 rounded-md relative mt-10 shadow-lg">
            <div className="relative">
                <div className="rounded-md overflow-hidden">
                    <img
                        className="w-full h-40 object-cover"
                        src="https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt=""
                    />

                    <div className="absolute top-2 right-2">
                        <button
                            className={`rounded-full p-2 shadow-md ${
                                heart ? "bg-pink-500" : "bg-white"
                            }`}
                            onClick={handleHeartClick}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className={`w-5 h-5 ${
                                    heart ? "text-white" : "text-pink-500"
                                }`}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className="mt-4 text-left">
                <h6 className="text-sm font-semibold flex gap-2">
                    <CgProfile />
                    Melvin Robson
                </h6>
                <h3 className="text-xl font-semibold">Avocado Salsa</h3>
                <p className="text-gray-600">
                    In a few steps, you'll be able to cook a delicious Avocado
                    Salsa. It's easy and simple, enjoy!
                </p>
            </div>
        </div>
    );
};

export default Card;
