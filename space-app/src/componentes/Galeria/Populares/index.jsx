import styled from "styled-components";
import Titulo from "../../Titulo";
import fotos from "./fotos-populares.json";

const ColunaFotos = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Imagem = styled.img`
  max-width: 212px;
  border-radius: 20px;
`;
const Botao = styled.button`
  cursor: pointer;
  background-color: transparent;
  color: #fff;
  line-height: 24px;
  font-size: 20px;
  border: 2px solid #c98cf1;
  border-radius: 10px;
  font-weight: 700;
  width: 100%;
  padding: 14px 29px;
  margin-top: 24px;
`;

const Populares = () => {
  return (
    <section>
      <Titulo $alinhamento="center">Populares</Titulo>
      <ColunaFotos>
        {fotos.map((foto) => (
          <Imagem src={foto.path} alt={foto.alt} key={foto.id} />
        ))}
      </ColunaFotos>
      <Botao>Ver mais</Botao>
    </section>
  );
};

export default Populares;
