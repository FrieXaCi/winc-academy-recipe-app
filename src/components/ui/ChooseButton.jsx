import { Box } from '@chakra-ui/react';

// buttons to use for the recipecard
export const ChooseButton = ({ text }) => {
  return (
    <Box w='400px' h='40px' bg='blue.800' textAlign='center' pt='1.5'>
      {text}
    </Box>
  );
};
