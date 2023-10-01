import { ToastContainer } from "react-toastify";
import "./App.css";
import UserProvider from "./contexts/UserContext";
import RoutersMain from "./routes";
import "react-toastify/dist/ReactToastify.min.css";
import NoteProvider from "./contexts/NoteContex";

const App = () => {
  return (
    <UserProvider>
      <NoteProvider>
        <RoutersMain />
        <ToastContainer />
      </NoteProvider>
    </UserProvider>
  );
};

export default App;
