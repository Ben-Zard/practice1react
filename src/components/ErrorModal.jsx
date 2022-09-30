import styled from "styled-components";
import Card from "./UI/Card";
const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background: rgba(0, 0, 0, 0.75);
  overflow: hidden;

& .modal {
  position: fixed;
  top: 30vh;
  left: 10%;
  width: 80%;
  z-index: 100;
  overflow: hidden;
}

& .header {
  background: #4f005f;
  padding: 1rem;
}

& .header h2 {
  margin: 0;
  color: white;
}

& .content {
  padding: 1rem;
}

& .actions {
  padding: 1rem;
  display: flex;
  justify-content: flex-end;
}

& button {
    background: #494949;
    border-radius: 5px;
    color: white;
    width: 20%;
    height: 10%;

}

@media (min-width: 768px) {
  .modal {
    left: calc(50% - 20rem);
    width: 40rem;
  }
}
`;

const Modal =props => {
    
}
const ErrorModal = ({onerror}) => {
  return (
    <div  >
    <Container onClick={() => onerror(false)}>
    <Card className = "modal">
      <div className="header">
        <h2>Wrong input</h2>
      </div>
      <div className = "content">
        <p>enter a valid name and age </p>
      </div>
      <div className = "actions">
      <button onClick={() => onerror(false)}>Close</button>
      </div>
    </Card>
    </Container>
    </div>
  );
};

export default ErrorModal;
