import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailBanner from "./DetailBanner";
import axios from "axios";
import styles from "./Details.module.css";

const DetailScreen = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState({});
  console.log(recipe);

  useEffect(() => {
    axios.get(`https://recipes.devmountain.com/recipes/${id}`).then((res) => {
      setRecipe(res.data);
    });
  }, []);

  return (
    <section>
      <DetailBanner image={recipe.image_url} title={recipe.recipe_name} />
      <div className={styles.recipe_container}>
        <div className={styles.ingredients_container}>
          <h2>Recipe</h2>
          <h4>Prep Time: {recipe.prep_time}</h4>
          <h4>Cook Time: {recipe.cook_time}</h4>
          <h4>Serves: {recipe.serves}</h4>
          <br />
          <h2>Ingredients</h2>
          {recipe.ingredients &&
            recipe.ingredients.map((ingr, index) => {
              return (
                <h4>
                  {ingr.quantity} {ingr.ingredient}
                </h4>
              );
            })}
        </div>

        <div className={styles.instructions_container}>
          <h2>Instructions</h2>
          <p style={{ whiteSpace: "pre-wrap" }}>
            {recipe.instructions && JSON.parse(recipe.instructions)}
          </p>
        </div>
      </div>
    </section>
  );
};

export default DetailScreen;
