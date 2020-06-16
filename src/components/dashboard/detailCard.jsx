import React, { useState } from "react";

import { Card, Col, Row } from "antd";

const DetalsCard = (props) => {
  return (
    <div>
      <Card
        title={props.title}
        style={{
          width: 240,
          textAlign: "center",
          borderTop: `4px solid ${props.color}`,
        }}
      >
        <p>{props.value}</p>
      </Card>
    </div>
  );
};
export default DetalsCard;
