import React, { Component } from 'react';
import './Albums.scss';
import { fetchPhotos } from '../apiUtil';

class Album extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
    };
  }

  componentDidMount() {
    const { album, showThumbnails } = this.props;
    this.updateThumbnails(showThumbnails, album.id);
  }

  componentDidUpdate(prevProps) {
    const { showThumbnails, album } = this.props;
    if (prevProps.showThumbnails !== showThumbnails || prevProps.album.id !== album.id) {
      this.updateThumbnails(showThumbnails, album.id);
    }
  }

  updateThumbnails = (showThumbnails, albumId) => {
    if (showThumbnails) {
      fetchPhotos(albumId).then((photos) => {
        this.setState({
          photos,
        });
      });
    } else {
      this.setState({
        photos: [],
      });
    }
  };

  render() {
    const { album } = this.props;
    const { photos } = this.state;
    return (
      <div className="album" onClick={() => this.props.onClick(album.id)}>
        <p className="title">{album.title}</p>
        <div className="thumbnails">
          {photos.slice(0, 3).map((photo) => (
            <div className="thumbnail" key={photo.id}>
              <img src={photo.thumbnailUrl} />
              <p>{photo.title}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Album;
