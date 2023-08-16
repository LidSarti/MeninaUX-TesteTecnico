import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Card.css'; 

const Card = ({ backgroundColor, emoji, title, text }) => {
  const [bgColor, setBgColor] = useState(backgroundColor);

  return (
    <div className="card" style={{ backgroundColor: bgColor }}>
      <div className="emoji">{emoji}</div>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
};

Card.propTypes = {
  backgroundColor: PropTypes.string,
  emoji: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Card;