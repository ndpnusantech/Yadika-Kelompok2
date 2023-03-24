import "./pilihProduct.css"

import {Card} from "react-bootstrap"


const PilihProduct = () => {
    return(
<>
<div className="card-group-product-admin">
<Card className="card-product-admin mb-2"  bg="light" style={{width :'35rem'}}>
<Card.Link href="/productAdmin">
<Card.Header>Product</Card.Header>
          <Card.Body className="card-body-product-admin">
            <Card.Text>
            View product information and recap
            </Card.Text>
          </Card.Body>
          </Card.Link>
        </Card>
<Card className="card-product-admin mb-2"  bg="light" style={{width :'35rem'}}>
<Card.Link href="/lokasi">
<Card.Header>Lokasi</Card.Header>
          <Card.Body className="card-body-product-admin">
            <Card.Text>
            Click here to Edit Location
            </Card.Text>
          </Card.Body>
          </Card.Link>
        </Card>


</div>

<div className="card-group-product-admin">
<Card className="card-product-admin mb-2"  bg="light" style={{width :'35rem'}}>
<Card.Link href="/kategori">
<Card.Header>Kategori</Card.Header>
          <Card.Body className="card-body-product-admin">
            <Card.Text>
            Click here to Edit Category
            </Card.Text>
          </Card.Body>
          </Card.Link>
        </Card>
<Card className="card-product-admin mb-2"  bg="light" style={{width :'35rem'}}>
<Card.Link href="/tayang">
<Card.Header>Jam Tayang</Card.Header>
          <Card.Body className="card-body-product-admin">
            <Card.Text>
            Cick here to Edit Showtimes
            </Card.Text>
          </Card.Body>
          </Card.Link>
        </Card>




</div>
</>
    )
}
export default PilihProduct
