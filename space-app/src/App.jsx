import { styled } from "styled-components";
import EstilosGlobais from "./componentes/EstilosGlobais";
import Cabecalho from "./componentes/Cabecalho";
import BarraLateral from "./componentes/BarraLateral";
import Banner from "./componentes/Banner";
import Galeria from "./componentes/Galeria";
import ModalZoom from "./componentes/ModalZoom";

import fotos from "./fotos.json";
import { useEffect, useState } from "react";

const FundoGradiente = styled.div`
  background: linear-gradient(
    174.61deg,
    #041833 4.16%,
    #04244f 48%,
    #154580 96.76%
  );
  width: 100%;
  min-height: 100vh;
`;

const AppContainer = styled.div`
  width: 1440px;
  margin: 0 auto;
  max-width: 100%;
`;

const MainContainer = styled.main`
  display: flex;
  gap: 24px;
`;

const ConteudoGaleria = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const App = () => {
  const [fotosGaleria, setFotosGaleria] = useState(fotos);
  const [fotoSelecionada, setFotoSelecionada] = useState(null);
  const [busca, setBusca] = useState("");
  const [tag, setTag] = useState(0);

  useEffect(() => {
    const fotosFiltradas = fotos.filter((foto) => {
      const filtroPorTag = !tag || foto.tagId === tag;
      const fitlroPorBusca =
        !busca || foto.titulo.toLowerCase().includes(busca.toLowerCase());
      return filtroPorTag && fitlroPorBusca;
    });
    setFotosGaleria(fotosFiltradas);
  }, [busca, tag]);

  const aoAlterarFavorito = (foto) => {
    if (foto.id === fotoSelecionada?.id) {
      setFotoSelecionada({
        ...fotoSelecionada,
        favorita: !fotoSelecionada.favorita,
      });
    }

    setFotosGaleria(
      fotosGaleria.map((fotoGaleria) => {
        return {
          ...fotoGaleria,
          favorita:
            fotoGaleria.id === foto.id ? !foto.favorita : fotoGaleria.favorita,
        };
      })
    );
  };

  return (
    <FundoGradiente>
      <EstilosGlobais />
      <AppContainer>
        <Cabecalho busca={busca} setBusca={setBusca} />
        <MainContainer>
          <BarraLateral />
          <ConteudoGaleria>
            <Banner titulo="A galeria mais completa de fotos do espaço!" />
            <Galeria
              aoFotoSelecionada={(foto) => setFotoSelecionada(foto)}
              fotos={fotosGaleria}
              aoAlterarFavorito={aoAlterarFavorito}
              setTag={setTag}
            />
          </ConteudoGaleria>
        </MainContainer>
      </AppContainer>
      <ModalZoom
        aoFechar={() => setFotoSelecionada(null)}
        foto={fotoSelecionada}
        aoAlterarFavorito={aoAlterarFavorito}
      />
    </FundoGradiente>
  );
};

export default App;
