import {
  CardSelect,
  Container,
  Input,
  LabelSelect,
  SearchButton,
  Select,
  SelectOption,
} from "./styles";

import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

const SearchIcon = <FontAwesomeIcon icon={faSearch} color="white" />;

type SearchParams = {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  onClick: () => void;
};

const SearchBar = ({ search, setSearch, onClick }: SearchParams) => {
  const { filterNutritions, setFilterNutritions } = useContext(UserContext);

  return (
    <>
      <Container>
        <Input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search fruit by name"
          autoFocus
        />
        <SearchButton onClick={() => onClick()}>{SearchIcon}</SearchButton>
        <CardSelect>
          <LabelSelect>filter</LabelSelect>
          <Select
            value={filterNutritions}
            onChange={(e) => setFilterNutritions(e.target.value)}
          >
            <SelectOption value="all">All</SelectOption>
            <SelectOption value="protein">Proteins</SelectOption>
            <SelectOption value="carbohydrates">Carbohydrates</SelectOption>
            <SelectOption value="fat">Fat</SelectOption>
            <SelectOption value="sugar">Sugar</SelectOption>
          </Select>
        </CardSelect>
      </Container>
    </>
  );
};

export default SearchBar;
