import React, { useState } from 'react';
import './Button.css';

const Button = ({title, href}) => {
  const [ripples, setRipples] = useState([]);

  const handleClick = (e) => {
    const { offsetX, offsetY } = e.nativeEvent;

    const newRipple = {
      left: offsetX + 'px',
      top: offsetY + 'px',
      id: Date.now(),
    };

    setRipples([...ripples, newRipple]);

    setTimeout(() => {
      setRipples((prevRipples) => prevRipples.filter((ripple) => ripple.id !== newRipple.id));
    }, 1500);
  };

  return (
      <a href={href} className="ripple-btn  hover:shadow-[5px_5px_0px_0px_rgba(178,182,182)] duration-200" onClick={handleClick}>
        {title}
        {ripples.map((ripple) => (
          <span key={ripple.id} style={{ left: ripple.left, top: ripple.top }}></span>
        ))}
      </a>
  );
};

export default Button;