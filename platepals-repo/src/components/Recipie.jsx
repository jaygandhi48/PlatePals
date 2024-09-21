import React from "react";
import Nav from "../components/Nav";

function Recipe() {
  return (
    <div className="w-full h-screen flex justify-center bg-red-50 p-5 ">
      <div className="w-full max-w-2xl  bg-white rounded-lg shadow-lg flex flex-col overflow-hidden ">
        <div className="relative">
          <img
            src="https://plus.unsplash.com/premium_photo-1694141253763-209b4c8f8ace?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Dish"
            className="w-full h-64 object-cover"
          />
          <div className="absolute top-2 left-2">
            <span className="bg-purple-500 text-white text-sm px-2 py-1 rounded-full">
              Hard
            </span>
          </div>
          <div className="absolute top-2 right-2">
            <button className="bg-white text-red-500 p-1 rounded-full shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="p-5 relative flex-grow overflow-y-auto no-scrollbar">
          <div className="flex items-center">
            <img
              src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D"
              alt="Profile"
              className="h-10 w-10 rounded-full object-cover"
            />
            <span className="ml-3 text-gray-700 font-medium">
              Joanna Harmon
            </span>
          </div>

          <h1 className="mt-5 text-2xl font-bold text-gray-900">
            Macaroni and Cheese
          </h1>

          <div className="flex items-center mt-2">
            <span className="text-yellow-500">⭐ 4.5 (2+)</span>
            <span className="ml-2 text-blue-500 underline cursor-pointer">
              See reviews
            </span>
          </div>

          <h2 className="mt-5 text-xl font-semibold text-gray-800">
            Ingredients
          </h2>
          <ul className="mt-3 space-y-2">
            <li className="flex items-center">
              <input type="checkbox" className="accent-purple-500" />
              <span className="ml-2">box elbow macaroni</span>
            </li>
            <li className="flex items-center">
              <input type="checkbox" className="accent-purple-500" />
              <span className="ml-2">cup butter</span>
            </li>
            <li className="flex items-center">
              <input type="checkbox" className="accent-purple-500" />
              <span className="ml-2">cup all-purpose flour</span>
            </li>
            <li className="flex items-center">
              <input type="checkbox" className="accent-purple-500" />
              <span className="ml-2">teaspoon salt</span>
            </li>
            <li className="flex items-center">
              <input type="checkbox" className="accent-purple-500" />
              <span className="ml-2">ground black pepper to taste</span>
            </li>
          </ul>

          <h2 className="mt-5 text-xl font-semibold text-gray-800">Method</h2>
          <div className="mt-2 mb-2">
            <h3 className="text-lg font-semibold text-gray-900">Step 1</h3>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua labore
              et dolore magna aliqua.
            </p>
          </div>

          <div className="mt-2 mb-2">
            <h3 className="text-lg font-semibold text-gray-900">Step 2</h3>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua labore
              et dolore magna aliqua.
            </p>
          </div>
          <div className="mt-2 mb-2">
            <h3 className="text-lg font-semibold text-gray-900">Step 2</h3>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua labore
              et dolore magna aliqua.
            </p>
          </div>
          <div className="mt-2 mb-2">
            <h3 className="text-lg font-semibold text-gray-900">Step 2</h3>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua labore
              et dolore magna aliqua.
            </p>
          </div>
          <button className="p-2 bg-black text-white w-full rounded-md mt-2">
            Add to My Recipes
          </button>
        </div>
      </div>
    </div>
  );
}

export default Recipe;
