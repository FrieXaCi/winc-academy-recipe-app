import { Input, Flex } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

// search input for searchrecipe
export const SearchInput = ({ onChange }) => {
  return (
    <Flex
      m='0 auto'
      w={{ base: '90%', sm: '70%', md: '70%', lg: '50%' }}
      h={{ base: '20px', md: '30px', lg: '40px' }}
      align='center'
      justify='center'
      bgGradient='linear(to-b, yellow.100, orange.600)'
      border='none'
      outline='none'
      borderRadius='10px'
      boxShadow='3px,3px,black'
    >
      <Input
        border='none'
        outline='none'
        h={{ base: '20px', md: '30px', lg: '40px' }}
        fontSize={{ base: '0.7rem', md: '1rem', lg: '1.5rem' }}
        color='orange.900'
        textAlign='center'
        type='text'
        placeholder='search recipes'
        onChange={onChange}
      />
      <SearchIcon boxSize={{ base: '0.7rem', lg: '1.5rem' }} m='10px' />
    </Flex>
  );
};
