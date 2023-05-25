import "./carousel.css";
import Carousel from 'react-bootstrap/Carousel'
const Carousels = () => {
    const welcome = "./assets/carousel/welcome.png";
    const gambar1 = "./assets/carousel/marvel.jpg";
    const gambar2 = "./assets/carousel/hantu.jpg";
    const gambar3 = "./assets/carousel/magrib.jpg";
    const gambar4 = "./assets/carousel/cinema.jpg";
    return (
        <Carousel fade>
            <Carousel.Item>
                <img
                    className="d-block  mx-auto"
                    src={welcome}
                    alt="marvel"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block  mx-auto"
                    src={gambar1}
                    alt="marvel"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block  mx-auto"
                    src={gambar2}
                    alt="Gambar Film hantu"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block  mx-auto"
                    src={gambar3}
                    alt="Gambar film hantu"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block  mx-auto"
                    src={gambar4}
                    alt="Gambar film hantu"
                />
            </Carousel.Item>
        </Carousel>
    )
}

export default Carousels;