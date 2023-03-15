import asoLogos from "../components/assets/asoLogos.png";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

export default function AsSeenOn() {
  return (
    <Container fluid className="text-center bg-white">
      <h4>As Seen On</h4>
      <Image fluid src={asoLogos} alt="as seen on logos" />
    </Container>
  );
}
