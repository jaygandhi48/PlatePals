import React from "react";
import { RxCross1 } from "react-icons/rx";
import { RiImageEditLine } from "react-icons/ri";
import { IconContext } from "react-icons";

import { useForm } from "react-hook-form";

function AddRecipe() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center">
            <div className="m-4 w-full max-w-lg flex-col bg-white p-8 rounded-lg shadow-lg">
                <h1 className="text-3xl font-semibold mb-4">Add Recipe</h1>
                <div className="rounded-md overflow-hidden relative mb-4">
                    <img
                        src="https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt=""
                        className="w-full h-60 object-cover rounded-xl"
                    />
                    <IconContext.Provider
                        value={{
                            color: "black",
                            className: "global-class-name",
                            size: "1.5em",
                        }}
                    >
                        <div className="top-2 right-2 absolute">
                            <button className="rounded-full p-2 shadow-lg bg-white">
                                <RiImageEditLine />
                            </button>
                        </div>
                    </IconContext.Provider>
                </div>

                <form className="flex flex-col gap-4">
                    <div className="border border-zinc-300 p-4 rounded-xl shadow-sm">
                        <label
                            className="block text-sm text-gray-400 mb-2"
                            htmlFor="recipe-name"
                        >
                            Recipe Name
                        </label>
                        <input
                            type="text"
                            placeholder="Name"
                            id="recipe-name"
                            className="w-full px-3 py-2 border border-zinc-200 rounded-lg bg-white text-black"
                        />
                    </div>
                    <div className="border border-zinc-300 p-4 rounded-xl shadow-sm">
                        <label
                            className="block text-sm text-gray-400 mb-2"
                            htmlFor="ingredients"
                        >
                            Ingredients
                        </label>
                        <div className="flex items-center">
                            <input type="checkbox" className="mr-2" />
                            <input
                                type="text"
                                placeholder="Ingredients"
                                id="ingredients"
                                className="flex-grow px-3 py-2 mr-2 border border-zinc-200 rounded-lg bg-white text-black"
                            />
                            <button className="text-red-500">
                                <RxCross1 />
                            </button>
                        </div>
                    </div>
                    <div className="border border-zinc-300 p-4 rounded-xl shadow-sm">
                        <label
                            className="block text-sm text-gray-400 mb-2"
                            htmlFor="method"
                        >
                            Method
                        </label>
                        <textarea
                            placeholder="Step 1: "
                            id="method"
                            className="w-full px-3 py-2 border border-zinc-200 rounded-lg bg-white text-black"
                        />
                    </div>
                    <button
                        type="submit"
                        className="text-white font-semibold px-3 py-2 rounded-lg shadow-lg bg-green-500 hover:bg-green-600 transition duration-300"
                    >
                        Add Recipe
                    </button>
                </form>
            </div>
        </div>
    );
}

export default AddRecipe;
