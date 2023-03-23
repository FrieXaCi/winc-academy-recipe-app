import { Heading, Image, Box, Flex, IconButton } from '@chakra-ui/react';
import { ArrowLeftIcon } from '@chakra-ui/icons';

export const RecipeChoice = ({ recipe, onClick }) => {
  return (
    <Flex direction='column' p='10'>
      <Heading size='sm'> You choose {recipe.label}!</Heading>
      <Box h='200px' w='100%'>
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
        <Image
          h='100%'
          w='100%'
          pb='10px'
          borderTopRadius='25px'
          src={recipe.image}
          alt='recipe'
        />
      </Box>
    </Flex>
  );
};
