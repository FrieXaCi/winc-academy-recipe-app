import { Center, Heading } from '@chakra-ui/react';
import { useState } from 'react';
import { RecipeChoice } from '../components/RecipeChoice';
import { SearchRecipe } from '../components/SearchRecipe';

export const RecipesPage = () => {
  const greeting = 'Winc Recipe App';
  const [userRecipe, setUserRecipe] = useState('');

  return (
    <Center
      h='100%'
      flexDir='column'
      bgGradient='linear(to-l, orange.700 , yellow.700)'
    >
      {userRecipe ? (
        <RecipeChoice recipe={userRecipe} onClick={setUserRecipe} />
      ) : (
        <>
          <Heading
            width='100%'
            h='250px'
            mb='10px'
            bgImage="url('src/assets/recipe-images/bg-header-pexels-anna-guerrero-1956974.jpg')"
            bgPosition='center'
            bgRepeat='no-repeat'
            bgSize='cover'
            textAlign='center'
            fontSize={{ base: '3rem', md: '6rem', lg: '9rem' }}
            color='yellow.400'
            textShadow='2px 2px black'
          >
            {greeting}
          </Heading>
          <SearchRecipe onClick={setUserRecipe} />
        </>
      )}
    </Center>
  );
};
