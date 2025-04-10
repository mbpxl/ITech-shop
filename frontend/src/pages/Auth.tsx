import { Card, Container, Form } from "react-bootstrap";

const Auth = () => {
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 54 + "px" }}
    >
      <Card style={{ width: "600px" }} className="p-5">
        <h2 className="m-auto"> Log in</h2>
        <Form className="d-flex flex-column">
          <Form.Control placeholder="Enter email" className="mt-2" />
          <Form.Control placeholder="Enter password" className="mt-2" />
        </Form>
      </Card>
    </Container>
  );
};

export default Auth;
