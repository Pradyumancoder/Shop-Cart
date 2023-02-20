import React from 'react';
import {IoMdStarOutline,IoMdStar} from 'react-icons/io'


function Rating({ value }) {
  let stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= value) {
      stars.push(<span key={i}><IoMdStar color='red' size={25}/></span>);
    } else {
      stars.push(<span key={i}><IoMdStarOutline color='red' size={25}/></span>);
    }
  }
  return <div className='flex justify-center mt-2'>{stars}</div>;
}

export default Rating;