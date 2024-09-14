import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import SearchForm from "./components/SearchForm";
import RecipeList from "./components/RecipeList";
const App = () => {
  const [recipes, setRecipes] = useState([]);
  const handleSearch = async (query) => {
    const id = "66b337a0";
    const api_key = "d38305a44bebc61bcb4c4823c74ae4af";
    try {
      const response = await axios.get(
        `https://api.edamam.com/search?q=${query}&app_id=${id}&app_key=${api_key}`
      );
      console.log("Response", response);
      setRecipes(response.data.hits);
    } catch (error) {
      console.log("Error", error);
    }
  };
  return (
    <div className="App">
      <SearchForm onSearch={handleSearch} />
      <RecipeList recipes={recipes} />
    </div>
  );
};

export default App;
