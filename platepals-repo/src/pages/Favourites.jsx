import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import Card from "../components/Card";

import data from "../data/RecipieData.js";

//Currently unfavorite button is not working

function Favourites() {
    const [favouriteRecipes, setFavouriteRecipes] = useState([]);

    useEffect(() => {
        const favourites = JSON.parse(localStorage.getItem("favourites")) || [];
        console.log(favourites);

        const filteredData = data.filter((recipe) => {
            return favourites.includes(recipe.recipeName);
        });
        setFavouriteRecipes(filteredData);
    }, []);

    return (
        <div>
            <div className="w-full h-screen">
                <Nav />
                <div className="flex p-5">
                    <h1 className="text-4xl font-semibold">Favourites</h1>
                    <div className="m-10 flex gap-10">
                        {favouriteRecipes.length > 0 ? (
                            favouriteRecipes.map((item, index) => (
                                <Card
                                    key={index}
                                    data={item}
                                    favourite={true}
                                />
                            ))
                        ) : (
                            <p>No favourite recipes found</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Favourites;
