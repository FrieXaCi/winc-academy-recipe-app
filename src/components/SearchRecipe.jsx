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
    <Flex direction='column' alignItems='center'>
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
        direction={{ base: 'column', md: 'column', lg: 'row' }}
        alignItems='flex-start'
        justify='center'
        gap={3}
        w='85%'
        mt='2rem'
      >
        <RadioButton value={recipeFilter} onChange={handleFilter} />
        <SearchInput onChange={(e) => setSearchField(e.target.value)} />
      </Flex>
      <RecipeItems onClick={onClick} recipes={matchRecipes} />
    </Flex>
  );
};
