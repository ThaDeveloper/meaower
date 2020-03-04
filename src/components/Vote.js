import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import '../styles/vote.css';
import { getImage, postVote } from '../redux/actions/votingActions';

class Vote extends Component {
  componentDidMount() {
    this.props.getImage();
  }

  postLike = (image, value) => {
    this.props.postVote(image, value);
    const likes = JSON.parse(localStorage.getItem('likes')) || [];
    if (likes.findIndex(img => img.id === image.id) === -1) {
      likes.push(image);
      localStorage.setItem('likes', JSON.stringify(likes));
    }
    this.props.getImage();
  };

  postDislike = (image, value) => {
    this.props.postVote(image, value);
    const dislikes = JSON.parse(localStorage.getItem('dislikes')) || [];
    if (dislikes.findIndex(img => img.id === image.id) === -1) {
      dislikes.push(image);
      localStorage.setItem('dislikes', JSON.stringify(dislikes));
    }
    this.props.getImage();
  };

  render() {
    const { image, errors, loading } = this.props.voting;
    let imageMarkup = !loading ? (
      !errors ? (
        <div className='profle-image'>
          <img src={image.url} alt='' />
        </div>
      ) : (
        <div className='message'>{errors}</div>
      )
    ) : (
      <div className='message'>Loading ...</div>
    );
    return (
      <div className='voting'>
        {imageMarkup}
        <div className='reaction'>
          <button
            className='vote-btn'
            id='dislike-btn'
            onClick={() => this.postDislike(image, 0)}
            disabled={true && loading}
          >
            Dislike
          </button>
          <button
            className='vote-btn'
            id='like-btn'
            onClick={() => this.postLike(image, 1)}
            disabled={true && loading}
          >
            Like
          </button>
        </div>
      </div>
    );
  }
}

Vote.propTypes = {
  getImage: PropTypes.func.isRequired,
  postVote: PropTypes.func.isRequired,
  errors: PropTypes.bool,
  loading: PropTypes.bool,
  images: PropTypes.array
};
const mapStateToProps = state => ({
  voting: state.voting
});

export default connect(mapStateToProps, { getImage, postVote })(Vote);
