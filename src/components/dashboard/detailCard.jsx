import React,{useState} from 'react';
import { Card, Col, Row } from 'antd';
import dashboardIndex from './dashboardIndex


const detailCard = (props) => { 
    return(
    <div className="site-card-wrapper">
      <Row gutter={16}>
        <Col span={8}>
          <Card title="{props.title}" bordered={false}>
            <p>{props.value}</p>
          </Card>
        </Col>
        </Row>
    </div>,
      );
}
export default detailCard;