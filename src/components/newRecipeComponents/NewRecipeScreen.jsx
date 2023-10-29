import React from "react";
import { Formik } from "formik";

const NewRecipeScreen = () => {
  const initialValues = {
    type: '',
    recipeName: '',
    imageURL: '',
    prepTime: '',
    cookTime: '',
    serves: '',
    ingredients: [],
    instructions: '',
  };

  const onSubmit = (values) => console.log(values)

  return (
    <section>
      <h1>Tell us about your Recipe!</h1>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ values, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            
          </form>
        )}
      </Formik>
    </section>
  );
};

export default NewRecipeScreen;
