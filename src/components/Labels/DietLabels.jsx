import { Text } from '@chakra-ui/react';
import uuid from 'react-uuid';

export const DietLabels = ({ recipe }) => {
  const dietLabels = recipe.dietLabels;

  return dietLabels.map((dietLabel) => {
    return (
      <Text color='green.600' fontWeight='semibold' key={uuid()}>
        {dietLabel}
      </Text>
    );
  });
};
