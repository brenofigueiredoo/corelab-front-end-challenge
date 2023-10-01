import { useContext } from "react";
import { Container } from "./style";
import { NoteContext } from "../../contexts/NoteContex";
import { IColorOptions } from "../CardNotes";

interface IPropsModal {
  noteId: string;
  isOpen: boolean;
  closeModal: () => void;
  colorOptions: IColorOptions;
}

const ColorModal = ({
  noteId,
  isOpen,
  closeModal,
  colorOptions,
}: IPropsModal) => {
  const { onAlterColor } = useContext(NoteContext);

  return (
    <Container style={isOpen ? { display: "flex" } : { display: "none" }}>
      <div className="container--color--options">
        {Object.keys(colorOptions).map((key) => (
          <button
            key={key}
            className="color-option"
            onClick={() => {
              onAlterColor(key, noteId);
              closeModal();
            }}
            style={{
              backgroundColor: colorOptions[key],
            }}
          ></button>
        ))}
      </div>
    </Container>
  );
};

export default ColorModal;
