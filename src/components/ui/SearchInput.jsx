import { Input } from '@chakra-ui/react';

export const SearchInput = ({ onChange }) => {
  return (
    <Input
      type='text'
      placeholder='search recipe'
      size='md'
      onChange={onChange}
    />
  );
};
