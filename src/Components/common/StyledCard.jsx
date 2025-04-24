import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const StyledCard = ({
  image,
  title,
  subtitle,
  link,
  onClick,
  children,
  style = {},
  phoneNumber = "",
  whatsappMessage = "",
}) => {
  const [showWhatsApp, setShowWhatsApp] = useState(false);
  const [inView, setInView] = useState(false);
  const cardRef = useRef(null);

  const handleCardClick = () => {
    setShowWhatsApp((prev) => !prev);
    if (onClick) onClick();
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.5,
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current);
    };
  }, []);

  return (
    <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4">
      <div
        ref={cardRef}
        className={`card h-100 border-0 shadow ${inView ? "bounceIn" : "hidden"}`}
        style={{ cursor: "pointer", ...style }}
        onClick={handleCardClick}
      >
        <div className="position-relative overflow-hidden ratio ratio-sm-4x3 ratio-1x1">
          <img
            src={image}
            className="img-fluid object-fit-cover"
            alt={title}
            onError={(e) => (e.target.src = "/images/placeholder.jpg")}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>

        <div className="card-body text-center">
          <h5 className="card-title">{title}</h5>
          {subtitle && <p className="text-muted">{subtitle}</p>}

          {showWhatsApp && (
            <div className="whatsapp-button show">
              <a
                className="btn btn-success mt-2"
                href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                  `${whatsappMessage} ${title}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                تواصل عبر واتساب
              </a>
            </div>
          )}

          {children}
        </div>

        {link && <Link to={link} className="stretched-link" />}
      </div>
    </div>
  );
};

export default StyledCard;
