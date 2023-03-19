"use client";
import { useState } from "react";
import "./search.css";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Search() {
  let [name, setName] = useState("Egor");

  const getName = () => {
    
    console.log(name);
    setName("");
  };

  return (
    <div className="search_container">
      <Form.Control
        type="text"
        placeholder="Поиск"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ width: 200, marginRight: 20 }}
      />
      <Button variant="primary" onClick={getName}>
        Найти
      </Button>
    </div>
  );
}
