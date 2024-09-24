import React from "react";
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://vtdibfeofuaafnblljfr.supabase.co";
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

function Test() {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        getRecipes();
    }, []);

    async function getRecipes() {
        const { data } = await supabase.from("Recipes").select();
        console.log(data);
        setRecipes(data);
    }
    return (
        <ul>
            {recipes.map((recipe, index) => (
                <li key={index}>{recipe.recipeTitle}</li>
            ))}
        </ul>
    );
}

export default Test;
