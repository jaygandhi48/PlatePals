import { useState, useTransition } from "react";
import Nav from "../components/Nav";
import Card from "../components/Card";
import data from "../data/RecipieData.js";

function Home() {
  const [value, setValue] = useState("");
  const [startTransition, ispending] = useTransition();
  //console.log(value);

  const setKey = (e) => {
    setValue(e.target.value);

    const filteredRecipies = data.filter((data) => {
      return data.recipeName
        .toLowerCase()
        .includes(e.target.value.toLowerCase());
    });
    console.log(filteredRecipies);

    setRecipeData(filteredRecipies);
  };

  const [recipeData, setRecipeData] = useState(data);

  return (
    <div>
      <Nav value={setKey} />
      <div className="m-10 flex gap-10">
        {recipeData.map((obj, index) => {
          return (
            <div key={index}>
              <Card data={obj} index={index} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
