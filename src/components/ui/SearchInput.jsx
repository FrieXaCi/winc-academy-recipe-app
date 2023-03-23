import { Input } from '@chakra-ui/react';

export const SearchInput = ({ onChange }) => {
  return (
    <Input
      mt='20px'
      w='80%'
      h='50px'
      textAlign='center'
      type='text'
      placeholder='search recipe'
      size='md'
      onChange={onChange}
    />
  );
};
