import { Heading, Image, Box, Flex, IconButton, Text } from '@chakra-ui/react';
import { ArrowLeftIcon } from '@chakra-ui/icons';

export const RecipeChoice = ({ recipe, onClick }) => {
  const energy = recipe.totalNutrients.ENERC_KCAL;
  const fat = recipe.totalNutrients.FAT;
  const carbs = recipe.totalNutrients.CHOCDF;
  const protein = recipe.totalNutrients.PROCNT;
  const cholesterol = recipe.totalNutrients.CHOLE;
  const sodium = recipe.totalNutrients.NA;

  //create array of nutrients so we can map them
  const nutrients = [energy, fat, carbs, protein, cholesterol, sodium];

  return (
    <Flex direction='column' p='10'>
      <Box>
        <IconButton
          variant={'ghost'}
          color='blue.500'
          icon={<ArrowLeftIcon />}
          _hover={{ bg: 'black', color: 'white' }}
          _active={{ bg: 'yellow.300' }}
          onClick={() => onClick()}
        />
      </Box>
      <Heading size='sm'> {recipe.label}!</Heading>
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
      <Text fontSize='sm' color='black'>
        {recipe.dishType}
      </Text>
      <Text fontSize='sm' color='black'>
        {recipe.totalTime}
      </Text>
      <Text fontSize='sm' color='black'>
        {recipe.yield}
      </Text>
      <Text fontSize='sm' color='black'>
        {recipe.dietLabels}
      </Text>
      <Text fontSize='sm' color='black'>
        {recipe.cautions}
      </Text>
      <Text fontSize='sm' color='black'>
        {recipe.ingredientLines}
      </Text>
      {nutrients.map((nutrient) => (
        <Flex direction='column' key={nutrient.label}>
          <Text>{nutrient.label}</Text>
          <Text>{nutrient.quantity}</Text>
          <Text>{nutrient.unit}</Text>
        </Flex>
      ))}
    </Flex>
  );
};
