import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Context } from "../main";
import { Card, Row } from "react-bootstrap";

const BrandBar = observer(() => {
  const context = useContext(Context);
  if (!context) {
    return null;
  }
  const { device } = context;

  return (
    <Row className="d-flex">
      {device._brands.map((brand) => (
        <Card
          style={{ cursor: "pointer" }}
          key={brand.id}
          className="p-3"
          onClick={() => device.setSelectedBrand(brand)}
          border={brand.id === device.selectedBrand?.id ? "danger" : "light"}
        >
          {brand.name}
        </Card>
      ))}
    </Row>
  );
});

export default BrandBar;
