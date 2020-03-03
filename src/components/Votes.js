import React, { Component } from 'react';

import '../styles/votes.css';
import Cats from './Cats';

export default class Votes extends Component {
  state = {
    likes: JSON.parse(localStorage.getItem('likes')) || [],
    dislikes: JSON.parse(localStorage.getItem('dislikes')) || []
  };
  render() {
    const { likes, dislikes } = this.state;
    const { selected } = this.props;
    switch (selected) {
      case 'likes':
        return <Cats votes={likes} />;
      case 'dislikes':
        return <Cats votes={dislikes} />;
    }
  }
}
