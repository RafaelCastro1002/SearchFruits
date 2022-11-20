import { Container } from "./styles";

const Card = (props: React.PropsWithChildren<any>) => {
  return <Container>{props.children}</Container>;
};

export default Card;
