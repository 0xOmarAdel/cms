import React from "react";
import { Link } from "react-router-dom";

const Links = () => {
  const links = [
    { text: "Home", to: "/" },
    { text: "FAQ", to: "/faq" },
    { text: "Create Complaint", to: "/create-complaint" },
    { text: "My Complaints", to: "/my-complaints" },
  ];

  return (
    <div className="links d-flex flex-column col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
      <h5 className="font-weight-bold mb-2">Useful Links</h5>
      <ul className="list-unstyled">
        {links.map((link, index) => (
          <li key={index}>
            <Link to={link.to}>{link.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Links;
