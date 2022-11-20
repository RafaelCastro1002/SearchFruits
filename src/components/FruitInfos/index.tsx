import { useContext } from "react";
import { Fruit } from "../../@types/fruit";
import { UserContext } from "../../context/UserContext";
import { InfoTable } from "./styles";

const headers: string[] = [
  "Name",
  "Genus",
  "Family",
  "Order",
  "Nutrition Facts (per 100 grams)",
];

type props = {
  fruit: Fruit | null;
};

const FruitInfo = ({ fruit }: props) => {
  if (!fruit) return <></>;

  const { filterNutritions } = useContext(UserContext);

  const createListNutrition = () => {
    const { nutritions } = fruit;

    return Object.entries(nutritions)
      .filter(([key]) => {
        return (
          key === filterNutritions ||
          filterNutritions === "all" ||
          key === "calories"
        );
      })
      .sort()
      .reduce(
        (acc, [key, value]) =>
          acc + formattedNutrition(key, value, !!acc.length),
        ""
      );
  };

  return (
    <InfoTable cellSpacing="0" cellPadding="0">
      <caption>Information about the fruit: {fruit.name}</caption>
      <thead>
        <tr>
          {headers.map((h, key) => (
            <th key={key}>{h}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{fruit["name"]}</td>
          <td>{fruit["genus"]}</td>
          <td>{fruit["family"]}</td>
          <td>{fruit["order"]}</td>
          <td>{createListNutrition()}</td>
        </tr>
      </tbody>
    </InfoTable>
  );
};

const formattedNutrition = (
  key: string,
  value: number,
  insertComma = false
) => {
  return `${insertComma ? ", " : ""}${key}: ${value}`;
};

export default FruitInfo;
