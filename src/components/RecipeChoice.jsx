import { Heading, Image, Box, Flex } from '@chakra-ui/react';

export const RecipeChoice = ({ recipe, onClick }) => {
  return (
    <Flex direction='column' p='10'>
      <Heading size='sm'> You choose {recipe.label}!</Heading>
      <Box h='200px' w='100%'>
        <Image
          h='100%'
          w='100%'
          pb='10px'
          borderTopRadius='25px'
          src={recipe.image}
          alt='recipe'
        />
      </Box>
    </Flex>
  );
};
