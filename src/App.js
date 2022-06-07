import { useEffect, useState } from "react";
import { Characters } from "./components/Characters";
import { CardsContainer, StyledButton, StyledHeader } from "./globalStyle";
import { api, clearBaseURL } from "./api/api.js";

function App() {
  const [characterList, setCharacterList] = useState([]);
  const [currentPage, setCurrentPage] = useState(
    "https://rickandmortyapi.com/api/character/"
  );

  useEffect(() => {
    api.get(currentPage).then((response) => {
      setCharacterList(response.data);
    });
  }, [currentPage]);

  return (
    <>
      <StyledHeader>
        <h1 className="mainTitle">PERSONAGENS</h1>

        <StyledButton
          onClick={() => setCurrentPage(clearBaseURL(characterList.info.prev))}
        >
          Página anterior
        </StyledButton>
        <StyledButton
          onClick={() => setCurrentPage(clearBaseURL(characterList.info.next))}
        >
          Pŕoxima página
        </StyledButton>
      </StyledHeader>
      <CardsContainer>
        <Characters characterList={characterList} />
      </CardsContainer>
    </>
  );
}

export default App;
