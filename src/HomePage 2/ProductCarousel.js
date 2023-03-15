import Carousel from "react-bootstrap/Carousel";
import ProductCard from "../components/ProductCard";
import Row from "react-bootstrap/Row";
import starterKit1 from "../components/assets/starterKit1.png";

const ProductCarousel = ({ windowWidth }) => {
  const ProdCarouselSm = () => {
    return (
      <Carousel variant="dark">
        <Carousel.Item>
          <Row className="rowCarousel">
            <ProductCard
              cardTitle="Starter Kit Number 1"
              cardSubTitle="From $40"
              imgSrc={starterKit1}
            />
          </Row>
        </Carousel.Item>

        <Carousel.Item>
          <Row className="rowCarousel">
            <ProductCard
              cardTitle="Starter Kit Number 1"
              cardSubTitle="From $40"
              imgSrc={starterKit1}
            />
          </Row>
        </Carousel.Item>

        <Carousel.Item>
          <Row className="rowCarousel">
            <ProductCard
              cardTitle="Starter Kit Number 1"
              cardSubTitle="From $40"
              imgSrc={starterKit1}
            />
          </Row>
        </Carousel.Item>

        <Carousel.Item>
          <Row className="rowCarousel">
            <ProductCard
              cardTitle="Starter Kit Number 1"
              cardSubTitle="From $40"
              imgSrc={starterKit1}
            />
          </Row>
        </Carousel.Item>

        <Carousel.Item>
          <Row className="rowCarousel">
            <ProductCard
              cardTitle="Starter Kit Number 1"
              cardSubTitle="From $40"
              imgSrc={starterKit1}
            />
          </Row>
        </Carousel.Item>

        <Carousel.Item>
          <Row className="rowCarousel">
            <ProductCard
              cardTitle="Starter Kit Number 1"
              cardSubTitle="From $40"
              imgSrc={starterKit1}
            />
          </Row>
        </Carousel.Item>
      </Carousel>
    );
  };

  const ProdCarouselMed = () => {
    return (
      <Carousel variant="light">
        <Carousel.Item>
          <Row className="rowCarousel">
            <ProductCard
              cardTitle="Starter Kit Number 1"
              cardSubTitle="From $40"
              imgSrc={starterKit1}
            />
            <ProductCard
              cardTitle="Starter Kit Number 2"
              cardSubTitle="From $40"
              imgSrc={starterKit1}
            />
            <ProductCard
              cardTitle="Starter Kit Number 3"
              cardSubTitle="From $40"
              imgSrc={starterKit1}
            />
          </Row>
        </Carousel.Item>

        <Carousel.Item>
          <Row className="rowCarousel">
            <ProductCard
              cardTitle="Starter Kit Number 4"
              cardSubTitle="From $40"
              imgSrc={starterKit1}
            />
            <ProductCard
              cardTitle="Starter Kit Number 5"
              cardSubTitle="From $40"
              imgSrc={starterKit1}
            />
            <ProductCard
              cardTitle="Starter Kit Number 6"
              cardSubTitle="From $40"
              imgSrc={starterKit1}
            />
          </Row>
        </Carousel.Item>
      </Carousel>
    );
  };

  const WindowSizeCarousel = ({ windowWidth }) => {
    if (windowWidth < 879) {
      return <ProdCarouselSm />;
    } else {
      return <ProdCarouselMed />;
    }
  };

  return <WindowSizeCarousel windowWidth={windowWidth} />;
};

export default ProductCarousel;
