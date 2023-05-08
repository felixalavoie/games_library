import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  selectedSort: string | null;
  onSelect: (sort: string) => void;
}

const SortSelect = ({ selectedSort, onSelect }: Props) => {
  const sortMap = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-release", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedSort
          ? "Order by: " +
            sortMap.find((sort) => sort.value == selectedSort)?.label
          : "Order by: Relevance"}
      </MenuButton>
      <MenuList>
        {sortMap.map((sortType) => (
          <MenuItem
            key={sortType.value}
            color={selectedSort == sortType.value ? "orange" : "white"}
            onClick={() => onSelect(sortType.value)}
          >
            {sortType.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelect;
