import { Flex, Text } from '@chakra-ui/react';

/*
export const Nutrients = ({ recipe }) => {
  const energy = recipe.totalNutrients.ENERC_KCAL;
  const fat = recipe.totalNutrients.FAT;
  const carbs = recipe.totalNutrients.CHOCDF;
  const protein = recipe.totalNutrients.PROCNT;
  const cholesterol = recipe.totalNutrients.CHOLE;
  const sodium = recipe.totalNutrients.NA;

  const nutrients = [energy, fat, carbs, protein, cholesterol, sodium];
  
  return nutrients.map((nutrient) => (
    <Flex direction='column' key={uuid()}>
      <Text>{nutrient.label}</Text>
      <Text>{Math.round(nutrient.quantity)}</Text>
      <Text>{nutrient.unit}</Text>
    </Flex>
  ));
};
 */

export const Nutrients = ({ recipe }) => {
  const nutrients = recipe.totalNutrients;

  const nutrientsArray = Object.keys(nutrients).map((key) => {
    return nutrients[key];
  });

  const energy = nutrientsArray.filter((nutrient) => {
    return nutrient.label === 'Energy';
  });

  const carbs = nutrientsArray.filter((nutrient) => {
    return nutrient.label === 'Carbs';
  });

  const protein = nutrientsArray.filter((nutrient) => {
    return nutrient.label === 'Protein';
  });

  const fat = nutrientsArray.filter((nutrient) => {
    return nutrient.label === 'Fat';
  });

  const cholesterol = nutrientsArray.filter((nutrient) => {
    return nutrient.label === 'Cholesterol';
  });

  const sodium = nutrientsArray.filter((nutrient) => {
    return nutrient.label === 'Sodium';
  });

  return (
    <Flex direction='column'>
      <Text as='b'>{energy[0].label}:</Text>
      <Text as='i'> {Math.round(energy[0].quantity)} kcal</Text>
      <Text as='b'>{carbs[0].label}: </Text>
      <Text as='i'> {Math.round(carbs[0].quantity)} grams</Text>
      <Text as='b'>{protein[0].label}: </Text>
      <Text as='i'> {Math.round(protein[0].quantity)} grams</Text>
      <Text as='b'>{fat[0].label}: </Text>
      <Text as='i'> {Math.round(fat[0].quantity)} grams</Text>
      <Text as='b'>{cholesterol[0].label}: </Text>
      <Text as='i'> {Math.round(cholesterol[0].quantity)} grams</Text>
      <Text as='b'>{sodium[0].label}: </Text>
      <Text as='i'> {Math.round(sodium[0].quantity)} grams</Text>
    </Flex>
  );
};
