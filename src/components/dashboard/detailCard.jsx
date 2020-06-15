import React,{useState} from 'react';
import { Route, Redirect } from "react-router-dom";
import { Card, Col, Row } from 'antd';


const card = (props) => { 

    return(
        <div>
          <Card title="client" extra={<a href="#">More</a>} style={{ width: 300 }}>
            <h5>3 clients</h5>
          </Card>
        </div>
      );
}
export default card;