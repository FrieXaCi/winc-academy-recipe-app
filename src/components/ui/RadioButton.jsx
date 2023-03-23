import { Radio, RadioGroup, Stack, Text } from '@chakra-ui/react';

export const RadioButton = ({ value, onChange }) => {
  return (
    <RadioGroup value={value}>
      <Stack spacing={4} direction='row'>
        <Text>Select recipes</Text>
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
