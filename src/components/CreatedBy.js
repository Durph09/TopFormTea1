import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: Crmahaneyweb@gmial.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/Durph09",
  },
  {
    icon: faLinkedin,
    url: "www.linkedin.com/in/conor-mahaney-3a74b4204",
  },
];

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
      className="text-center bg-info"
    >
      <h2 style={{ textDecoration: "underline" }}>
        Welcome to one of my portfolio sites
      </h2>
      <p>
        {" "}
        My name is Conor Mahaney and I am excited to share my projects. This
        site was custom-built using React and Bootstrap . Every element of this
        site was crafted to ensure a seamless user experience. Please take a
        look around and feel free to contact me with any questions or
        opportunities. Thank you for visiting!
      </p>
      <h4>Conor Mahaney </h4>
      <div>
        <a
          href="https://conormahaney.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          ConorMahaney.com
        </a>
      </div>
      <div>
        {socials.map(({ icon, url }) => (
          <span
            className=""
            key={url}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={icon} size="3x" key={url} className="m-2" />
          </span>
        ))}
      </div>
    </div>
  );
};

export default CreatedBy;
