import React from 'react';

export default function Voted(props) {
  let votesMarkup = props.votes.map((image, index) => (
    <article className='location-listing' key={index}>
      <button className='favorite-button vote-btn'>Favorite</button>

      <div className='location-image'>
        <img width='300' height='169' src={image.url} alt='cat' />
      </div>
    </article>
  ));
  return <div className='grid-container'>{votesMarkup}</div>;
}
