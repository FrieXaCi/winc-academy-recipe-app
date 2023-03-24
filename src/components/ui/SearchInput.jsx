import { Input } from '@chakra-ui/react';

export const SearchInput = ({ onChange }) => {
  return (
    <Input
      mt='20px'
      w='60%'
      h='50px'
      bgGradient='linear(to-b, yellow.100, orange.600)'
      color='orange.900'
      textAlign='center'
      type='text'
      placeholder='search recipes'
      size='md'
      border='none'
      outline='none'
      borderRadius='10px'
      boxShadow='3px,3px,black'
      onChange={onChange}
    />
  );
};
