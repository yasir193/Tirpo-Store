import React from "react";
import { Link } from "react-router-dom";

const StyledCard = ({
  image,
  title,
  subtitle,
  link,
  onClick,
  children,
  style = {},
  showWhatsApp = false,
  whatsappMessage = "",
  phoneNumber = "",
}
) => {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4">
      <div
        className="card h-100 border-0 shadow"
        style={{ cursor: "pointer", ...style }}
        onClick={onClick}
      >
        <div className="position-relative overflow-hidden ratio ratio-sm-4x3 ratio-1x1">
          <img
            src={image}
            className="img-fluid  object-fit-cover"
            alt={title}
            onError={(e) => (e.target.src = "/images/placeholder.jpg")}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
        <div className="card-body text-center">
          <h5 className="card-title">{title}</h5>
          <div className={`whatsapp-button ${showWhatsApp ? "show" : ""}`}>
            <a
              className="btn btn-success mt-2"
              href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                whatsappMessage
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              تواصل عبر واتساب
            </a>
          </div>
        </div>
        {link && <Link to={link} className="stretched-link" />}
      </div>
    </div>
  );
};

export default StyledCard;
