import React,{useState} from 'react';
import { Card, Col, Row } from 'antd';

const detailCard = (props) => {

  const cardDetail=[{
  Name :"Current Client",
  Value:10
  },
{
  Name :"Intrested Client",
  Value:45
},
{
   Name:"Profile Sent",
  Value:23
},
{
  Name:"Today's Leads",
  Value:43
},
{
  Name:"Last Week Leads",
  Value:46
}
,
{
  Name:"Last Month Leads",
  Value:43
};
];
 return(
    <div className="site-card-wrapper">
      <Row gutter={16}>
        <Col span={8}>
          <Card title="Card title" bordered={false}>
            Card content
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Card title" bordered={false}>
            Card content
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Card title" bordered={false}>
            Card content
          </Card>
        </Col>
      </Row>
    </div>
}
export default detailCard;