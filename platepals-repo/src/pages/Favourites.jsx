import React from "react";
import Nav from "../components/Nav";
import Card from "../components/Card";

function Favourites() {
    return (
        <div>
            <div className="w-full h-screen  ">
                <Nav />
                <div className="flex p-5">
                    <h1 className="text-4xl font-semibold">Favourites</h1>
                    <Card />
                </div>
            </div>
        </div>
    );
}

export default Favourites;
