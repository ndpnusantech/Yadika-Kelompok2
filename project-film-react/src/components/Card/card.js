import "./card.css";
import Card from 'react-bootstrap/Card';
import {Row, Col} from "react-bootstrap"
import { data } from "/project-film-industri/Yadika-Kelompok2/project-film-react/src/Data/dataCard"


function Cards() {
  return (
    <div className="set-card">
    <Row className="card-row">
    {data.map((data) => (
        <Col md="auto">
    <Card className="card" id={data.id}>
      <Card.Img className="card-img" src={data.img} />
      <Card.Body className="card-body">
        <Card.Title >{data.tittle}</Card.Title>
        <Card.Text className="card-txt" >
        {data.text}
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
     ))}
        
    </Row>
    </div>
  );
}

export default Cards;