// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
// import Recipe from "./components/Recipe";
import "./App.css";

const App = () => {
  return (
    // <Router>
    //   <Routes>
    //     <Route exact path="/" element={<Home />} />
    //     <Route path="/recipe/:recipeId" element={<Recipe />} />
    //   </Routes>
    // </Router>
    <Home />
  );
};

export default App;
