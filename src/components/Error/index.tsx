import { Container, TextArea } from "./styles";

const Error = ({ text }: { text: string }) => {
  return (
    <Container>
      <TextArea>{text}</TextArea>
    </Container>
  );
};

export default Error;
