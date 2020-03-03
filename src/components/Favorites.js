import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../styles/votes.css';
import Cats from './Cats';

class Favorites extends Component {
  render() {
    const { favorites } = this.props.favoriting;
    return <Cats votes={favorites} />;
  }
}

const mapStateToProps = state => ({
  favoriting: state.favoriting
});

export default connect(mapStateToProps, {})(Favorites);
