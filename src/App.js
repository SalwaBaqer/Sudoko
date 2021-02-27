import "./App.css";
import MakeSolution from "./components/MakeSolution.js";
import PrintBoard from "./components/PrintBoard.js";
import Boards from "./components/Boards.js";
import SquareGrid from "react-native-square-grid";

function App() {
  return (
    <div>
      <Boards />

      <SquareGrid rows={9} columns={9} />
    </div>
  );
}

export default App;
