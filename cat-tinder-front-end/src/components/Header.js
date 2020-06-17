import React from "react";
import { Jumbotron, Container } from "reactstrap";

const Header = () => {
  return (
    <React.Fragment>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">Cat Tindah</h1>
          <p className="lead">Its like Tindah but for cats!</p>
        </Container>
      </Jumbotron>
    </React.Fragment>
  );
};
export default Header;
