import { RecipeItem } from './RecipeItem';

export const RecipeItems = ({ recipes, onClick }) => {
  return (
    <>
      {recipes.map((recipe) => (
        <RecipeItem
          onClick={onClick}
          key={recipe.recipe.label}
          recipe={recipe}
        />
      ))}
    </>
  );
};
