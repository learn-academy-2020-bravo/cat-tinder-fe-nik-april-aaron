import React from "react";
import {
  ListGroup,
  ListGroupItemHeading,
  ListGroupItemText,
  Button,
} from "reactstrap";
const CatIndex = (props) => {
  return (
    <React.Fragment>
      {props.cats.map((cat, index) => {
        return (
          <ListGroup key={index}>
            <ListGroupItemHeading>{cat.name}</ListGroupItemHeading>
            <ListGroupItemText>
              {cat.age} - {cat.enjoys}
            </ListGroupItemText>
          </ListGroup>
        );
      })}
      <Button href="/newcat">Add New Cat</Button>
    </React.Fragment>
  );
};
export default CatIndex;
