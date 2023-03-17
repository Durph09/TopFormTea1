import Button from "react-bootstrap/Button";
import "../App.css";
import campFire from "../components/assets/campFire.mp4";
import { useNavigate } from "react-router-dom";
import { Slide } from "react-awesome-reveal";

export default function Header() {
  const navigate = useNavigate();
  return (
    <div id="hero" className="header-container">
      <div className="banner">
        <h4>Get a Free Froather With All Starter Kits!</h4>
      </div>

     {/*} <video
        className="header-container-video"
        src={campFire}
        autoPlay
        loop
        muted
        playsInline
      />{*/}

      <div className="content">
        <h1>Live Top Form, Drink Top Form</h1>
        <p>Nourish mind, body, and soul</p>

        <Button variant="light" onClick={() => navigate("/shop")}>
          Drink Top Form{" "}
        </Button>
      </div>
    </div>
  );
}
