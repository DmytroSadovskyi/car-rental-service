import { Oval } from 'react-loader-spinner';
import { Container } from './FallBackLoader.styled';
const FallBackLoader = () => {
  return (
    <Container>
      <Oval
        height={100}
        width={100}
        color="#1976d2"
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#1976d2"
        strokeWidth={4}
        strokeWidthSecondary={4}
      />
    </Container>
  );
};

export default FallBackLoader;
