import { INoteCreate, NoteContext } from "../../contexts/NoteContex";
import { Container } from "./style";
import { BiStar } from "react-icons/bi";
import { useContext } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const CardCreateNote = () => {
  const { onCreateNote, isfavorite, setIsFavorite } = useContext(NoteContext);

  const schema = yup.object({
    title: yup.string().required("Título é obrigatório"),
  });

  const { register, handleSubmit } = useForm<INoteCreate>({
    resolver: yupResolver(schema),
  });

  return (
    <Container>
      <div className="container--header">
        <form onSubmit={handleSubmit(onCreateNote)}>
          <div>
            <input type="text" placeholder="Título" {...register("title")} />
            <button
              type="button"
              className="button--isfavorite"
              onClick={() => setIsFavorite(!isfavorite)}
            >
              {isfavorite ? (
                <img
                  className="img--isfavorite"
                  src="/star.png"
                  alt="Estrela"
                />
              ) : (
                <BiStar size="22px" color="#51646E" />
              )}
            </button>
          </div>
          <button className="button--submit" type="submit">
            Criar nota...
          </button>
        </form>
      </div>
    </Container>
  );
};

export default CardCreateNote;
