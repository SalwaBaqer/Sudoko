import "./App.css";
import MakeSolution from "./components/MakeSolution.js";
import PrintBoard from "./components/PrintBoard.js";
import { Container, Row, Col } from "react-bootstrap";
import NumberButtons from "./components/NumberButtons.js";
import Boards from "./components/Boards.js";
import { Rows, AppWrapper, Title } from "./styles.js";

function App() {
  return (
    <>
      <Title> Play Sudoko Game</Title>
      <AppWrapper>
        <Boards />
        <div>
          <NumberButtons />
        </div>
      </AppWrapper>
    </>
  );
}

export default App;
