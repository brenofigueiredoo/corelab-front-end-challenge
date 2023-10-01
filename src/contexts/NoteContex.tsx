import { ReactNode, createContext, useState } from "react";
import { api, config } from "../services/api";
import { toast } from "react-toastify";

interface IContextProviderProps {
  children: ReactNode;
}

export interface INote {
  id: string;
  title: string;
  color: string;
  is_favorite: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface INoteCreate {
  title: string;
  is_favorite?: boolean;
}

export interface INoteUpdate {
  title?: string;
  color?: string;
  is_favorite?: boolean;
}

interface INoteContext {
  setNotes: React.Dispatch<React.SetStateAction<INote[] | undefined>>;
  notes: INote[] | undefined;
  setAllNotes: React.Dispatch<React.SetStateAction<INote[] | undefined>>;
  allNotes: INote[] | undefined;
  onFavoriteNote: (is_favorite: boolean, noteId: string) => void;
  onCreateNote: (data: INoteCreate) => void;
  isfavorite: boolean;
  setIsFavorite: React.Dispatch<React.SetStateAction<boolean>>;
  noteAlter: boolean;
  setNoteAlter: React.Dispatch<React.SetStateAction<boolean>>;
  onDeleteNote: (noteId: string) => void;
  onAlterTitle: (title: string, noteId: string) => void;
  onAlterColor: (color: string, noteId: string) => void;
  onFilterNotes: (value: string) => void;
}

export const NoteContext = createContext<INoteContext>({} as INoteContext);

export const NoteProvider = ({ children }: IContextProviderProps) => {
  const [notes, setNotes] = useState<INote[]>();
  const [allNotes, setAllNotes] = useState<INote[]>();
  const [isfavorite, setIsFavorite] = useState<boolean>(false);
  const [noteAlter, setNoteAlter] = useState<boolean>(false);

  const onCreateNote = (data: INoteCreate) => {
    data.is_favorite = isfavorite;

    api
      .post("/notes", data, config())
      .then((res) => {
        console.log(res);
        setNoteAlter(!noteAlter);
        toast.success("Nota adicionada!");
      })
      .catch((err) => {
        console.log(err.response.data.message);
        toast.error("Erro ao adicionar.");
      });
  };

  const onDeleteNote = (noteId: string) => {
    api
      .delete(`/notes/${noteId}`, config())
      .then((res) => {
        console.log(res);
        setNoteAlter(!noteAlter);
        toast.success("Nota deletada!");
      })
      .catch((err) => {
        console.log(err.response.data.message);
        toast.error("Erro ao deletar.");
      });
  };

  const onFavoriteNote = (is_favorite: boolean, noteId: string) => {
    const data = {
      is_favorite: is_favorite,
    };

    api
      .patch(`/notes/${noteId}`, data, config())
      .then((res) => {
        console.log(res);
        setNoteAlter(!noteAlter);
      })
      .catch((err) => {
        console.log(err.response.data.message);
      });
  };

  const onAlterTitle = (title: string, noteId: string) => {
    const data = {
      title: title,
    };
    api
      .patch(`/notes/${noteId}`, data, config())
      .then((res) => {
        console.log(res);
        setNoteAlter(!noteAlter);
      })
      .catch((err) => {
        console.log(err.response.data.message);
      });
  };

  const onAlterColor = (color: string, noteId: string) => {
    const data = {
      color: color,
    };
    api
      .patch(`/notes/${noteId}`, data, config())
      .then((res) => {
        console.log(res);
        setNoteAlter(!noteAlter);
      })
      .catch((err) => {
        console.log(err.response.data.message);
      });
  };

  const onFilterNotes = (value: string) => {
    const notesFiltered = notes!.filter((elem) =>
      elem.title.toLowerCase().includes(value.toLowerCase())
    );

    value !== undefined && setNotes(notesFiltered);
  };

  return (
    <NoteContext.Provider
      value={{
        notes,
        setNotes,
        onFavoriteNote,
        onCreateNote,
        isfavorite,
        setIsFavorite,
        noteAlter,
        setNoteAlter,
        onDeleteNote,
        onAlterTitle,
        onAlterColor,
        onFilterNotes,
        setAllNotes,
        allNotes,
      }}
    >
      {children}
    </NoteContext.Provider>
  );
};
export default NoteProvider;
