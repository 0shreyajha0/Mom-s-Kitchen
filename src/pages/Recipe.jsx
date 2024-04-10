import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { RecipeDetails } from "../components/RecipeDetails";

export const RecipePage = () => {
  let { recipeId } = useParams();
  console.log(recipeId);

  return (
    <>
      <RecipeDetails recipeId={recipeId} />
    </>
  );
};
