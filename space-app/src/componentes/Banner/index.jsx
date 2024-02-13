import styled from "styled-components";

const FigureEstilizada = styled.figure`
  background-image: url("./imagens/Foto destaque.png");
  min-height: 328px;
  flex-grow: 1;
  background-repeat: no-repeat;
  border-radius: 20px;
  display: flex;
  align-items: center;
  margin: 0;
  max-width: 100%;
  background-size: cover;
`;

const TituloEstilizado = styled.h1`
  max-width: 300px;
  font-size: 40px;
  line-height: 48px;
  color: #fff;
  padding: 0 64px;
`;

const Banner = ({ titulo }) => {
  return (
    <FigureEstilizada>
      <TituloEstilizado>{titulo}</TituloEstilizado>
    </FigureEstilizada>
  );
};

export default Banner;
