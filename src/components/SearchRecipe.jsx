import { Box, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { SearchInput } from './ui/SearchInput';
import { data } from '../utils/data';
import { RecipeItems } from './RecipeItems';

export const SearchRecipe = ({ onClick }) => {
  const recipes = data.hits;
  const [searchField, setSearchField] = useState('');
  const matchRecipes = recipes.filter((recipe) => {
    return recipe.recipe.label
      .toLowerCase()
      .includes(searchField.toLowerCase());
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
