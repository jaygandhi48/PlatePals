import { useEffect, useState, useTransition } from "react";
import Nav from "../components/Nav";
import Card from "../components/Card";
import { fetchAllRecipes, toggleFavourite } from "../data/supabaseClient";

function Home() {
    const [recipeData, setRecipeData] = useState([]);
    const [value, setValue] = useState("");
    const [startTransition, ispending] = useTransition();
    //console.log(value);

    useEffect(() => {
        async function loadData() {
            const { data, error } = await fetchAllRecipes();
            if (!error) {
                setRecipeData(data);
            }
        }
        loadData();
    }, []);

    const handleToggleFavourite = async (id, isFavourite) => {
        const { error } = await toggleFavourite(id, isFavourite);

        if (error) {
            console.error("Error toggling favourite:", error);
        } else {
            setRecipeData((prevRecipes) =>
                prevRecipes.map((recipe) =>
                    recipe.id === id
                        ? { ...recipe, isFavourite: !isFavourite }
                        : recipe
                )
            );
        }
    };

    const setKey = (e) => {
        setValue(e.target.value);

        const filteredRecipies = recipeData.filter((recipe) => {
            return recipe.recipeName
                .toLowerCase()
                .includes(e.target.value.toLowerCase());
        });
        console.log(filteredRecipies);

        setRecipeData(filteredRecipies);
    };

    return (
        <div>
            <Nav value={setKey} />
            <div className="m-10 flex gap-10">
                {recipeData.map((recipe) => {
                    return (
                        <div key={recipe.id}>
                            <Card
                                data={recipe}
                                onToggleFavourite={() =>
                                    handleToggleFavourite(
                                        recipe.id,
                                        recipe.isFavourite
                                    )
                                }
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Home;
