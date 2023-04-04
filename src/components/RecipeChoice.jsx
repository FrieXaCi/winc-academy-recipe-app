import { Heading, Image, Box, Flex, IconButton, Text } from '@chakra-ui/react';
import { ArrowLeftIcon } from '@chakra-ui/icons';
import { DietLabels } from './Labels/DietLabels';
import { Cautions } from './Labels/Cautions';
import { Ingredients } from './Labels/Ingredients';
import { Nutrients } from './Labels/Nutrients';
import { HealthLabels } from './Labels/HealthLabels';

export const RecipeChoice = ({ recipe, onClick }) => {
  return (
    <Flex
      direction='column'
      w='75%'
      h='100%'
      p='10'
      boxShadow='dark-lg'
      borderRadius='25px'
      bgGradient='linear(to-b, yellow.100, orange.600)'
      color='orange.900'
      textAlign='center'
    >
      <Box position='relative'>
        <IconButton
          variant={'ghost'}
          pos='absolute'
          top='0'
          left='0'
          color='blue.500'
          icon={<ArrowLeftIcon />}
          _hover={{ bg: 'black', color: 'white' }}
          _active={{ bg: 'yellow.300' }}
          onClick={() => onClick()}
        />
      </Box>
      <Heading size='lg' mb='3rem'>
        {recipe.label}!
      </Heading>
      <Flex gap={5}>
        <Box h='200px' w='400px'>
          <Image
            h='100%'
            w='100%'
            pb='10px'
            borderTopRadius='25px'
            src={recipe.image}
            alt='recipe'
          />
        </Box>
        <Flex direction='column' gap={3}>
          <Flex gap={3}>
            <Text as='b' fontSize='sm' color='black'>
              Mealtype:
            </Text>
            <Text as='i'>{recipe.mealType}</Text>
          </Flex>
          <Flex gap={3}>
            <Text as='b' fontSize='sm' color='black'>
              Dish:
            </Text>
            <Text as='i'>{recipe.dishType}</Text>
          </Flex>
          <Flex gap={3}>
            <Text as='b' fontSize='sm' color='black'>
              Total cooking time is:
            </Text>
            <Text as='i'>{recipe.totalTime} minutes</Text>
          </Flex>
          <Flex gap={3}>
            <Text as='b' fontSize='sm' color='black'>
              persons:
            </Text>
            <Text as='i'>{recipe.yield} person</Text>
          </Flex>
        </Flex>
      </Flex>
      <Box mt={5}>
        Dietlabels:
        <Flex direction='row' flexWrap='wrap' gap={2}>
          <DietLabels recipe={recipe} />
        </Flex>
      </Box>
      <Box mt={5}>
        Healthlabels:
        <Flex direction='row' flexWrap='wrap' gap={2}>
          <HealthLabels recipe={recipe} />
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
