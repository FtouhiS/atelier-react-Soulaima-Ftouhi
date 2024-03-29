import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { addEvent } from "../service/api";

export default function AddEvent() {
  const navigate = useNavigate();

  const [eventItem, setEventItem] = useState({
    name: "",
    description: "",
    img: "",
    price: 0,
    nbTickets: 0,
    nbParticipants: 0,
    like: false,
  });

  const onInputChange = (e) => {
    setEventItem({
      ...eventItem,
      [e.target.name]: e.target.value,
    });
  };

  const onFileChange = (e) => {
    setEventItem({
      ...eventItem,
      [e.target.name]: e.target.files[0].name,
    });
  };

  const handleAddEvent = async () => {
    try {
      await addEvent(eventItem);
      navigate("/events");
    } catch (error) {
      console.error("Error adding event:", error);
    }
  };

  const handleCancel = () => {
    navigate("/events");
  };

  return (
    <Container style={{ marginTop: "30px" }}>
      <h2>Add a new Event to your Event List</h2>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            name="name"
            type="text"
            placeholder="Enter a Name"
            value={eventItem.name}
            onChange={(e) => {
              onInputChange(e);
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter description "
            name="description"
            value={eventItem.description}
            onChange={(e) => {
              onInputChange(e);
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            name="price"
            value={eventItem.price}
            onChange={(e) => {
              onInputChange(e);
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Number of Tickets</Form.Label>
          <Form.Control
            type="number"
            name="nbTickets"
            value={eventItem.nbTickets}
            onChange={(e) => {
              onInputChange(e);
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Image</Form.Label>
          <Form.Control type="file" name="img" onChange={(e) => onFileChange(e)} />
        </Form.Group>
        <Button variant="primary" onClick={handleAddEvent}>
          Add an Event
        </Button>
        <Button variant="secondary" onClick={handleCancel}>
          Cancel
        </Button>
      </Form>
    </Container>
  );
}
