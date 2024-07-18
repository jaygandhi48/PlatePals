import { useState } from "react";
import Nav from "../components/Nav";
import Card from "../components/Card";
import AddRecipe from "./AddRecipe";
import { RiAddLargeLine } from "react-icons/ri";
import { IconContext } from "react-icons";

function Home() {
    const data = [
        {
            image: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            profile: "Melvin Robson",
            recipeName: "Avocado Salsa",
            recipeDescription:
                " In a few steps, you'll be able to cook a delicious AvocadoSalsa. It's easy and simple, enjoy!",
        },
        {
            image: "https://images.unsplash.com/photo-1498579485796-98be3abc076e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            profile: "Betty White",
            recipeName: "Burger",
            recipeDescription: "Juicy Burger",
        },
        {
            image: "https://images.unsplash.com/photo-1666304752980-678d5c35c911?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            profile: "Ques Freyer",
            recipeName: "Fries",
            recipeDescription: "Fries with a twist",
        },
        {
            image: "https://images.unsplash.com/photo-1666304752980-678d5c35c911?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            profile: "Ques Freyer",
            recipeName: "Fries",
            recipeDescription: "Fries with a twist",
        },
        {
            image: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            profile: "Melvin Robson",
            recipeName: "Avocado Salsa",
            recipeDescription:
                " In a few steps, you'll be able to cook a delicious AvocadoSalsa. It's easy and simple, enjoy!",
        },
        {
            image: "https://images.unsplash.com/photo-1498579485796-98be3abc076e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            profile: "Betty White",
            recipeName: "Burger",
            recipeDescription: "Juicy Burger",
        },
        {
            image: "https://images.unsplash.com/photo-1666304752980-678d5c35c911?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            profile: "Ques Freyer",
            recipeName: "Fries",
            recipeDescription: "Fries with a twist",
        },
        {
            image: "https://images.unsplash.com/photo-1666304752980-678d5c35c911?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            profile: "Ques Freyer",
            recipeName: "Fries",
            recipeDescription: "Fries with a twist",
        },
    ];

    const [recipeData, setRecipeData] = useState(data);

    return (
        <div>
            <Nav />
            <div className="m-10">
                <h1 className="font-semibold text-4xl">Recipes For You</h1>
                <div className="flex gap-10 flex-wrap">
                    {recipeData.map((obj, index) => (
                        <Card key={index} data={obj} />
                    ))}
                </div>

                <button className="py-3 px-3 bg-green-400 rounded-full fixed bottom-24 shadow-lg right-10 hover:bg-green-500 transition duration-300">
                    <IconContext.Provider
                        value={{
                            size: "1.2em",
                            color: "white",
                            className: "hover:cursor-pointer ",
                        }}
                    >
                        <RiAddLargeLine />
                    </IconContext.Provider>
                </button>
            </div>
        </div>
    );
}

export default Home;
