import React, { useState } from "react";
import axios from "axios";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

function AddWilder() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [skill, setSkill] = useState("");
  const [error, setError] = useState("");

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add a Wilder
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Wilder profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            onSubmit={async (e) => {
              e.preventDefault();
              try {
                const response = await axios.post(
                  "http://localhost:5000/api/wilders/",
                  {
                    name,
                    city,
                    skill,
                  }
                );
                console.log(response.data);
                setShow(false);
                setName("");
                setCity("");
                setSkill("");
                setError("");
              } catch (error) {
                setError(error.response.data.error);
              }
            }}
          >
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label htmlFor="name-input">Name:{""}</Form.Label>
              <Form.Control
                id="name-input"
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label for="disabledTextInput">City:{""}</Form.Label>
              <Form.Control
                id="city-input"
                type="text"
                placeholder="Type the city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Skills:{""}</Form.Label>
              <Form.Control
                id="skill-input"
                type="text"
                placeholder="Type the skill"
                value={skill}
                onChange={(e) => setSkill(e.target.value)}
                required
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          {error !== "" && <p>{error}</p>}&nbsp;
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button type="submit" variant="primary" onClick={handleClose}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddWilder;
