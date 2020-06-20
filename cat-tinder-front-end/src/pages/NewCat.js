import React, { useState } from "react";
import { Redirect } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import "../App.css";


const NewCat = () => {
  const [cats, setCats] = useState([]);
  const [success, setSuccess] = useState(false)
  const [form, setState] = useState({
    name: "",
    age: "",
    enjoys: "",
  });
 

  const handleChange = (e) => {
    setState({
      //take all the existing form data and,...
      ...form,
      //...add new data to the end as it is typed
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    console.log(success)
    // keeps react from refreshing the page unnessarily
    e.preventDefault();
    // show the current state in the console (should see all cats created)
    console.log(form);
    // set the cats state to include all cats
    // since the current cat state is immutable, we need to create a copy of it and add the new cat to it
    setCats((cats) => [...cats, form]);
    // // send all cats in the state to the backend to post to the database
    pushCats(form)
    setSuccess(true)
  };
  const pushCats = (freshCat) => {
    // fetch URL to post new state of `cats` to database
    return fetch("http://localhost:3000/cats", {
      body: JSON.stringify(freshCat),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    })
    .then(res => {
      if(res.ok) {
        console.log('You did it!')
      }
    })
    // add error catching
    // add success function
  }

  return (
    <>
      <Form>
        <FormGroup>
          <Label htmlFor="name" id="name">
            Name
          </Label>
          <Input
            type="text"
            name="name"
            onChange={handleChange}
            value={form.name}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="age" id="age">
            Age
          </Label>
          <Input
            type="text"
            name="age"
            onChange={handleChange}
            value={form.age}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="enjoys" id="enjoys">
            Enjoys
          </Label>
          <Input
            type="text"
            name="enjoys"
            onChange={handleChange}
            value={form.enjoys}
          />
        </FormGroup>
        <Button onClick={handleSubmit} htmlFor="submit"id="submit">
          Add New Cat
        </Button>
        { success && <Redirect to="/"/> }
      </Form>
    </>
  );
};

export default NewCat;
