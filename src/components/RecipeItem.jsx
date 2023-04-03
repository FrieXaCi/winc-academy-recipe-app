import { Box, Image, Text, Heading, Flex } from '@chakra-ui/react';

export const RecipeItem = ({ recipe, onClick }) => {
  const VegaLabels = () => {
    if (recipe.healthLabels.includes('Vegan')) {
      return 'Vegan';
    }
    if (recipe.healthLabels.includes('Vegetarian')) {
      return 'Vegetarian';
    } else return '';
  };

  return (
    <Flex
      align='center'
      onClick={() => onClick(recipe)}
      as='button'
      h='400px'
      w='280px'
      alignItems='center'
      justifyContent='start'
      direction='column'
      gap='5px'
      boxShadow='dark-lg'
      borderRadius='25px'
      bgGradient='linear(to-b, yellow.100, orange.600)'
      color='orange.900'
      textAlign='center'
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
      <Text fontSize='sm' color='black'>
        {recipe.mealType}
      </Text>
      <Heading fontSize='1rem' p='5px' textAlign='center' onClick={onClick}>
        {recipe.label}
      </Heading>
      <Text fontSize='md'>{recipe.dishType}</Text>
      <Text
        fontSize='md'
        fontWeight='semibold'
        color='green.600'
        flexWrap='wrap'
      >
        {VegaLabels()}
      </Text>
      ;
      <Text fontSize='sm' color='black'>
        {recipe.cautions}
      </Text>
      <Text fontSize='sm' color='black'>
        {recipe.dietLabels}
      </Text>
    </Flex>
  );
};
