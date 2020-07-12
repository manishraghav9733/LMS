import React, { useState } from "react";

import { Card, Col, Row } from "antd";

const DetalsCard = (props) => {
  const onCardClick = (data) => {
    console.log("selected status", data);
  };
  return (
    <div>
      <Card
        title={props.title}
        style={{
          width: 240,
          textAlign: "center",
          borderTop: `4px solid #52C41A`,
        }}
        onClick={() => onCardClick(props.data)}
      >
        <p>{props.value}</p>
      </Card>
    </div>
  );
};
export default DetalsCard;
