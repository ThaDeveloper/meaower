import React, { Component } from 'react';
import { connect } from 'react-redux';

import { postFavorite } from '../redux/actions/favoriteActions';
import Pagination from './Pagination';

class Cats extends Component {
  state = {
    currentPage: 1,
    imagesPerPage: 9
  };

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

  paginate = pageNumber => {
    this.setState({
      currentPage: pageNumber
    });
  };

  render() {
    const { favorites } = this.props.favoriting;
    const { currentPage, imagesPerPage } = this.state;
    const indexOfLastImage = currentPage * imagesPerPage;
    const indexOfFirstImage = indexOfLastImage - imagesPerPage;
    const currentImages = this.props.votes.slice(
      indexOfFirstImage,
      indexOfLastImage
    );
    let votesMarkup = currentImages.map((image, index) => (
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
    return (
      <>
        <div className='grid-container'>{votesMarkup}</div>
        {this.props.votes.length > 9 ? (
          <Pagination
            currentPage={currentPage}
            imagesPerPage={imagesPerPage}
            totalImages={this.props.votes.length}
            paginate={this.paginate}
          />
        ) : (
          ''
        )}
      </>
    );
  }
}

const mapStateToProps = state => ({ favoriting: state.favoriting });
export default connect(mapStateToProps, { postFavorite })(Cats);
