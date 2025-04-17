import { Button, Card, Container, Form, Row } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/consts";

const Auth = () => {
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 54 + "px" }}
    >
      <Card style={{ width: "600px" }} className="p-5">
        <h2 className="m-auto"> {isLogin ? "Log in" : "Sign Up"}</h2>
        <Form className="d-flex flex-column">
          <Form.Control placeholder="Enter email..." className="mt-2" />
          <Form.Control
            placeholder="Enter password..."
            type="password"
            className="mt-2"
          />
          <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
            {isLogin ? (
              <div>
                No account? <NavLink to={REGISTRATION_ROUTE}>Sign Up!</NavLink>
              </div>
            ) : (
              <div>
                Have account? <NavLink to={LOGIN_ROUTE}>Log in</NavLink>
              </div>
            )}
            <Button className="mt-3" variant="outline-success">
              {isLogin ? "Log in" : "Sign up"}
            </Button>
          </Row>
        </Form>
      </Card>
    </Container>
  );
};

export default Auth;
