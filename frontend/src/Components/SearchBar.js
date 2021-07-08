import { useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  useDisclosure,
  Button,
  InputGroup,
  Input,
  InputLeftElement,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

const SearchBar = ({ history }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [keyword, setKeyword] = useState('');

  const handleSearch = e => {
    e.preventDefault();
    console.log(e);

    if (keyword.trim()) {
      history.push(`/search/${keyword}`);
    } else {
      history.push('/');
    }
  };

  return (
    <>
      <Button leftIcon={<SearchIcon />} onClick={onOpen}>
        Search gift catalog
      </Button>
      <Modal
        isCentered={false}
        autoFocus={false}
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalBody>
            <form onSubmit={handleSearch}>
              <InputGroup p={4}>
                <InputLeftElement
                  pointerEvents="none"
                  children={<SearchIcon color="gray.800" mt={4} />}
                />
                <Input
                  variant="unstyled"
                  type="text"
                  placeholder="Search for the perfect gift"
                  onChange={e => setKeyword(e.target.value)}
                />
              </InputGroup>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default SearchBar;
