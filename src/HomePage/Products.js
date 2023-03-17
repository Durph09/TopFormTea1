import "../App.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import matcha from "../components/assets/matcha.jpeg";
import matchaDessert from "../components/assets/matchaDessert.jpg";
import teaKettle from "../components/assets/teaKettle.jpg";
import { useNavigate } from "react-router-dom";
import { Slide } from "react-awesome-reveal";

const Products = () => {
  const Product1 = ({
    headline,
    prodDesc,
    buttonFunction,
    imgSrc,
    tasteDesc,
    feelingDesc,
    altText,
  }) => {
    const navigate = useNavigate();

    return (
      <Container fluid className="bg-black w-100">
        <Row className=" py-4 align-items-center">
          <Col md={4} sm={{ span: 12, order: -1 }} className="text-center">
            <Slide triggerOnce>
              {" "}
              <h2>{headline}</h2>
              <p>{prodDesc}</p>
              <Button
                style={{ width: "100%" }}
                variant="outline-light"
                onClick={() => navigate("/shop")}
              >
                Try It
              </Button>
            </Slide>
          </Col>

          <Col md={4} sm={12}>
            <img src={imgSrc} className="prodImage" alt={altText} />
          </Col>

          <Col md={4} sm={12} className=" text-center">
            <Slide triggerOnce direction="right" >
              {" "}
              <h4>Taste</h4>
              <p>{tasteDesc}</p>
              <hr></hr>
              <h4>Feeling</h4>
              <p>{feelingDesc}</p>
            </Slide>
          </Col>
        </Row>
      </Container>
    );
  };

  return (
    <Container fluid className="bgCustom mt-0 pt-0">
      <Product1
        headline="Comforting touch to your routine"
        prodDesc="OurCinnamon tea may offer several health benefits, including its potential to lower blood 
                    sugar levels, reduce inflammation and improve digestive health."
        imgSrc={teaKettle}
        tasteDesc="Like planet delicious aroma and flavor."
        feelingDesc="A warming presence to slow down your mind and induce focus"
        altText="cinnamon tea kettle"
      />

      <Product1
        headline="Energy all day long"
        prodDesc="Our matcha powder has just a fraction of the caffeine of coffee, as well as 
                naturally occurring L-theanine. You get energy, focus and immune support, without the jitters, 
                crash or poor sleep."
        imgSrc={matcha}
        tasteDesc="Like planet Earth just gave you a fist-bump."
        feelingDesc="Energy, focus and immunity without the jitters, crash or dependency."
        altText="Matcha Tea"
      />

      <Product1
        headline="A taste of the wild"
        prodDesc="Our wildflower tea is a blend of different herbs and flowers, each with its unique flavor and aroma. 
                  It may help boost your immune system, aid in digestion, and promote overall wellness."
        imgSrc={matchaDessert}
        tasteDesc="Complex and nuanced, with a mix of floral, herbal, and earthy notes."
        feelingDesc="A refreshing and invigorating presence to uplift your mood and spirit."
        altText="Wild Flower Tea Dessert"
      />
    </Container>
  );
};
export default Products;
