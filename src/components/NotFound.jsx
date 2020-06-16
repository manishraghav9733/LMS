import React from "react";
import { Result, Button } from "antd";
import history from "../history";

const NotFound = () => {
  const backToHome = () => {
    history.push("/dashboard");
  };

  return (
    <div>
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist. We are working on it"
        extra={
          <Button onClick={backToHome} type="primary">
            Back Home
          </Button>
        }
      />
    </div>
  );
};

export default NotFound;
