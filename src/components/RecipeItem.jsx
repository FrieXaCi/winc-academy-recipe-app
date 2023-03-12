import { Box, Image, Text } from '@chakra-ui/react';

export const RecipeItem = ({ recipe, onClick }) => {
  return (
    <>
      <Box onClick={() => onClick(recipe)}>
        <Image
          h='50'
          w='50'
          src={recipe.recipe.image}
          alt={recipe.recipe.alt}
        />
      </Box>
      <Text>{recipe.recipe.label}</Text>
    </>
  );
};
