import { Container } from "./style";
import { MdOutlineModeEdit } from "react-icons/md";
import { BiSolidColorFill } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";
import { BiStar } from "react-icons/bi";
import { GiConfirmed } from "react-icons/gi";
import { NoteContext } from "../../contexts/NoteContex";
import { useContext, useState } from "react";
import ColorModal from "../ColorModal";

interface INoteProps {
  id: string;
  title: string;
  color: string | undefined;
  is_favorite: boolean;
}

export interface IColorOptions {
  [key: string]: string;
}

const CardNotes = ({ id, title, color, is_favorite }: INoteProps) => {
  const [editing, setEditing] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const { onDeleteNote, onFavoriteNote, onAlterTitle } =
    useContext(NoteContext);

  const colorOptions: IColorOptions = {
    LIGTH_BLUE: "#BAE2FF",
    AQUAMARINE: "#B9FFDD",
    LIGTH_YELLOW: "#FFE8AC",
    LIGTH_PINK: "#FFCAB9",
    LIGTH_RED: "#F99494",
    BLUE: "#9DD6FF",
    PURPLE: "#ECA1FF",
    GREEN: "#DAFF8B",
    LIGTH_SALMON: "#FFA285",
    SILVER: "#CDCDCD",
    GRAY: "#979797",
    OLIVE: "#A99A7C",
  };

  const cardStyle = {
    background: colorOptions[color as keyof IColorOptions] || "white",
  };

  return (
    <Container style={cardStyle}>
      <div
        className="container--header"
        style={
          color == undefined
            ? { borderBottom: "1px solid #d9d9d9" }
            : { borderBottom: "1px solid #ffff" }
        }
      >
        {editing ? (
          <div className="container--input--title">
            <input
              className="input--alter-title"
              type="text"
              placeholder={title}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button
              className="button--save--alter-title"
              type="button"
              onClick={() => {
                setEditing(!editing);
                onAlterTitle(inputValue, id);
              }}
            >
              <GiConfirmed size="16px" color="#51646E" />
            </button>
          </div>
        ) : (
          <h1>{title}</h1>
        )}

        <button
          type="button"
          className="button--alter-favorite"
          onClick={() => onFavoriteNote(!is_favorite, id)}
        >
          {is_favorite ? (
            <img src="/star.png" alt="Estrela" />
          ) : (
            <BiStar size="22px" color="#51646E" />
          )}
        </button>
      </div>

      <div className="container--body">
        <h3>Clique ou arraste o arquivo para esta área para fazer upload</h3>

        <div className="container--body--footer">
          <div>
            <button
              type="button"
              className="button--alter-title"
              onClick={() => setEditing(!editing)}
            >
              <MdOutlineModeEdit size="24.9px" color="#51646E" />
            </button>
            <button
              type="button"
              className="button--alter-color"
              onClick={() => setModalIsOpen(!modalIsOpen)}
            >
              <BiSolidColorFill size="22px" color="#51646E" />
            </button>
          </div>

          <button
            className="button--delete"
            type="button"
            onClick={() => onDeleteNote(id)}
          >
            <IoMdClose size="22px" color="#51646E" />
          </button>
        </div>
      </div>

      <div className="container--modal--color">
        <ColorModal
          noteId={id}
          isOpen={modalIsOpen}
          closeModal={() => setModalIsOpen(!modalIsOpen)}
          colorOptions={colorOptions}
        />
      </div>
    </Container>
  );
};

export default CardNotes;
