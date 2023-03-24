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
      bgImage="url('src/assets/recipe-images/bg-body-pexels-engin-akyurt-1435895.jpg')"
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
