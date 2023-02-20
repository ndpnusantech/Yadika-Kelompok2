import "./card.css";
import Card from 'react-bootstrap/Card';
import {Row, Col} from "react-bootstrap"

function Cards() {
  return (
    <div className="set-card">
    <Row className="card-row">
        <Col md={3}>
    <Card className="card">
      <Card.Img className="card-img" src="../images/xmen.jfif" />
      <Card.Body className="card-body">
        <Card.Title>Fast And Furious</Card.Title>
        <Card.Text className="card-txt" >
          2009 - Laga
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
        <Col md={3}>
    <Card className="card">
      <Card.Img  src="../images/joker.jfif" />
      <Card.Body className="card-body">
        <Card.Title>Fast And Furious</Card.Title>
        <Card.Text className="card-txt" >
          2009 - Laga
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
        <Col md={3}>
    <Card className="card">
      <Card.Img  src="../images/jw.jfif" />
      <Card.Body className="card-body">
        <Card.Title>Fast And Furious</Card.Title>
        <Card.Text className="card-txt" >
          2009 - Laga
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
        <Col md={3}>
    <Card className="card">
      <Card.Img  src="../images/jw2.jfif" />
      <Card.Body className="card-body">
        <Card.Title>Fast And Furious</Card.Title>
        <Card.Text className="card-txt" >
          2009 - Laga
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
       
   
    </Row>
    </div>
  );
}

export default Cards;