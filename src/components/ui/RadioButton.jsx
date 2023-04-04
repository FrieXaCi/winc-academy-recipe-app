import { Radio, RadioGroup, Stack } from '@chakra-ui/react';

export const RadioButton = ({ value, onChange }) => {
  return (
    <RadioGroup value={value} m='0 auto' w='70%'>
      <Stack
        spacing={10}
        p='20px'
        direction='row'
        w='100%'
        h='50px'
        fontSize={{ base: '1rem', md: '1.5rem', lg: '3rem' }}
        justify='center'
        color='orange.600'
        textShadow='1px 1px black'
        bgGradient='linear(to-b, yellow.100, orange.600)'
        borderRadius='10px'
        boxShadow='3px,3px,black'
      >
        <Radio value='all' onChange={onChange}>
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
