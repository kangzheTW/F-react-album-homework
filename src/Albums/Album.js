import React, { Component } from 'react';
import './Albums.scss';
import { fetchPhotos } from '../apiUtil';

class Album extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: props.sequence === 0,
      photos: [],
    };
  }

  componentDidMount() {
    const {album} = this.props;
    if (this.state.expanded) {
      fetchPhotos(album.id).then((photos) => {
        this.setState({
          photos,
        });
      });
    }
  }

  render() {
    const {album} = this.props;
    const {photos} = this.state;
    return (
      <div className="album">
        <p className="title">{album.title}</p>
        <div className="thumbnails">
          {photos.slice(0, 3).map((photo) => (
            <div className="photo-thumbnail" key={photo.id}>
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