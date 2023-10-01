import { AiOutlineSearch } from "react-icons/ai";
import { Container } from "./style";
import { useContext, useState } from "react";
import { NoteContext } from "../../contexts/NoteContex";

const Header = () => {
  const [isActive, setActive] = useState<boolean>(false);
  const [, setValue] = useState<string>("");

  const { setNotes, onFilterNotes, allNotes } = useContext(NoteContext);

  const searchNotes = (value: string) => {
    setValue(value);

    if (value === "") {
      setNotes(allNotes);
    } else {
      onFilterNotes(value);
    }
  };

  const closeMenu = () => {
    setActive(false);
  };

  return (
    <Container>
      <div className="container--logo">
        <img
          src="/note-image.png"
          alt="Image"
          className="container--logo--note_image"
        />
        <a href="/">
          <h1 className="container--logo--title">CoreNotes</h1>
        </a>

        <div className="container--input--search">
          <input
            type="text"
            placeholder="Pesquisar notas"
            className="container--input"
            onChange={(e) => searchNotes(e.target.value)}
          />
          <AiOutlineSearch size="18px" color="#9E9E9E" />
        </div>
      </div>

      <nav className={isActive ? "active" : ""}>
        <a href="/entrar" onClick={closeMenu}>
          Entrar
        </a>
        <a href="/cadastrar" onClick={closeMenu}>
          Cadastrar
        </a>
        <a
          href="/login"
          onClick={() => window.localStorage.removeItem("authToken")}
        >
          Sair
        </a>
      </nav>

      <div
        aria-expanded={isActive ? "true" : "false"}
        aria-haspopup="true"
        aria-label={isActive ? "Fechar menu" : "Abrir menu"}
        className={isActive ? "menu active" : "menu"}
        onClick={() => {
          setActive(!isActive);
        }}
      ></div>
    </Container>
  );
};

export default Header;
