import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import SingleResult from "./pages/SingleResult";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/page/:id" element={<SingleResult />} />
      </Routes>
    </div>
  );
}

export default App;
