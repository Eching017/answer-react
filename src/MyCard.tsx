import React, { useState } from "react";
import './MyCard.css';

interface AnimatedCardProps {
  title: string;
  description: string;
  details: string;
}

const MyCard: React.FC<AnimatedCardProps> = ({ title, description, details }) => {
  const [hovered, setHovered] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  React.useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="my-card">
        <div className="__content">
          <div className="__loading-spinner">Loading...</div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`my-card ${hovered ? 'hovered' : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="__content">
        {hovered ? (
          <p className="__details">{details}</p>
        ) : (
          <>
            <h2 className="__title">{title}</h2>
            <p className="__description">{description}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default MyCard;
