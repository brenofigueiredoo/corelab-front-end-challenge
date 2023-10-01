import Header from "../../components/Header";
import { useEffect, useContext } from "react";
import { Container } from "./style";
import { api, config } from "../../services/api";
import CardNotes from "../../components/CardNotes";
import CardCreateNote from "../../components/CardCreateNote";
import { NoteContext } from "../../contexts/NoteContex";

const HomePage = () => {
  const { setNotes, notes, noteAlter, setAllNotes } = useContext(NoteContext);

  useEffect(() => {
    api.get(`/notes`, config()).then((res) => {
      setNotes(res.data);
      setAllNotes(res.data);
    });
  }, [noteAlter]);

  return (
    <>
      <Header />
      <Container>
        <CardCreateNote />
        <div className="container--main">
          <div className="container--h2">
            <h2>Favoritas</h2>
          </div>
          <div className="container--cards--favorite">
            {notes?.map(
              (elem, index) =>
                elem.is_favorite && (
                  <CardNotes
                    key={index}
                    id={elem.id}
                    color={elem.color}
                    title={elem.title}
                    is_favorite={elem.is_favorite}
                  />
                )
            )}
          </div>
          <div className="container--h2">
            <h2>Outras</h2>
          </div>
          <div className="container--cards--outher">
            {notes?.map(
              (elem, index) =>
                elem.is_favorite !== true && (
                  <CardNotes
                    key={index}
                    id={elem.id}
                    color={elem.color}
                    title={elem.title}
                    is_favorite={elem.is_favorite}
                  />
                )
            )}
          </div>
        </div>
      </Container>
    </>
  );
};
export default HomePage;
