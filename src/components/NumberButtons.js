import { ButtonToolbar, ButtonGroup, Button } from "react-bootstrap";
import { Numbers } from "../styles.js";
const NumberButtons = () => {
  return (
    <Numbers>
      <ButtonGroup size="xl">
        <Button variant="dark">1</Button>
      </ButtonGroup>
      <ButtonGroup size="xl">
        <Button variant="dark">2</Button>
      </ButtonGroup>
      <ButtonGroup size="xl">
        <Button variant="dark">3</Button>
      </ButtonGroup>
      <ButtonGroup size="xl">
        <Button variant="dark">4</Button>
      </ButtonGroup>
      <ButtonGroup size="xl">
        <Button variant="dark">5</Button>
      </ButtonGroup>
      <ButtonGroup size="xl">
        <Button variant="dark">6</Button>
      </ButtonGroup>
      <ButtonGroup size="xl">
        <Button variant="dark">7</Button>
      </ButtonGroup>
      <ButtonGroup size="xl">
        <Button variant="dark">8</Button>
      </ButtonGroup>
      <ButtonGroup size="xl">
        <Button variant="dark">9</Button>
      </ButtonGroup>
    </Numbers>
  );
};

export default NumberButtons;
