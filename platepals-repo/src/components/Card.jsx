import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { CgProfile } from "react-icons/cg";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Favourites from "../pages/Favourites";
import PropTypes from "prop-types";

const Card = ({ data, onToggleFavourite }) => {
    const { image, username, recipeTitle, recipeDesc, isFavourite } = data;
    const navigate = useNavigate();

    // Handle clicking on the heart icon to toggle favourite
    const handleHeartClick = (event) => {
        event.stopPropagation(); // Prevent card click from triggering
        console.log("Heart clicked!"); // Add a console log to check if this function fires

        if (onToggleFavourite) {
            console.log("Heart clicked!"); // Add a console log to check if this function fires
            onToggleFavourite(); // Call the function passed from parent

            // Show SweetAlert based on the isFavourite status
            Swal.fire({
                title: "",
                text: isFavourite
                    ? "Removed from favourites list"
                    : "Added to favourites list",
                icon: isFavourite ? "error" : "success",
                confirmButtonText: "Great",
            });
        } else {
            console.error("onToggleFavourite function is not defined.");
        }
    };
    const handleCardClick = () => {
        navigate(`recipes/${recipeTitle}`);
    };

    // const handleHeartClick = (event) => {
    //     event.stopPropagation();
    //     const favourites = JSON.parse(localStorage.getItem("favourites")) || [];
    //     //Store in local storage the state of the heart.

    //     if (!heart) {
    //         favourites.push(recipeTitle);
    //         Swal.fire({
    //             title: "",
    //             text: "Added to favourites list",
    //             icon: "success",
    //             confirmButtonText: "Great",
    //         });
    //     } else {
    //         const index = favourites.indexOf(recipeTitle);
    //         if (index > -1) {
    //             favourites.splice(index, 1);
    //         }
    //         Swal.fire({
    //             title: "",
    //             text: "Removed to favourites list",
    //             icon: "error",
    //         });
    //     }

    //     localStorage.setItem("favourites", JSON.stringify(favourites));
    //     setHeart(!heart);
    // };

    return (
        <div
            className="w-72 bg-white p-4 rounded-md relative mt-10 shadow-lg"
            onClick={handleCardClick}
        >
            <div className="relative">
                <div className="rounded-md overflow-hidden">
                    <img
                        className="w-full h-40 object-cover"
                        src={image}
                        alt=""
                    />

                    <div className="absolute top-2 right-2">
                        <button
                            className={`rounded-full p-2 shadow-md ${
                                isFavourite ? "bg-pink-500" : "bg-white"
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
                                    isFavourite ? "text-white" : "text-pink-500"
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
                    {username}
                </h6>
                <h3 className="text-xl font-semibold">{recipeTitle}</h3>
                <p className="text-gray-600">{recipeDesc}</p>
            </div>
        </div>
    );
};

export default Card;
