import React, { useEffect, useState } from "react";
import { fetchFavouriteRecipes, toggleFavourite } from "../data/supabaseClient"; // Import the functions from supabaseClient.js
import Nav from "../components/Nav";
import Card from "../components/Card";

function Favourites() {
    const [favouriteRecipes, setFavouriteRecipes] = useState([]);

    useEffect(() => {
        fetchFavorites();
    }, []);

    // Fetch all favourite recipes from Supabase
    async function fetchFavorites() {
        const { data, error } = await fetchFavouriteRecipes();
        if (error) {
            console.error("Error fetching favourite recipes:", error.message);
        } else {
            setFavouriteRecipes(data); // Set the favourite recipes in state
        }
    }

    const handleToggleFavourite = async (id, isFavourite) => {
        const { error } = await toggleFavourite(id, isFavourite);

        if (error) {
            console.error("Error toggling favourite:", error);
        } else {
            // Log to check if state updates correctly
            console.log("Favourite status toggled for:", id);

            // Update state directly to reflect the new status
            setFavouriteRecipes((prevRecipes) =>
                prevRecipes.map((recipe) =>
                    recipe.id === id
                        ? { ...recipe, isFavourite: !isFavourite }
                        : recipe
                )
            );
        }
    };

    return (
        <div>
            <div className="w-full h-screen">
                <Nav />
                <div className="flex p-5">
                    <h1 className="text-4xl font-semibold">Favourites</h1>
                    <div className="m-10 flex gap-10">
                        {favouriteRecipes.map((item) => (
                            <Card
                                key={item.id}
                                data={item}
                                onToggleFavourite={() =>
                                    handleToggleFavourite(
                                        item.id,
                                        item.isFavourite
                                    )
                                }
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Favourites;
