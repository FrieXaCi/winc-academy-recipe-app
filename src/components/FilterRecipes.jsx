import { useState } from 'react';
import { HStack, Button } from '@chakra-ui/react';
import { RecipeItems } from './RecipeItems';
import { data } from '../utils/data';

export const FilterRecipes = ({ onClick }) => {
  const recipes = data.hits;
  const filters = recipes.map((filter) => {
    return filter.recipe;
  });
  const [filterRecipes, setFilterRecipes] = useState(filters);

  const filterVeggie = () => {
    const veggie = filters.filter((filter) => {
      return filter.healthLabels.includes('Vegetarian');
    });
    setFilterRecipes(veggie);
  };
  const filterVegan = () => {
    const vegan = filters.filter((filter) => {
      return filter.healthLabels.includes('Vegan');
    });
    setFilterRecipes(vegan);
  };
  return (
    <>
      <HStack>
        <Button size='xl' onClick={filterVeggie}>
          Vegetarian
        </Button>
        <Button size='xl' onClick={filterVegan}>
          Vegan
        </Button>
      </HStack>
      <RecipeItems onClick={onClick} recipes={filterRecipes} />
    </>
  );
};
