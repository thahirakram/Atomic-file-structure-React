import React from "react";
import Input from "../../UI/atoms/Input/index";
import Buttonn from "../../UI/atoms/Button/index";
import { Row, Col } from "react-bootstrap";
function HeaderTemplate() {
  return (
    <section>
      <div className="headerSection">
        <div className="headerLeftBlock">
          <ul>
            <li>Home</li>
            <li>About</li>
          </ul>
        </div>
        <div className="headerRightBlock">
          <Row>
            <Col lg={10}>
              <Input />
            </Col>
            <Col lg={2}>
              <Buttonn />
            </Col>
          </Row>
        </div>
      </div>
    </section>
  );
}

export default HeaderTemplate;
