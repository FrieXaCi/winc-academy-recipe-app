import { Text } from '@chakra-ui/react';
import uuid from 'react-uuid';

export const DietLabels = ({ recipe }) => {
  const dietLabels = recipe.dietLabels;

  return dietLabels.map((dietLabel) => {
    return (
      <Text
        color='green.600'
        fontWeight='semibold'
        key={uuid()}
        fontSize={{
          base: '0.9rem',
          sm: '1rem',
          md: '1.1rem',
          lg: '1.3rem',
        }}
      >
        {dietLabel}
      </Text>
    );
  });
};
