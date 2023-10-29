import React, { useEffect, useState } from "react";
import axios from "axios";
import AdBanner from "./AdBanner";
import RecipeCard from "../recipeCardComponents/RecipeCard";
import styles from "./Home.module.css";
import { BiSearchAlt2 } from "react-icons/bi";

const HomeScreen = () => {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");

  const getRecipes = () => {
    axios.get("https://recipes.devmountain.com/recipes").then((res) => {
      setRecipes(res.data);
      console.log(res.data);
    });
  };

  useEffect(() => {
    getRecipes();
  }, []);

  const recipeDisplay = recipes
    .filter((recipe, index) => {
      let title = recipe.recipe_name.toLowerCase();
      let searchParams = search.toLowerCase();
      return title.includes(searchParams);
    })
    .map((recipe, index) => {
      return <RecipeCard recipe={recipe} />;
    });

  return (
    <div>
      <AdBanner />
      <section className={styles.recipe_section}>
        <span className={styles.search_bar}>
          <BiSearchAlt2 size="2em" color="#FFE2D6" />
          <input
            type="text"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search for a Recipe"
          />
        </span>
        <div className={styles.recipe_container}>
          {recipeDisplay ? recipeDisplay : <h2>No recipes found</h2>}
        </div>
      </section>
    </div>
  );
};

export default HomeScreen;
