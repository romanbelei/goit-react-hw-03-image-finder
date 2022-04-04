import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
// import PropTypes from 'prop-types';
import s from './ImageGallery.module.css';

function ImageGallery({ pictureName }) {
  return (
    <ul className={s.ImageGallery}>
      <ImageGalleryItem pictureName={pictureName} />
      {/* <!-- Набор <li> с изображениями --> */}
    </ul>
  );
}

export default ImageGallery;
