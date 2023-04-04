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
        <Text
          fontSize={{
            base: '0.9rem',
            sm: '1rem',
            md: '1.1rem',
            lg: '1.3rem',
          }}
          color='orange.900'
        >
          {recipe.mealType}
        </Text>
        <Heading
          fontSize={{
            base: '0.8rem',
            sm: '0.9rem',
            md: '1rem',
            lg: '1.1rem',
          }}
          p='5px'
          textAlign='center'
          onClick={onClick}
        >
          {recipe.label}
        </Heading>
        <Text
          fontSize={{
            base: '0.9rem',
            sm: '1rem',
            md: '1.1rem',
            lg: '1.3rem',
          }}
        >
          {recipe.dishType}
        </Text>
        <Text
          fontSize={{
            base: '0.9rem',
            sm: '1rem',
            md: '1.1rem',
            lg: '1.3rem',
          }}
          fontWeight='semibold'
          color='green.600'
          flexWrap='wrap'
        >
          {VegaLabels()}
        </Text>
      </CardHeader>

      <CardBody mt='1rem'>
        <Box>
          <Text
            fontSize={{
              base: '0.9rem',
              sm: '1rem',
              md: '1.1rem',
              lg: '1.3rem',
            }}
          >
            Dietlabels:
          </Text>

          <DietLabels recipe={recipe} />
        </Box>
        <Box>
          <Text
            fontSize={{
              base: '0.9rem',
              sm: '1rem',
              md: '1.1rem',
              lg: '1.3rem',
            }}
          >
            Cautions:
          </Text>

          <Cautions recipe={recipe} />
        </Box>
      </CardBody>
    </Card>
  );
};
