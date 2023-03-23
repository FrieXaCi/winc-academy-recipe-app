import { Box, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { SearchInput } from './ui/SearchInput';
import { RecipeItems } from './RecipeItems';
import { RadioButton } from './ui/RadioButton';
import { data } from '../utils/data';
const recipes = data.hits;
export const SearchRecipe = ({ onClick }) => {
  // search recipes
  const [searchField, setSearchField] = useState('');
  // filter recipes
  const [filterRecipes, setFilterRecipes] = useState('all');

  const handleFilter = (e) => {
    setFilterRecipes(e.target.value);
  };

  const recipeFilter = recipes.filter((recipe) => {
    if (filterRecipes === 'all') return recipe;
    if (filterRecipes === 'pescatarian') {
      return recipe.recipe.healthLabels.includes('Pescatarian');
    }
    if (filterRecipes === 'vegetarian') {
      return recipe.recipe.healthLabels.includes('Vegetarian');
    }
    if (filterRecipes === 'vegan') {
      return recipe.recipe.healthLabels.includes('Vegan');
    }
  });

  const matchRecipes = recipeFilter.filter((recipe) => {
    return recipe.recipe.label
      .toLowerCase()
      .includes(searchField.toLowerCase());
  });

  return (
    <Box>
      <Text>Search for Recipe</Text>
      <SearchInput onChange={(e) => setSearchField(e.target.value)} />
      <RadioButton value={recipeFilter} onChange={handleFilter} />
      <RecipeItems onClick={onClick} recipes={matchRecipes} />
    </Box>
  );
};
