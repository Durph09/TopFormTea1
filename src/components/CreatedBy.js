import { Link } from "react-router-dom";
import { useParallax } from "react-scroll-parallax";

const Mailto = ({ mailto, label }) => {
  return (
    <Link
      to="#"
      onClick={(e) => {
        window.location.href = mailto;
        e.preventDefault();
      }}
    >
      {label}
    </Link>
  );
};

const CreatedBy = () => {

 
  return (
    <div 
      style={{ justifyContent: "center", alignItems: "center" }}
      className="text-center bg-white"
    >
      <h2 style={{textDecoration: 'underline'}}>Welcome to one of my portfolio sites</h2>
      <p>
        {" "}
        My name is Conor Mahaney and I am excited to share my projects. This
        site was custom-built using React and Bootstrap . Every element of this
        site was crafted to ensure a seamless user experience. Please take a
        look around and feel free to contact me with any questions or
        opportunities. Thank you for visiting!
      </p>
      <p>Conor Mahaney </p>
      <Mailto
        label="CrmahaneyWeb@gmail.com"
        mailto="mailto:crmahaneyWeb@gmail.com"
      />


    </div>
  );
};

export default CreatedBy;
