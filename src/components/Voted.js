import React, { Component } from 'react';
import { connect } from 'react-redux';

import { postFavorite } from '../redux/actions/favoriteActions';

class Voted extends Component {
  state = {
    favorites: JSON.parse(localStorage.getItem('favorites')) || []
  };

  handleFavorite = image => {
    const { favorites } = this.state;
    if (favorites.findIndex(img => img.id === image.id) === -1) {
      this.props.postFavorite(image.id);
      this.setState({
        favorites: [...favorites, image]
      });
      localStorage.setItem('favorites', JSON.stringify([...favorites, image]));
    } else {
      this.setState({
        favorites: this.state.favorites.filter(img => img.id !== image.id)
      });
      const localFavs = JSON.parse(localStorage.getItem('favorites'));
      const newLocalFavs = localFavs.filter(img => img.id !== image.id);
      localStorage.setItem('favorites', JSON.stringify(newLocalFavs));
    }
  };
  
  render() {
    const { favorites } = this.state;
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
export default connect(mapStateToProps, { postFavorite })(Voted);
