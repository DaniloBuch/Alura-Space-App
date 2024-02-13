import styled from "styled-components";
import CampoTexto from "../CampoTexto";

const HeaderEstilizado = styled.header`
  padding: 60px 0;
  display: flex;
  justify-content: space-between;
  img {
    max-width: 212px;
  }
`;

const Cabecalho = ({ setBusca }) => {
  return (
    <HeaderEstilizado>
      <img src="/imagens/Logo desktop e tablet.png" alt="Logo" />
      <CampoTexto setBusca={setBusca} />
    </HeaderEstilizado>
  );
};

export default Cabecalho;
