import React, { Component } from 'react';
import './Albums.scss';
import Album from './Album';

class Albums extends Component {
  render() {
    const { albums } = this.props;
    return (
      <section className="Albums">
        {albums.map((album, index) => (
          <Album album={album} key={album.id} sequence={index} />
        ))}
      </section>
    );
  }
}

export default Albums;
