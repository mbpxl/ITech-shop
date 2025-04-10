import { useContext } from "react";
import { Context } from "../main";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { SHOP_ROUTE } from "../utils/consts";
import { Button } from "react-bootstrap";
import { observer } from "mobx-react-lite";

const NavBar = observer(() => {
  const context = useContext(Context);

  if (!context) {
    return null;
  }

  const { user } = context;

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <NavLink to={SHOP_ROUTE} style={{ color: "white" }}>
            IBuyBox
          </NavLink>
          {user._isAuth ? (
            <Nav className="ml-auto" style={{ color: "white" }}>
              <Button variant={"outline-light"}>Admin panel</Button>
              <Button variant={"outline-light"} style={{ marginLeft: "10px" }}>
                Log out
              </Button>
            </Nav>
          ) : (
            <Nav className="ml-auto" style={{ color: "white" }}>
              <Button
                variant={"outline-light"}
                onClick={() => user.setIsAuth(true)}
              >
                Log in
              </Button>
            </Nav>
          )}
        </Container>
      </Navbar>
    </>
  );
});

export default NavBar;
