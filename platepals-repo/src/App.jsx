import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
    return (
        <>
            <h1>Home Page</h1>
            <div>
                <Card />
            </div>
        </>
    );
}

export default App;
