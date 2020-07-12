import React, { useState } from "react";

import { Card, Modal } from "antd";
import StatusDetalis from "./StatusDetails";

const DetalsCard = (props) => {
  const [selectedData, setSelectedData] = useState([]);
  const [modalView, setModalView] = useState(false);

  const onCardClick = (data) => {
    console.log("selected status", data);
    setSelectedData(data);
    setModalView(true);
  };

  const closeModal = () => {
    setModalView(false);
  };

  return (
    <div>
      <Card
        title={props.title}
        style={{
          width: 240,
          textAlign: "center",
          borderTop: `4px solid #52C41A`,
          cursor: "pointer",
        }}
        onClick={() => onCardClick(props.data)}
      >
        <p>{props.value}</p>
      </Card>

      <Modal
        style={{ minWidth: "800px" }}
        title="Leads Status data"
        closable={true}
        footer={null}
        onCancel={closeModal}
        maskClosable={false}
        visible={modalView}
        destroyOnClose={true}
      >
        <StatusDetalis data={selectedData} />
      </Modal>
    </div>
  );
};
export default DetalsCard;
