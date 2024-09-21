import React from "react";
import Search from "../components/Search";
import Nav from "../components/Nav";
import { useState } from "react";
import data from "../data/RecipieData.js";

function FilterTags() {
  const [tags, setTags] = useState([]);
  const [value, setValue] = useState("");

  const searchValue = (e) => {
    setValue(e.target.value);
  };

  const addTag = () => {
    if (value !== "") {
      setTags([...tags, value]);
    } else {
      alert("Please enter a tag");
    }
  };
  const handleSearch = () => {
    tags.length == 0
      ? alert("Please add a tag")
      : data.map((e, dataIndex) => {
          tags.map((i, tagsIndex) => {
            if (e.recipeName.includes(i)) {
              console.log(e.recipeName);
            }
          });
        });
  };
  return (
    <div className="w-full h-screen bg-zinc-50 ">
      <Nav />
      <h1 className="text-center mt-2 font-semibold text-2xl">
        Search by adding the special tags
      </h1>
      <div className="flex justify-center mt-10">
        <Search setKey={searchValue} />
        <button
          className="py-2 px-4 bg-blue-400 rounded-md text-white"
          onClick={addTag}
        >
          Add tags
        </button>
      </div>
      <div className="flex  justify-center">
        <div className=" overflow-auto flex  h-1/2 w-1/2 mt-10 flex-wrap">
          {tags.map((tag, index) => {
            return (
              <h1
                key={index}
                className="bg-purple-100 p-2 w-1/4 text-center text-purple-500 rounded-full ml-10 mt-3"
              >
                {tag}
              </h1>
            );
          })}
        </div>
      </div>
      <div className="flex justify-center mt-3">
        <button
          className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-lg"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default FilterTags;
