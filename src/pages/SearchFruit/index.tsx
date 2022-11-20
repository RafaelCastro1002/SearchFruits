import { useEffect, useState } from "react";
import { Fruit } from "../../@types/fruit";
import Card from "../../components/Card";
import Error from "../../components/Error";
import FruitInfo from "../../components/FruitInfos";
import Loading from "../../components/Loading";
import SearchBar from "../../components/SearchBar";
import FruitService from "../../services/FruitService";

const SearchFruit = () => {
  const [fruit, setFruit] = useState<Fruit | null>(null);
  const [search, setSearch] = useState<string>("");

  const [initialState, setInitialState] = useState(true);

  const [loadFruit, setLoadFruit] = useState<boolean>(false);

  const toggleLoadFruit = () => {
    if (!loadFruit) {
      setLoadFruit(true);
    }
  };

  const fruitService = new FruitService();

  const loadFruits = async (search: string) => {
    if (loadFruit) {
      setInitialState(false);
      const response = await fruitService.search(search);

      setFruit(response);
      setLoadFruit(false);
    }
  };

  useEffect(() => {
    loadFruits(search);
  }, [loadFruit]);

  return (
    <>
      <SearchBar
        search={search}
        setSearch={setSearch}
        onClick={toggleLoadFruit}
      />
      {!initialState && (
        <Card>
          {!loadFruit && <FruitInfo fruit={fruit} />}
          {!fruit && !loadFruit && <Error text="Not Found fruit" />}
          {loadFruit && <Loading />}
        </Card>
      )}
    </>
  );
};

export default SearchFruit;
