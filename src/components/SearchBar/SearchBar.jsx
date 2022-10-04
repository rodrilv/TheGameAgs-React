import "../style.css";
import {
  Input,
  Button,
  InputRightElement,
  InputGroup,
  IconButton,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
export default function SearchBar() {
  return (
    <div className="search-bar">
      <InputGroup>
        <Input size="md" variant={"filled"} placeholder={"Buscar..."} />
        <InputRightElement width="4.5rem">
          <IconButton
            colorScheme={"blue"}
            aria-label={"Buscar"}
            icon={<SearchIcon />}
            marginLeft={9}
          ></IconButton>
        </InputRightElement>
      </InputGroup>
    </div>
  );
}
