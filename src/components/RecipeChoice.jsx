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
      mt={{ base: '50px', lg: '300px', xl: '300px' }}
      direction='column'
      w={{ base: '90%', lg: '70%', xl: '70%' }}
      h='100%'
      p='10'
      boxShadow='dark-lg'
      borderRadius='25px'
      bgGradient='linear(to-b, yellow.100, orange.600)'
      color='orange.900'
      opacity='0.9'
      textAlign='center'
    >
      <Box position='relative'>
        <IconButton
          variant={'ghost'}
          textAlign='left'
          color='black'
          icon={<ArrowLeftIcon />}
          _hover={{ bg: 'black', color: 'white' }}
          _active={{ bg: 'yellow.300' }}
          onClick={() => onClick()}
        />
      </Box>
      <Heading size='lg' mb='3rem'>
        {recipe.label}!
      </Heading>
      <Flex gap={5} flexWrap='wrap'>
        <Box h='200px' w='400px'>
          <Image
            h='100%'
            w='100%'
            pb='10px'
            borderRadius='5px'
            src={recipe.image}
            alt='recipe'
          />
        </Box>
        <Flex direction='column' gap={3}>
          <Flex gap={3}>
            <Text as='b' fontSize='sm' color='orange.900'>
              Mealtype:
            </Text>
            <Text as='i' fontWeight='semibold' color='yellow.900'>
              {recipe.mealType}
            </Text>
          </Flex>
          <Flex gap={3}>
            <Text as='b' fontSize='sm' color='orange.900'>
              Dish:
            </Text>
            <Text as='i' fontWeight='semibold' color='yellow.900'>
              {recipe.dishType}
            </Text>
          </Flex>
          <Flex gap={3}>
            <Text as='b' fontSize='sm' color='orange.900'>
              Total cooking time is:
            </Text>
            <Text as='i' fontWeight='semibold' color='yellow.900'>
              {recipe.totalTime} minutes
            </Text>
          </Flex>
          <Flex gap={3}>
            <Text as='b' fontSize='sm' color='orange.900'>
              persons:
            </Text>
            <Text as='i' fontWeight='semibold' color='yellow.900'>
              {recipe.yield} person
            </Text>
          </Flex>
        </Flex>
        <Flex
          direction='column'
          flexWrap='wrap'
          gap={2}
          align='flexStart'
          ml='3rem'
        >
          {recipe.dietLabels.length > 0 ? (
            <Flex
              direction={{ base: 'column', sm: 'column', md: 'row', lg: 'row' }}
              flexWrap='wrap'
              gap={2}
            >
              <Text as='b'>Dietlabels:</Text>
              <Text as='i'>
                <DietLabels recipe={recipe} />
              </Text>
            </Flex>
          ) : null}

          {recipe.cautions.length > 0 ? (
            <Flex
              direction={{ base: 'column', sm: 'column', md: 'row', lg: 'row' }}
              flexWrap='wrap'
              gap={2}
            >
              <Text as='b'>Cautions:</Text>
              <Text as='i'>
                <Cautions recipe={recipe} />
              </Text>
            </Flex>
          ) : null}
        </Flex>
      </Flex>

      <Flex
        direction={{ base: 'column', sm: 'column', md: 'row', lg: 'row' }}
        align='flex-start'
        justify='flex-start'
        gap={5}
        m='10px auto'
      >
        <Box w='50%'>
          <Text as='b' color='orange.900'>
            Healthlabels:
          </Text>

          <Flex
            direction='row'
            flexWrap='wrap'
            gap={{ base: '1', sm: '1', md: '2', lg: '3' }}
          >
            <HealthLabels recipe={recipe} />
          </Flex>
        </Box>

        <Box>
          <Text as='b' color='orange.900'>
            Ingredients:
          </Text>

          <Flex
            direction='column'
            flexWrap='wrap'
            gap={1}
            align='flex-start'
            justify='flex-start'
          >
            <Ingredients recipe={recipe} />
          </Flex>
        </Box>
      </Flex>
      <Flex>
        <Nutrients recipe={recipe} />
      </Flex>
    </Flex>
  );
};
