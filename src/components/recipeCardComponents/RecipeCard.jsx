import React from "react";
import { Navigate } from "react-router-dom";
import styles from "./RecipeCard.module.css";
import { useNavigate } from "react-router-dom";

const RecipeCard = ({recipe}) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/recipe/${recipe.recipe_id}`)
  }
  return (
    <div className={styles.recipe_card}>
      <div>
        <div className={styles.recipe_img_container}>
          <img src={recipe.image_url} />
          {/* <img src="https://www.atablefullofjoy.com/wp-content/uploads/2020/02/German-Chocolate-Cake-Recipe-SQUARE.jpg" /> */}
        </div>
        <h3>{recipe.recipe_name}</h3>
        {/* <h3>German Chocolate Cake</h3> */}
      </div>
      <button className={styles.see_more_btn} onClick={handleClick}>See More</button>
    </div>
  );
};

export default RecipeCard;