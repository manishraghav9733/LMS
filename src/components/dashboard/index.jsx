import React from "react";
import { Col, Row } from "antd";
import DetalsCard from "./detailCard";

const DashboardIndex = () => {
  const cardDetail = [
    {
      name: "Current Client",
      value: 10,
      color: "#52C41A",
    },
    {
      name: "Intrested Client",
      value: 45,
      color: "#52C41A",
    },
    {
      name: "Profile Sent",
      value: 23,
      color: "#52C41A",
    },
    {
      name: "Today's Leads",
      value: 43,
      color: "#2295FF",
    },
    {
      name: "Last Week Leads",
      value: 46,
      color: "#2295FF",
    },
    {
      name: "Last Month Leads",
      value: 43,
      color: "#2295FF",
    },
  ];

  return (
    <div className="site-card-wrapper">
      <Row gutter={[24, 16]}>
        {cardDetail.map((item, i) => (
          <Col key={i} span={8}>
            <DetalsCard
              title={item.name}
              value={item.value}
              color={item.color}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};
export default DashboardIndex;
