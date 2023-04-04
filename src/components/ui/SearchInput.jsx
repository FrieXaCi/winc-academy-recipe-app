import { Input, Flex, Box } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

export const SearchInput = ({ onChange }) => {
  return (
    <Flex
      m='0 auto'
      w={{ base: '90%', md: '70%', lg: '80%' }}
      align='center'
      justify='center'
      bgGradient='linear(to-b, yellow.100, orange.600)'
      border='none'
      outline='none'
      borderRadius='10px'
      boxShadow='3px,3px,black'
    >
      <Input
        bgGradient='linear(to-b, yellow.100, orange.600)'
        border='none'
        outline='none'
        w={{ base: '90%', md: '70%', lg: '80%' }}
        h={{ base: '20px', md: '30px', lg: '50px' }}
        fontSize={{ base: '0.8rem', md: '1rem', lg: '1.5rem' }}
        color='orange.900'
        textAlign='center'
        type='text'
        placeholder='search recipes'
        onChange={onChange}
      />
      <SearchIcon boxSize='1.5rem' />
    </Flex>
  );
};
