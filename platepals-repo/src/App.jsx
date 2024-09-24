import Home from "./pages/Home";
import Footer from "./components/Footer";
import RecipiePage from "./pages/RecipiePage";
import Nav from "./components/Nav";
import Loading from "./components/Loading";
import Favourites from "./pages/Favourites";
import FilterTags from "./pages/FilterTags";
import { Routes, Route } from "react-router-dom";
import Test from "./components/Test";
//Remove the impports after routes are implemented

function App() {
    return (
        <>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    {/* Ideally dont use name but change it later*/}
                    <Route
                        path="/recipies/:recipieName"
                        element={<RecipiePage />}
                    ></Route>
                    <Route path="/search" element={<FilterTags />}></Route>
                    <Route path="/profile" element={<Home />}></Route>
                    <Route path="/favourites" element={<Favourites />}></Route>
                    <Route path="/test" element={<Test />}></Route>
                </Routes>
            </div>
        </>
    );
}

export default App;
