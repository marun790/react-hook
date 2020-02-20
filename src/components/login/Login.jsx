import React, { useState } from 'react'
import { Alert, Button } from "react-bootstrap";


export default function Login() {
    const [show, setShow] = useState(true);

    return (
        <Container>
        <Row>
          <Col>1 of 2</Col>
          <Col>2 of 2</Col>
        </Row>
        <Row>
          <Col>1 of 3</Col>
          <Col>2 of 3</Col>
          <Col>3 of 3</Col>
        </Row>
      </Container>
    );
  }