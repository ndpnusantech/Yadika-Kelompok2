import Card from "react-bootstrap/Card";
import { Row, Col } from "react-bootstrap";
import { data } from "../../Data/dataCards";
import NavigationBar from "../layouts/navbar/navbar";
import Sidebar from "../layouts/sidebar/sidebar";
import "./Now.css";

const Now = () => {
  return (
    <div>
      <div className="kiri">
        <NavigationBar />
        <Sidebar />
      </div>

      <div className="card-nowPlaying">
        <h2 className="txt-nowPlaying">Now Playing</h2>
      </div>
      
      <div className="set-card-nowPlaying">
        <Row className="card-row-nowPlaying">
          {data.map((data) => (
            <Col md="auto">
              <a href="/trailer">
                <Card className="card-nowPlaying" id={data.id}>
                  <Card.Img className="card-img-nowPlaying" src={data.img} />
                  <Card.Body className="card-body-nowPlaying">
                    <Card.Title>{data.tittle}</Card.Title>
                    <Card.Text className="card-txt-nowPlaying">
                      {data.text}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </a>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};
export default Now;
