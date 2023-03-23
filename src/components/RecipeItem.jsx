import { Box, Image, Text, Heading, Flex } from '@chakra-ui/react';

export const RecipeItem = ({ recipe, onClick }) => {
  // console.log(recipe);
  const labels = recipe.healthLabels.filter(
    (label) => label === 'Vegetarian' || label === 'Vegan'
  );

  return (
    <Flex
      onClick={() => onClick(recipe)}
      as='button'
      h='380px'
      w='280px'
      alignItems='center'
      justifyContent='start'
      direction='column'
      gap='5px'
      boxShadow='dark-lg'
      borderRadius='25px'
      bg='yellow.300'
    >
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
      <Heading fontSize='sm' p='5px' textAlign='center' onClick={onClick}>
        {recipe.label}
      </Heading>
      <Text fontSize='sm' color='black'>
        {recipe.dishType}
      </Text>
      <Text fontSize='sm' color='black'>
        {recipe.mealType}
      </Text>
      <Text fontSize='sm' color='black'>
        {recipe.cautions}
      </Text>
      <Text fontSize='sm' color='black'>
        {recipe.dietLabels}
      </Text>
      <Text fontSize='sm' color='black'>
        {labels}
      </Text>
    </Flex>
  );
};
