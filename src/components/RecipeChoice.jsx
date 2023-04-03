import { Heading, Image, Box, Flex, IconButton, Text } from '@chakra-ui/react';
import { ArrowLeftIcon } from '@chakra-ui/icons';
import { DietLabels } from './Labels/DietLabels';
import { Cautions } from './Labels/Cautions';
import { Ingredients } from './Labels/Ingredients';
import { Nutrients } from './Labels/Nutrients';

export const RecipeChoice = ({ recipe, onClick }) => {
  return (
    <Flex direction='column' p='10' bg='yellow.400'>
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
        mealtype: {recipe.mealType}
      </Text>
      <Text fontSize='sm' color='black'>
        dishtype: {recipe.dishType}
      </Text>
      <Text fontSize='sm' color='black'>
        Total cookingtime {recipe.totalTime}
      </Text>
      <Text fontSize='sm' color='black'>
        {recipe.yield} person
      </Text>
      <Box mt={5}>
        Dietlabels:
        <Flex direction='row' flexWrap='wrap' gap={2}>
          <DietLabels recipe={recipe} />
        </Flex>
      </Box>
      <Box mt={5}>
        Cautions:
        <Flex direction='row' flexWrap='wrap' gap={2}>
          <Cautions recipe={recipe} />
        </Flex>
      </Box>
      <Box mt={5}>
        Ingredients:
        <Flex direction='column' flexWrap='wrap' gap={1}>
          <Ingredients recipe={recipe} />
        </Flex>
      </Box>
      <Flex>
        <Nutrients recipe={recipe} />
      </Flex>
    </Flex>
  );
};
