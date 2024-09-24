import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://vtdibfeofuaafnblljfr.supabase.co";
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
export const supabase = createClient(supabaseUrl, supabaseKey);

// Fetch all recipes
export const fetchAllRecipes = async () => {
    const { data, error } = await supabase.from("Recipes").select("*");

    if (error) {
        console.error("Error fetching all recipes:", error);
        return { error };
    }

    return { data };
};

export const fetchFavouriteRecipes = async () => {
    const { data, error } = await supabase
        .from("Recipes")
        .select("*")
        .eq("isFavourite", true);

    return { data, error };
};

// Toggle the favorite status of a recipe
export const toggleFavourite = async (id, currentFavourite) => {
    const { data, error } = await supabase
        .from("Recipes")
        .update({ isFavourite: !currentFavourite }) // Toggle the status
        .eq("id", id);

    return { data, error };
};
