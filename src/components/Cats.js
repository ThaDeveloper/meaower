import React, { Component } from 'react';
import { connect } from 'react-redux';

import { postFavorite } from '../redux/actions/favoriteActions';

class Cats extends Component {
  handleFavorite = image => {
    this.props.postFavorite(image);
    const { favorites } = this.props.favoriting;
    if (favorites.findIndex(img => img.id === image.id) === -1) {
      const localFavs = JSON.parse(localStorage.getItem('favorites')) || [];
      localStorage.setItem('favorites', JSON.stringify([...localFavs, image]));
    } else {
      const localFavs = JSON.parse(localStorage.getItem('favorites'));
      const newLocalFavs = localFavs.filter(img => img.id !== image.id);
      localStorage.setItem('favorites', JSON.stringify(newLocalFavs));
    }
  };

  render() {
    const { favorites } = this.props.favoriting;
    let votesMarkup = this.props.votes.map((image, index) => (
      <article className='location-listing' key={index}>
        <button
          className='favorite-button vote-btn'
          onClick={() => this.handleFavorite(image)}
        >
          {favorites.findIndex(img => img.id === image.id) === -1
            ? 'Favorite'
            : 'Unfavorite'}
        </button>

        <div className='location-image'>
          <img width='300' height='169' src={image.url} alt='cat' />
        </div>
      </article>
    ));
    return <div className='grid-container'>{votesMarkup}</div>;
  }
}

const mapStateToProps = state => ({ favoriting: state.favoriting });
export default connect(mapStateToProps, { postFavorite })(Cats);
