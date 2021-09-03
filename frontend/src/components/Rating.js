import React from 'react';

const Rating = ({ value, text, color = '#f8e825' }) => {
  let stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <span key={i}>
        <i
          style={{ color: color }}
          className={
            value >= i + 1
              ? 'fas fa-star'
              : value >= i + 0.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }
        />
      </span>
    );
  }

  return (
    <div className='rating'>
      {stars}
      <span>{text && text}</span>
    </div>
  );
};

export default Rating;
