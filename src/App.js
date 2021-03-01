import "./App.css";
import NumberButtons from "./components/NumberButtons.js";
import Boards from "./components/Boards.js";
import { Rows, AppWrapper, Title } from "./styles.js";
// import MakeSolution from "./components/MakeSolution.js";
// import PrintBoard from "./components/PrintBoard.js";
// import { Container, Row, Col } from "react-bootstrap";

function App() {
  return (
    <>
      <Title> Play Sudoko Game</Title>
      <AppWrapper>
        <Boards />
        {/* <div>
          <NumberButtons />
        </div> 
        Removed by Salwa 
        */}
      </AppWrapper>
    </>
  );
}

export default App;
