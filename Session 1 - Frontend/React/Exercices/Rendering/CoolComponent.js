import React, { useState, useEffect } from 'react';
import './CoolComponent.css';

const CoolComponent = () => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prevRotation) => (prevRotation + 90) % 360);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="cool-visual-component">
      <div className="cube" style={{ transform: `rotateY(${rotation}deg)` }}>
        <div className="face front">Front</div>
        <div className="face back">Back</div>
        <div className="face left">Left</div>
        <div className="face right">Right</div>
        <div className="face top">Top</div>
        <div className="face bottom">Bottom</div>
      </div>
    </div>
  );
};

export default CoolComponent;