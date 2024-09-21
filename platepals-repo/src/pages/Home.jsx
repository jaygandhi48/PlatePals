import { useState, useTransition } from "react";
import Nav from "../components/Nav";
import Card from "../components/Card";

function Home() {
  const [value, setValue] = useState("");
  const [startTransition, ispending] = useTransition();
  console.log(value);

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

  const data = [
    {
      image:
        "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      profile: "Melvin Robson",
      recipeName: "Avocado Salsa",
      recipeDescription:
        " In a few steps, you'll be able to cook a delicious AvocadoSalsa. It's easy and simple, enjoy!",
      tags: ["Vegan", "Vegetarian"],
    },
    {
      image:
        "https://images.unsplash.com/photo-1498579485796-98be3abc076e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      profile: "Betty White",
      recipeName: "Burger",
      recipeDescription: "Juicy Burger",
      tags: ["High Protein", "Gluten Free"],
    },
    {
      image:
        "https://images.unsplash.com/photo-1666304752980-678d5c35c911?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      profile: "Ques Freyer",
      recipeName: "Fries",
      recipeDescription: "Fries with a twist",
      tags: [],
    },
  ];

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
