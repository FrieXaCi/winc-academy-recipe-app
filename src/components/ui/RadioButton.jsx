import { Radio, RadioGroup, Stack, Heading } from '@chakra-ui/react';

export const RadioButton = ({ value, onChange }) => {
  return (
    <RadioGroup value={value} mt='10px'>
      <Heading
        textAlign='center'
        p='5px'
        fontSize={{ base: '0.5rem', md: '1rem', lg: '2rem' }}
        color='yellow.400'
        textShadow='3px 3px black'
      >
        Select recipes
      </Heading>
      <Stack
        spacing={10}
        p='20px'
        direction='row'
        w='100%'
        h='50px'
        fontSize={{ base: '1rem', md: '1.5rem', lg: '3rem' }}
        textAlign='center'
        color='orange.600'
        textShadow='1px 1px black'
        bgGradient='linear(to-b, yellow.100, orange.600)'
        borderRadius='10px'
        boxShadow='3px,3px,black'
      >
        <Radio
          value='all'
          onChange={onChange}
          p='5px'
          bgColor='yellow.700'
          color='orange.700'
        >
          All recipes
        </Radio>
        <Radio value='pescatarian' onChange={onChange}>
          Pescatarian recipes
        </Radio>
        <Radio value='vegetarian' onChange={onChange}>
          Vegetarian recipes
        </Radio>
        <Radio value='vegan' onChange={onChange}>
          Vegan recipes
        </Radio>
      </Stack>
    </RadioGroup>
  );
};
