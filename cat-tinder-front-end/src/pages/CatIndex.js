import React,{useState, useEffect} from "react";
import "../App.css";
import {
  ListGroup,
  ListGroupItemHeading,
  ListGroupItemText,
  Button,
} from "reactstrap";


const CatIndex = () => {
  const [newCats, setNewCats] = useState([])
  //useEffect hook lets us GET all cats from the database when the component loads
  //the empty array after the comma means that it will get triggered automatically only once
  useEffect(() =>{
    grabCats()},[])

  async function grabCats () {
    try {
      //GET data from the backend
      let response = await fetch("http://localhost:3000/cats")
      let data = await response.json();
      //all good?
      if(response.status === 200) {
        //check the console to make sure we have all the cats
        console.log("data", data)
        //populate the newCats state array with data
        setNewCats(data)
      }
    } catch (err) {
        console.log(err)
    }
  }
  return (
    <React.Fragment>
      
      {newCats.map((cat, index) => {
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
