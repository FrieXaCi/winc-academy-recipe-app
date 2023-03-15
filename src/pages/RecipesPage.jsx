import { Center, Heading, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { FilterRecipes } from '../components/FilterRecipes';
import { RecipeChoice } from '../components/RecipeChoice';
import { SearchRecipe } from '../components/SearchRecipe';

export const RecipesPage = () => {
  const greeting = 'Choose your recipe';
  const [userRecipe, setUserRecipe] = useState('');

  return (
    <Center h='100%' flexDir='column'>
      {userRecipe ? (
        <RecipeChoice recipe={userRecipe} />
      ) : (
        <>
          <Heading>Winc Recipe App</Heading>
          <Text>{greeting}</Text>

          <SearchRecipe onClick={setUserRecipe} />
          <FilterRecipes onClick={setUserRecipe} />
        </>
      )}
    </Center>
  );
};
