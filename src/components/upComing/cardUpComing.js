import "../Card/card.css";
import Card from "react-bootstrap/Card";
import { Row, Col } from "react-bootstrap";
import { dataUpComing } from "../../Data/dataUpComing";

const CardUpComing = () => {
  return (
    <div className="set-card">
      <Row className="card-row">
        {dataUpComing.map((data) => (
          <Col md="auto">
            <a href="/trailer">
              <Card className="card" id={data.id}>
                <Card.Img className="card-img" src={data.img} />
                <Card.Body className="card-body">
                  <Card.Title>{data.tittle}</Card.Title>
                  <Card.Text className="card-txt">{data.text}</Card.Text>
                </Card.Body>
              </Card>
            </a>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default CardUpComing;
