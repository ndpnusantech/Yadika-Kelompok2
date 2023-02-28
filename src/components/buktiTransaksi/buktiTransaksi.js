import Button from "react-bootstrap/Button";
import "./buktiTransaksi.css";

const BuktiTransaksi = () => {
  return (
    <div className="mx-auto d-flex justify-content-center">
      <Button variant="light" title="qris">
        <img src="./assets/logo/logoqris.png" className="btn-img" width={100} alt='img' />
      </Button>
    </div>
  );
};

export default BuktiTransaksi;
