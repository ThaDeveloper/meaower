import React, { Component } from 'react';
import { connect } from 'react-redux';

import Cats from './Cats';
import { getImages } from '../redux/actions/imageActions';
import Pagination from './Pagination';

class AllImages extends Component {
  state = {
    currentPage: 1,
    imagesPerPage: 9
  };
  componentDidMount() {
    this.props.getImages();
  }

  paginate = pageNumber => {
    this.setState({
      currentPage: pageNumber
    });
  };
  render() {
    const { currentPage, imagesPerPage } = this.state;
    const { images, loading} = this.props.imaging;
    const indexOfLastImage = currentPage * imagesPerPage;
    const indexOfFirstImage = indexOfLastImage - imagesPerPage;
    const currentImages = images.slice(indexOfFirstImage, indexOfLastImage);
    let catsMarkup = !loading ? (
      <>
        <Cats votes={currentImages} />
        {images.length > 9 ? (
          <Pagination
            currentPage={currentPage}
            imagesPerPage={imagesPerPage}
            totalImages={images.length}
            paginate={this.paginate}
          />
        ) : (
          ''
        )}
      </>
    ) : (
      <div className='message'>Loading...</div>
    );
    return <>{catsMarkup}</>;
  }
}

const mapStateToProps = state => ({
  imaging: state.imaging
});
export default connect(mapStateToProps, { getImages })(AllImages);
