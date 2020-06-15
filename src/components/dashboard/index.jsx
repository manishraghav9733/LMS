import React from "react";
import { Card, Col, Row } from 'antd';

const dashboardIndex =()=>{
    return(
        <div className="site-card-wrapper">
        <Row gutter={16}>
          <Col span={8}>
            <Card>
            <card title='clients' value='5' />
            </Card>
          </Col>
          </Row>
      </div>
    )
};
export default dashboardIndex;