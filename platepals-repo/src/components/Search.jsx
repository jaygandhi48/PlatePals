/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
function Search({ setKey }) {
    return (
        <div>
            <input
                type="text"
                placeholder="Search recipie"
                className="p-2 border box-border  w-[300px] border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 text-sm"
                onKeyUp={setKey}
            />
        </div>
    );
}

export default Search;
