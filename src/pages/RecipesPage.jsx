import { Center, Heading } from '@chakra-ui/react';
import { useState } from 'react';
import { RecipeChoice } from '../components/RecipeChoice';
import { SearchRecipe } from '../components/SearchRecipe';
import { useMediaQuery } from '@chakra-ui/react';

export const RecipesPage = () => {
  const greeting = 'Winc Recipe App';
  const [userRecipe, setUserRecipe] = useState('');

  return (
    <Center
      w='100%'
      h='100%'
      flexDir='column'
      bgImage="url('src/assets/recipe-images/background_table-_with_food.jpeg')"
      bgPosition='top'
      bgRepeat='no-repeat'
      bgSize='cover'
    >
      {userRecipe ? (
        <RecipeChoice recipe={userRecipe} onClick={setUserRecipe} />
      ) : (
        <>
          <Heading
            width='100%'
            h='250px'
            mb='10px'
            bgPosition='top'
            bgRepeat='no-repeat'
            bgSize='cover'
            textAlign='center'
            fontSize={{ base: '3rem', md: '6rem', lg: '9rem' }}
            color='yellow.400'
            textShadow='3px 3px black'
          >
            {greeting}
          </Heading>

          <SearchRecipe onClick={setUserRecipe} />
        </>
      )}
    </Center>
  );
};
