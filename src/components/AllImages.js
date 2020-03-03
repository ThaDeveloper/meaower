import React, { Component } from 'react';
import { connect } from 'react-redux';

import Cats from './Cats';
import { getImages } from '../redux/actions/imageActions';

class AllImages extends Component {
  componentDidMount() {
    this.props.getImages();
  }
  render() {
    const { images } = this.props.imaging;
    return <Cats votes={images} />;
  }
}

const mapStateToProps = state => ({
  imaging: state.imaging
});
export default connect(mapStateToProps, { getImages })(AllImages);
