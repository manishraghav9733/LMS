import React,{useState} from 'react';
import { Card, Col, Row } from 'antd';
import index from './index'


const card = (props) => { 
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
export default card;