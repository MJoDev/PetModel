import React, { useState, } from 'react';
import TestimonialCard from './TestimonialCard';
import './TestimonialCarousel.css';

const testimonials = [
  {
    id: 1,
    name: "Kenned Dsouza",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=faces",
    text: "I like that I got to meet the dog Walker who is walking my dog daily and consult with her. I also appreciate the daily communication I get about the dog and how my dog is doing"
  },
  {
    id: 2,
    name: "Kenned Dsouza",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=faces",
    text: "I like that I got to meet the dog Walker who is walking my dog daily and consult with her. I also appreciate the daily communication I get about the dog and how my dog is doing"
  },
  {
    id: 3,
    name: "Kenned Dsouza",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=faces",
    text: "I like that I got to meet the dog Walker who is walking my dog daily and consult with her. I also appreciate the daily communication I get about the dog and how my dog is doing"
  }
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(1);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };


  const getSlideStyle = (index) => {
    const position = index - currentIndex;
    const translateX = position * 110; // Increase spacing between cards
    return {
      transform: `translateX(${translateX}%)`,
      zIndex: index === currentIndex ? 2 : 1,
    };
  };

  return (
    <div className="carousel-container">
      <h2 className="carousel-title">
        Here's what pet owners have to say about Fetch! Pet Care...
      </h2>
      
      <div className="carousel">
        <button className="carousel-button prev" onClick={prevSlide}>
          &#8249;
        </button>
        
        <div className="carousel-track" style={{ display: 'flex', justifyContent: 'center' }}>
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`carousel-slide ${index === currentIndex ? 'active' : ''}`}
              style={getSlideStyle(index)}
              onClick={() => setCurrentIndex(index)}
            >
              <TestimonialCard
                name={testimonial.name}
                image={testimonial.image}
                text={testimonial.text}
                isActive={index === currentIndex}
                isEven={index % 2 === 0} // Check if index is even
              />
            </div>
          ))}
        </div>

        <button className="carousel-button next" onClick={nextSlide}>
          &#8250;
        </button>
      </div>
    </div>
  );
};

export default TestimonialCarousel;