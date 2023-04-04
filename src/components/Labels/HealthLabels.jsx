import { Text } from '@chakra-ui/react';
import uuid from 'react-uuid';

export const HealthLabels = ({ recipe }) => {
  const healthLabels = recipe.healthLabels;

  return healthLabels.map((healthLabel) => {
    return (
      <Text color='blue.600' key={uuid()}>
        {healthLabel}
      </Text>
    );
  });
};
