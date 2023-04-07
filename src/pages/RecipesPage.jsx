import { Center, Heading } from '@chakra-ui/react';
import { useState } from 'react';
import { RecipeChoice } from '../components/RecipeChoice';
import { SearchRecipe } from '../components/SearchRecipe';

export const RecipesPage = () => {
  const greeting = 'Winc Recipe App';
  // set state for recipes
  const [userRecipe, setUserRecipe] = useState('');

  //s toggle between recipepage and recipechoice
  return (
    <Center
      w='100%'
      h='100%'
      flexDir='column'
      bgImage="url('src/assets/recipe-images/background_table-_with_food.jpeg')"
      bgPosition='top'
      bgRepeat='repeat'
      bgSize={{ base: 'contain', md: 'cover', lg: 'cover', xl: 'cover' }}
    >
      {userRecipe ? (
        //Recipe choice
        <RecipeChoice recipe={userRecipe} onClick={setUserRecipe} />
      ) : (
        //Recipepage
        <>
          <Heading
            width='100%'
            h='250px'
            mb='10px'
            bgPosition='top'
            bgRepeat='no-repeat'
            bgSize='cover'
            textAlign='center'
            fontSize={{ base: '3rem', sm: '4rem', md: '5rem', lg: '7rem' }}
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
