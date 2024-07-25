import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { RiImageEditLine } from "react-icons/ri";
import { IconContext } from "react-icons";
import { useForm } from "react-hook-form";

function AddRecipe() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const [selectedLabel, setSelectedLabel] = useState(" ");
    const [label, setLabel] = useState([
        "Breakfast",
        "Lunch",
        "Dinner",
        "Snack",
        "Dessert",
    ]);
    const [newLabel, setNewLabel] = useState("");

    const handleLabelChange = (e) => {
        setSelectedLabel(e.target.value);
    };

    const handleNewLabelChange = (e) => {
        setNewLabel(e.target.value);
    };

    const addNewLabel = () => {
        if (newLabel.trim() !== "" && !label.includes(newLabel)) {
            setLabel([...label, newLabel]);
            setNewLabel("");
        }
    };

    const onSubmit = (data) => {
        console.log(data);
    };

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

                <form
                    className="flex flex-col gap-4"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <div className="border border-zinc-300 p-4 rounded-xl shadow-sm">
                        <label
                            className="block text-sm font-medium text-gray-700 mb-2"
                            htmlFor="recipe-name"
                        >
                            Recipe Name
                        </label>
                        <input
                            type="text"
                            placeholder="Name"
                            id="recipe-name"
                            className="w-full px-3 py-2 border border-zinc-200 rounded-lg bg-white text-black"
                            {...register("recipeName", {
                                required: "Recipe Name is required",
                            })}
                        />

                        <div className="mt-2">
                            {errors.recipeName && (
                                <p className="text-red-400 text-sm mt-1">
                                    {errors.recipeName.message}
                                </p>
                            )}
                        </div>
                    </div>
                    <div className="border border-zinc-300 p-4 rounded-xl shadow-sm">
                        <label
                            className="block text-sm font-medium text-gray-700 mb-2"
                            htmlFor="ingredients"
                        >
                            Ingredients
                        </label>
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="ingredients-checkbox"
                                className="mr-2"
                                {...register("ingredients-checkbox", {})}
                            />
                            <input
                                type="text"
                                placeholder="ingredients"
                                id="ingredients"
                                className="flex-grow px-3 py-2 mr-2 border border-zinc-200 rounded-lg bg-white text-black"
                                {...register("ingredients", {
                                    required: "Recipe Ingredients are required",
                                })}
                            />

                            <button className="text-red-500">
                                <RxCross1 />
                            </button>
                            <div className="ml-2">
                                {errors.ingredients && (
                                    <p className="text-red-400 text-sm mt-1">
                                        {errors.ingredients.message}
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="border border-zinc-300 p-4 rounded-xl shadow-sm">
                        <label
                            className="block text-sm font-medium text-gray-700 mb-2"
                            htmlFor="method"
                        >
                            Method
                        </label>
                        <textarea
                            placeholder="Step 1: "
                            id="method"
                            className="w-full px-3 py-2 border border-zinc-200 rounded-lg bg-white text-black"
                            {...register("method", {
                                required: "Recipe Method is required",
                            })}
                        />
                        <div className="mt-2">
                            {errors.method && (
                                <p className="text-red-400 text-sm mt-1">
                                    {errors.method.message}
                                </p>
                            )}
                        </div>
                    </div>

                    <div className="border border-zinc-300 p-4 rounded-xl shadow-sm ">
                        <label
                            className="block text-sm font-medium text-gray-700 mb-2"
                            htmlFor="label"
                        >
                            Recipe Label
                        </label>
                        <select
                            id="label"
                            // value={selectedLabel}
                            onChange={handleLabelChange}
                            className="w-full px-3 py-2 border border-zinc-200 rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            {...register("label", {})}
                        >
                            {label.map((label) => (
                                <option key={label} value={label}>
                                    {label}
                                </option>
                            ))}
                        </select>
                        <div className="mt-4 flex items-center">
                            <input
                                id="newLabel"
                                type="text"
                                value={newLabel}
                                onChange={handleNewLabelChange}
                                placeholder="Add new label"
                                className="flex-grow px-3 py-2 border border-zinc-200 rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                {...register("newLabel")}
                            />

                            <button
                                type="button"
                                onClick={addNewLabel}
                                className="ml-2 px-4 py-2 rounded-lg shadow-lg bg-blue-500 hover:bg-blue-600 text-white font-semibold transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                Add Label
                            </button>
                        </div>
                        <div className="ml-2">
                            {errors.label && (
                                <p className="text-red-400 text-sm mt-1">
                                    {errors.label.message}
                                </p>
                            )}
                        </div>
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
