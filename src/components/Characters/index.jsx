import { CharCard } from "../CharCard";
import "./style.css";

export const Characters = ({ characterList }) => {
  console.log(characterList);
  const list = characterList.results?.map((char) => (
    <CharCard
      name={char.name}
      id={char.id}
      img={char.image}
      status={char.status}
    />
  ));

  return <ul>{list}</ul>;
};
