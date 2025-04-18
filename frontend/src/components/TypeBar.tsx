import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Context } from "../main";
import { ListGroup } from "react-bootstrap";

const TypeBar = observer(() => {
  const context = useContext(Context);
  if (!context) {
    return null;
  }
  const { device } = context;
  return (
    <ListGroup>
      {device._types.map((type) => (
        <ListGroup.Item
          key={type.id}
          style={{ cursor: "pointer" }}
          active={type.id === device.selectedType?.id}
          onClick={() => device.setSelectedType(type)}
        >
          {type.name}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
});

export default TypeBar;
