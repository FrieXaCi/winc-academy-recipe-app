import { Text } from '@chakra-ui/react';
import uuid from 'react-uuid';

export const Ingredients = ({ recipe }) => {
  const ingredients = recipe.ingredientLines;

  return ingredients.map((ingredient) => {
    return (
      <Text
        color='blue.600'
        key={uuid()}
        fontSize={{
          base: '0.9rem',
          sm: '1rem',
          md: '1.1rem',
          lg: '1.3rem',
        }}
      >
        <Text>{ingredient}</Text>
      </Text>
    );
  });
};
