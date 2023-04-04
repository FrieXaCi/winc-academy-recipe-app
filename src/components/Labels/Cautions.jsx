import { Text } from '@chakra-ui/react';
import uuid from 'react-uuid';

export const Cautions = ({ recipe }) => {
  const Cautions = recipe.cautions;

  return Cautions.map((caution) => {
    return (
      <Text color='red.600' fontWeight='semibold' key={uuid()}>
        {caution}
      </Text>
    );
  });
};
