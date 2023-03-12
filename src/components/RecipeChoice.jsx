import { Heading, Image, Box } from '@chakra-ui/react';

export const RecipeChoice = ({ recipe }) => {
  return (
    <>
      <Heading size='sm'> You choose {recipe.recipe.label}!</Heading>
      <Box h='100' w='100'>
        <Image src={recipe.recipe.image} alt={recipe.recipe.alt} />
      </Box>
    </>
  );
};
