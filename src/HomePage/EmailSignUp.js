import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import matchaIceCream from "../components/assets/matchaIceCream.jpg";
import matchaPancke from "../components/assets/matchaPancake.jpg";
import matchaDessert from "../components/assets/matchaDessert.jpg";
import matchaLatte from "../components/assets/matchaLatte.jpg";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { useParallax } from "react-scroll-parallax";
import { Slide } from "react-awesome-reveal";

const EmailSignUp = () => {
  return (
    <>
      <CardGroup className="w-100">
        <Card style={{ margin: "0%" }}>
          <Card.Img
            src={matchaIceCream}
            alt="Matcha Ice Cream"
            style={{
              width: "100%",
              height: "30vw",
              objectFit: "cover",
              borderRadius: "0",
            }}
          />
        </Card>

        <Card style={{ margin: "0%" }}>
          <Card.Img
            src={matchaPancke}
            alt="Matcha Pancake"
            style={{
              width: "100%",
              height: "30vw",
              objectFit: "cover",
              borderRadius: "0",
            }}
          />
        </Card>

        <Card style={{ margin: "0%" }}>
          <Card.Img
            src={matchaDessert}
            alt="Matcha Dessert"
            style={{
              width: "100%",
              height: "30vw",
              objectFit: "cover",
              borderRadius: "0",
            }}
          />
        </Card>

        <Card style={{ margin: "0%" }}>
          <Card.Img
            src={matchaLatte}
            alt="Matcha Latte"
            style={{
              width: "100%",
              height: "30vw",
              objectFit: "cover",
              borderRadius: "0",
            }}
          />
        </Card>
      </CardGroup>

      <Form className="pt-5 d-flex justify-content-center text-white">
        <Form.Group>
          <h1>Get the latest from Top Form Tea</h1>
          <h4>Sign up for our weekly Trends and recipes</h4>
          <FloatingLabel
            controlId="floatingInput"
            label="Email address"
            className="mb-3"
          >
            <Form.Control type="email" placeholder="name@example.com" />
          </FloatingLabel>
          <Form.Text className="text-white">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
      </Form>
    </>
  );
};

export default EmailSignUp;
