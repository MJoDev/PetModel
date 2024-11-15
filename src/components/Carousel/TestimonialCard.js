import React from 'react';

const TestimonialCard = ({ name, image, text, isActive, isEven }) => {

    const cardStyle = {
        background: isEven ? 'linear-gradient(45deg,  #ce3b3b 8%,#fc442f 35%,#ff9082 78%,#ff9082 78%,#ff9082 84%,#ff9082 84%,#ff9082 84%,#ff9082 100%,#4487ff 100%,#ff9082 101%)' : 'linear-gradient(45deg,  #1e5799 8%,#2877ff 27%,#2877ff 42%,#2877ff 42%,#2877ff 53%,#4487ff 63%)',
        padding: '2rem',
        borderRadius: '1rem',
        textAlign: 'center',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'all 0.5s ease-in-out',
        boxSizing: 'border-box',
    };

  return (
    <div className={`testimonial-card ${isActive ? 'active' : ''}`} style={cardStyle}>
      <img src={image} alt={name} className="testimonial-image" />
      <h3 className="testimonial-name">{name}</h3>
      <p className="testimonial-text">"{text}"</p>
    </div>
  );
};

export default TestimonialCard;