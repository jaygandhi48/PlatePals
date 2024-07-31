import { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { RxCross1 } from "react-icons/rx";
import { RiImageEditLine } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Modal from "react-modal";
import { IconContext } from "react-icons";

Modal.setAppElement("#root");

function AddRecipe() {
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm();

    const { fields, append, remove } = useFieldArray({
        control,
        name: "ingredients",
    });

    const [selectedLabels, setSelectedLabels] = useState([]);
    const [labels, setLabels] = useState([
        "Breakfast",
        "Lunch",
        "Dinner",
        "Snack",
        "Dessert",
    ]);
    const [newLabel, setNewLabel] = useState("");
    const [editLabel, setEditLabel] = useState("");
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [labelToEdit, setLabelToEdit] = useState(null);

    const handleLabelChange = (e) => {
        const value = e.target.value;
        if (e.target.checked && !selectedLabels.includes(value)) {
            setSelectedLabels([...selectedLabels, value]);
        } else {
            setSelectedLabels(
                selectedLabels.filter((label) => label !== value)
            );
        }
    };

    const handleNewLabelChange = (e) => {
        setNewLabel(e.target.value);
    };

    const addNewLabel = () => {
        if (newLabel.trim() !== "" && !labels.includes(newLabel)) {
            setLabels([...labels, newLabel]);
            setNewLabel("");
        }
    };

    const openModal = (label) => {
        setLabelToEdit(label);
        setEditLabel(label);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const saveLabel = () => {
        if (
            editLabel &&
            editLabel.trim() !== "" &&
            !labels.includes(editLabel)
        ) {
            setLabels(labels.map((l) => (l === labelToEdit ? editLabel : l)));
            setSelectedLabels(
                selectedLabels.map((l) => (l === labelToEdit ? editLabel : l))
            );
            closeModal();
        }
    };

    const removeLabel = (labelToRemove) => {
        setSelectedLabels(
            selectedLabels.filter((label) => label !== labelToRemove)
        );
    };

    const deleteLabel = (labelToDelete) => {
        setLabels(labels.filter((label) => label !== labelToDelete));
        setSelectedLabels(
            selectedLabels.filter((label) => label !== labelToDelete)
        );
    };

    const onSubmit = (data) => {
        console.log({ ...data, labels: selectedLabels });
    };

    return (
        <div>
            <div className="min-h-screen flex flex-col items-center">
                <div className=" w-[90%] flex-col bg-white p-12">
                    <h1 className="text-3xl font-semibold mb-4">Add Recipe</h1>
                    <div className="rounded-md overflow-hidden relative mb-4 m-10">
                        <img
                            src="https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt=""
                            className="w-full h-60 object-cover"
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
                            {errors.recipeName && (
                                <p className="text-red-400 text-sm mt-1">
                                    {errors.recipeName.message}
                                </p>
                            )}
                        </div>

                        <div className="border border-zinc-300 p-4 rounded-xl shadow-sm">
                            <label
                                className="block text-sm font-medium text-gray-700 mb-2"
                                htmlFor="ingredients"
                            >
                                Ingredients
                            </label>
                            {fields.map((item, index) => (
                                <div
                                    className="flex items-center"
                                    key={item.id}
                                >
                                    <input
                                        type="text"
                                        placeholder="Ingredient"
                                        id="ingredients-checkbox"
                                        className=" m-1 flex-grow px-3 py-2 mr-2 border border-zinc-200 rounded-lg bg-white text-black bg-"
                                        {...register(
                                            `ingredients.${index}.name`,
                                            {
                                                required:
                                                    "Recipe Ingredients are required",
                                            }
                                        )}
                                    />

                                    <button
                                        type="button"
                                        className="text-red-500  hover:text-red-700 bg-zinc-200 rounded-full p-1 shadow-xl"
                                        onClick={() => remove(index)}
                                    >
                                        <RxCross1 />
                                    </button>
                                </div>
                            ))}
                            <button
                                type="button"
                                onClick={() => append({ name: "" })}
                                className="mt-2 px-4 py-1 rounded-lg shadow-lg bg-blue-500 hover:bg-blue-600 text-white font-semibold transition duration-300"
                            >
                                Add Ingredient
                            </button>

                            {errors.ingredients && (
                                <p className="text-red-400 text-sm mt-1">
                                    {errors.ingredients.message}
                                </p>
                            )}
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
                            {errors.method && (
                                <p className="text-red-400 text-sm mt-1">
                                    {errors.method.message}
                                </p>
                            )}
                        </div>

                        <div className="border border-zinc-300 p-4 rounded-xl shadow-sm ">
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Recipe Labels
                            </label>
                            <div className="flex flex-wrap gap-x-3 gap-y-2 ">
                                {labels.map((label) => (
                                    <div
                                        key={label}
                                        className="flex items-center text-sm gap-1 bg-zinc-100 p-1 rounded-lg drop-shadow-md "
                                    >
                                        <input
                                            type="checkbox"
                                            value={label}
                                            onChange={handleLabelChange}
                                            className="mr-1"
                                        />
                                        {label}
                                        <button
                                            type="button"
                                            onClick={() => openModal(label)}
                                            className="ml-1 text-red-500 hover:text-red-700 bg-zinc-300 rounded-full p-1"
                                        >
                                            <FaEdit />
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => deleteLabel(label)}
                                            className="ml-1 text-red-500 hover:text-red-700 bg-zinc-300 rounded-full p-1"
                                        >
                                            <MdDelete />
                                        </button>
                                    </div>
                                ))}
                            </div>
                            <div className="flex mt-4">
                                <input
                                    type="text"
                                    value={newLabel}
                                    onChange={handleNewLabelChange}
                                    placeholder="Add Label"
                                    className="w-full px-3 py-2 border text-nowrap border-zinc-200 rounded-lg bg-white text-black"
                                />
                                <button
                                    type="button"
                                    onClick={addNewLabel}
                                    className="ml-2 px-4 py-1 text-nowrap rounded-lg shadow-lg bg-blue-500 hover:bg-blue-600 text-white font-semibold transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    Add Label
                                </button>
                            </div>
                            <div className="mt-3 flex flex-wrap gap-2">
                                {selectedLabels.map((label) => (
                                    <div
                                        key={label}
                                        className="flex items-center gap-1 bg-green-100 p-1 rounded-lg drop-shadow-md "
                                    >
                                        <span>{label}</span>
                                        <button
                                            type="button"
                                            className="ml-2 text-red-500 hover:text-red-700"
                                            onClick={() => removeLabel(label)}
                                        >
                                            <MdDelete />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="text-white font-semibold px-3 py-2 rounded-lg shadow-lg bg-blue-500 hover:bg-blue-600 transition duration-300"
                        >
                            Add Recipe
                        </button>
                    </form>

                    <Modal
                        isOpen={modalIsOpen}
                        onRequestClose={closeModal}
                        contentLabel="Edit Label"
                        className="bg-white rounded-lg shadow-lg p-8 max-w-md mx-auto mt-20"
                    >
                        <h2 className="text-2xl font-semibold mb-4">
                            Edit Label
                        </h2>
                        <input
                            type="text"
                            value={editLabel}
                            onChange={(e) => setEditLabel(e.target.value)}
                            className="w-full px-3 py-2 border border-zinc-200 rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                        <div className="flex justify-between mt-4">
                            <button
                                type="button"
                                onClick={saveLabel}
                                className="px-4 py-2 rounded-lg shadow-lg bg-green-500 hover:bg-green-600 text-white font-semibold transition duration-300"
                            >
                                Save
                            </button>
                            <button
                                type="button"
                                onClick={closeModal}
                                className="px-4 py-2 rounded-lg shadow-lg bg-gray-500 hover:bg-gray-600 text-white font-semibold transition duration-300"
                            >
                                Cancel
                            </button>
                        </div>
                    </Modal>
                </div>
            </div>
        </div>
    );
}

export default AddRecipe;
