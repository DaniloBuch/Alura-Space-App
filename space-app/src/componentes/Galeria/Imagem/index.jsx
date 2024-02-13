import styled from "styled-components";
import BotaoIcone from "../../BotaoIcone";

const Figure = styled.figure`
  width: ${(props) => (props.$expandida ? "90%" : "460px")};
  max-width: 100%;
  margin: 0px;
  display: flex;
  flex-direction: column;

  & > img {
    max-width: 100%;
    border-radius: 20px 20px 0 0;
  }

  figcaption {
    background-color: #001634;
    border-radius: 0px 0px 20px 20px;
    color: white;
    box-sizing: border-box;
    padding: 12px;

    h3 {
      font-family: "GandhiSansBold";
    }
    p {
      flex-grow: 1;
    }
    h3,
    p {
      margin: 0;
      line-height: 24px;
    }
  }
`;

const Rodape = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Imagem = ({
  foto,
  expandida = false,
  aoZoomSolicitado,
  aoAlterarFavorito,
}) => {
  const iconeFavorito = foto.favorita
    ? "/icones/favorito-ativo.png"
    : "/icones/favorito.png";

  return (
    <Figure $expandida={expandida} id={`foto-${foto.id}`}>
      <img src={foto.path} alt={foto.titulo} />
      <figcaption>
        <h3>{foto.titulo}</h3>
        <Rodape>
          <p>{foto.fonte}</p>
          <BotaoIcone onClick={() => aoAlterarFavorito(foto)}>
            <img src={iconeFavorito} />
          </BotaoIcone>
          {!expandida && (
            <BotaoIcone
              aria-hidden={expandida}
              onClick={() => aoZoomSolicitado(foto)}
            >
              <img src="/icones/expandir.png" alt="Icone de expandir" />
            </BotaoIcone>
          )}
        </Rodape>
      </figcaption>
    </Figure>
  );
};

export default Imagem;