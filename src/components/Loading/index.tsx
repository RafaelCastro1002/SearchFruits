import LoadingGif from "../../assets/loading.gif";
import { Container, Image } from "./styles";

const Loading = () => {
  return (
    <Container>
      <Image src={LoadingGif} />
    </Container>
  );
};

export default Loading;
