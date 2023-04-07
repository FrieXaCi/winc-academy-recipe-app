import { Flex, Heading } from '@chakra-ui/react';
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

  // function to filter recipes
  const handleFilter = (e) => {
    setFilterRecipes(e.target.value);
  };

  const recipeFilter = recipes.filter((recipe) => {
    // all recipes
    if (filterRecipes === 'all') return recipe;
    // pescatarianrecipes
    if (filterRecipes === 'pescatarian') {
      return recipe.recipe.healthLabels.includes('Pescatarian');
    }
    // vegetarian recipes
    if (filterRecipes === 'vegetarian') {
      return recipe.recipe.healthLabels.includes('Vegetarian');
    }
    // vegan recipes
    if (filterRecipes === 'vegan') {
      return recipe.recipe.healthLabels.includes('Vegan');
    }
  });

  // to filter the recipes from searchinput
  const matchRecipes = recipeFilter.filter((recipe) => {
    return recipe.recipe.label
      .toLowerCase()
      .includes(searchField.toLowerCase());
  });

  // toggle between recipeitems and searchoutput/output radionbuttons
  return (
    <Flex direction='column' alignItems='center' justify='center' w='100%'>
      <Heading
        as='i'
        w='100%'
        h='50px'
        fontSize={{ base: '1rem', md: '1.5rem', lg: '3rem' }}
        textAlign='center'
        color='yellow.400'
        textShadow='3px 3px black'
      >
        Search for Recipes
      </Heading>

      <Flex
        direction='column'
        alignItems='center'
        justify='center'
        gap={3}
        w='85%'
        mt='2rem'
        boxSizing='borderbox'
      >
        {/* searchoutput/output radionbuttons */}
        <RadioButton value={recipeFilter} onChange={handleFilter} />
        <SearchInput onChange={(e) => setSearchField(e.target.value)} />
      </Flex>
      {/* recipeitems */}
      <RecipeItems onClick={onClick} recipes={matchRecipes} />
    </Flex>
  );
};
