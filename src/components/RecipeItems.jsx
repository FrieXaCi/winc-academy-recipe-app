import { Flex } from '@chakra-ui/react';
import { RecipeItem } from './RecipeItem';

export const RecipeItems = ({ recipes, onClick }) => {
  return (
    <Flex
      p='20'
      w='98%'
      direction='row'
      wrap='wrap'
      gap='20px'
      alignItems='center'
      justifyContent='center'
    >
      {recipes.map((recipe) => (
        <RecipeItem
          onClick={onClick}
          key={recipe.recipe.label}
          recipe={recipe.recipe}
        />
      ))}
    </Flex>
  );
};
