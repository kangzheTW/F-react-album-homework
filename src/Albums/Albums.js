import React, { Component } from 'react';
import './Albums.scss';
import Album from './Album';

class Albums extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expandIndex: 0,
    };
  }

  handleAlbumClick = (albumId) => {
    this.setState({
      expandIndex: this.props.albums.findIndex((album) => album.id === albumId),
    });
  };

  render() {
    const { albums } = this.props;
    return (
      <section className="Albums">
        {albums.map((album, index) => (
          <Album
            album={album}
            key={album.id}
            showThumbnails={index === this.state.expandIndex}
            onClick={this.handleAlbumClick}
          />
        ))}
      </section>
    );
  }
}

export default Albums;
