import Card from "react-bootstrap/Card"
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';
import "./historyTrans.css"

const HistoryTrans = () => {
    const kiko = "./Images Card Movie/kiko deep sea.jpg"
    const cinemaVii = "./assets/logo/logoo 2.png"
    return(
<div className="group-card-historyTrans">
{/* <Row > */}
          <Card>
            <Card.Header>
                <Card.Img src={cinemaVii}/>
            </Card.Header>
            <Card.Img variant="top" src={kiko} />
            <Card.Body className="card-historyTrans ">
              <Card.Title className="card-title-historyTrans">Kiko In The Deep Sea</Card.Title>
              <Card.Text>
                Sunday 6 February 2023
              </Card.Text>
              <Card.Text>
                Cinema VII Bandung
              </Card.Text>
            </Card.Body>
          </Card>
      
    
    {/* </Row> */}

      </div>
    )
}

export default HistoryTrans