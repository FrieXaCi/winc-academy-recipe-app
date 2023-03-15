import { Box, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { SearchInput } from './ui/SearchInput';
import { RecipeItems } from './RecipeItems';
import { data } from '../utils/data';

export const SearchRecipe = ({ onClick }) => {
  const [searchField, setSearchField] = useState('');
  const recipes = data.hits;
  const recipe = recipes.map((recipe) => {
    return recipe.recipe;
  });

  const matchRecipes = recipe.filter((recipe) => {
    return recipe.label.toLowerCase().includes(searchField.toLowerCase());
  });

  const handleChange = (e) => {
    setSearchField(e.target.value);
  };

  return (
    <Box>
      <Text>Search for Recipe</Text>
      <SearchInput onChange={handleChange} />
      <RecipeItems onClick={onClick} recipes={matchRecipes} />
    </Box>
  );
};
