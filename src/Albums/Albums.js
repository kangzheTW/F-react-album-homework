import React, { Component } from 'react';
import './Albums.scss';

class Albums extends Component {
  render() {
    const { albums } = this.props;
    return (
      <section className="Albums">
        {albums.map((album) => (
          <div className="album" key={album.id}>
            <p className="title">{album.title}</p>
          </div>
        ))}
      </section>
    );
  }
}

export default Albums;
