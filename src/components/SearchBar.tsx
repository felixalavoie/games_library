import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSubmit: (searchString: string) => void;
}

const SearchBar = ({ onSubmit }: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (ref.current) onSubmit(ref.current?.value);
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          borderRadius={20}
          placeholder="Search game..."
          variant="filled"
          maxWidth="650px"
          ref={ref}
        />
      </InputGroup>
    </form>
  );
};

export default SearchBar;
