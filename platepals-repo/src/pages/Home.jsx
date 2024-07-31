import { useState } from "react";
import Nav from "../components/Nav";
import Card from "../components/Card";

import data from "../utils/data";
import { RiAddLargeLine } from "react-icons/ri";
import { IconContext } from "react-icons";
import AddRecipe from "./AddRecipeV2";

function Home() {
    const [recipeData, setRecipeData] = useState(data);

    return (
        <div>
            <Nav />
            {/* <div className="m-10">
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
            </div> */}
            <AddRecipe />
        </div>
    );
}

export default Home;
