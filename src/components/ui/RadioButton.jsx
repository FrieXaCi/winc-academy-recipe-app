import { Radio, RadioGroup, Stack, Text } from '@chakra-ui/react';

export const RadioButton = ({ value, onChange }) => {
  return (
    <RadioGroup
      align='center'
      justify='center'
      value={value}
      m='0 auto'
      w={{ base: '90%', sm: '70%', md: '70%', lg: '50%' }}
    >
      <Stack
        p={{ base: '3px', md: '10px', lg: '20px' }}
        direction='row'
        h={{ base: '20px', md: '35px', lg: '40px' }}
        align='center'
        justify='center'
        bgGradient='linear(to-b, yellow.100, orange.600)'
        borderRadius='10px'
        boxShadow='3px,3px,black'
        gap={3}
      >
        <Radio
          value='all'
          onChange={onChange}
          spacing={1}
          size={{ base: 'xs', md: 'sm', lg: 'sm' }}
        >
          <Text
            fontSize={{ base: '0.7rem', md: '1rem', lg: '1.5rem' }}
            fontWeight='300'
            color='orange.600'
            textShadow='1px 1px black'
          >
            All
          </Text>
        </Radio>
        <Radio
          value='pescatarian'
          onChange={onChange}
          spacing={1}
          size={{ base: 'xs', md: 'sm', lg: 'sm' }}
        >
          <Text
            fontSize={{ base: '0.7rem', md: '1rem', lg: '1.5rem' }}
            fontWeight='300'
            color='orange.600'
            textShadow='1px 1px black'
          >
            Pescatarian
          </Text>
        </Radio>
        <Radio
          value='vegetarian'
          onChange={onChange}
          spacing={1}
          size={{ base: 'xs', md: 'sm', lg: 'sm' }}
        >
          <Text
            fontSize={{ base: '0.7rem', md: '1rem', lg: '1.5rem' }}
            fontWeight='200'
            color='orange.600'
            textShadow='1px 1px black'
          >
            Vegetarian
          </Text>
        </Radio>
        <Radio
          value='vegan'
          onChange={onChange}
          spacing={1}
          size={{ base: 'xs', md: 'sm', lg: 'sm' }}
        >
          <Text
            fontSize={{ base: '0.7rem', md: '1rem', lg: '1.5rem' }}
            fontWeight='300'
            color='orange.600'
            textShadow='1px 1px black'
          >
            Vegan
          </Text>
        </Radio>
      </Stack>
    </RadioGroup>
  );
};
