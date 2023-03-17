import "./cardFavorit.css";
import Card from "react-bootstrap/Card";
import { Row, Col } from "react-bootstrap";
import { data } from "../../Data/dataCards";

const CardFavorit = () => {
  return (
    <div className="set-card">
      <Row className="card-row">
        {data.map((data) => (
          <Col md="auto">
            <a href="/trailer">
              <button className="hpsFav">Hapus dari favorite</button>

              <Card className="card" id={data.id}>
                <Card.Img className="card-img" src={data.img} />
                <Card.Body className="card-body">
                  <Card.Text className="card-txt">{data.status}</Card.Text>
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
};

export default CardFavorit;
