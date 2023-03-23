import { Center, Heading, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { RecipeChoice } from '../components/RecipeChoice';
import { SearchRecipe } from '../components/SearchRecipe';

export const RecipesPage = () => {
  const greeting = 'Choose your recipe';
  const [userRecipe, setUserRecipe] = useState('');

  return (
    <Center h='100%' flexDir='column' bgGradient='linear(to-l, black, white)'>
      {userRecipe ? (
        <RecipeChoice recipe={userRecipe} onClick={setUserRecipe} />
      ) : (
        <>
          <Heading>Winc Recipe App</Heading>
          <Text>{greeting}</Text>
          <SearchRecipe onClick={setUserRecipe} />
        </>
      )}
    </Center>
  );
};
