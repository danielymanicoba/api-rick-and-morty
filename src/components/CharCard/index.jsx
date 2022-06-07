import { Card } from "./style";

export const CharCard = ({ name, id, img, status }) => {
  return (
    <Card key={id} status={status}>
      <h2>{name}</h2>
      <img src={img} alt="imagem do personagem" />
    </Card>
  );
};
