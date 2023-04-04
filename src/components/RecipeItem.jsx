import {
  Box,
  Image,
  Text,
  Heading,
  Card,
  CardHeader,
  CardBody,
} from '@chakra-ui/react';
import { DietLabels } from './Labels/DietLabels';
import { Cautions } from './Labels/Cautions';

export const RecipeItem = ({ recipe, onClick }) => {
  // function to show vega options
  const VegaLabels = () => {
    if (recipe.healthLabels.includes('Vegan')) {
      return 'Vegan';
    }
    if (recipe.healthLabels.includes('Vegetarian')) {
      return 'Vegetarian';
    } else return '';
  };

  return (
    <Card
      align='center'
      onClick={() => onClick(recipe)}
      as='button'
      h='500px'
      w='280px'
      alignItems='center'
      justifyContent='start'
      direction='column'
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
      <CardHeader>
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
      </CardHeader>

      <CardBody mt='1rem'>
        <Box>
          Dietlabels:
          <DietLabels recipe={recipe} />
        </Box>
        <Box>
          Cautions:
          <Cautions recipe={recipe} />
        </Box>
      </CardBody>
    </Card>
  );
};
