import React from 'react';
import PropTypes from 'prop-types';

import styles from './Image.css';

const Image = ({ src }) => (
  <div className={styles.image_container}>
    <img className={styles.image} src={src} />
  </div>
);

Image.propTypes = {
  src: PropTypes.string,
};

export default Image;
