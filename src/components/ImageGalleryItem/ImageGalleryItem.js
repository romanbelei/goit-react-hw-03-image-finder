import React, { Component } from 'react';
import s from './ImageGalleryItem.module.css';

export default class ImageGalleryItem extends Component {
  state = {
    pictures: null,
    // error: null,
    // status: Status.IDLE,
  };
  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.pictureName;
    const nextName = this.props.pictureName;
    if (prevName !== nextName) {
      //   this.setState({ status: Status.PENDING });

      fetch(
        `https://pixabay.com/api/?q=cat&page=1&key=25722602-ef4054fc4542d7cb871df6c01&q=${nextName}&image_type=photo&orientation=horizontal&page=2&per_page=12`
      )
        .then(res => res.json())
        .then(pictures => this.setState({ pictures }));
    }
  }
  render() {
    return (
      <>
        {this.state.pictures &&
          this.state.pictures.hits.map(p => {
            return (
              <li className={s.ImageGalleryItem} key={p.id}>
                <img
                  className={s['ImageGalleryItem-image']}
                  src={p.webformatURL}
                  alt={p.tags}
                />
              </li>
            );
          })}
      </>
    );
  }
}
