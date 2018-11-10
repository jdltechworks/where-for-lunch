import React from 'react';
import PropTypes from 'prop-types';
import { categoriesToString } from '../../lib/utils';

import styles from './Details.css';

const Details = ({ info }) => (
  <div className={styles.details_container}>
    <h2>{info.name}</h2>
    <div className={styles.details_footer}>
      <p><strong>Address:</strong>  {info.location.display_address.join(' ')}</p>
    </div>
    <p><strong>Phone: </strong> {info.phone}</p>
    <p><strong>Categories:</strong>  {categoriesToString(info.categories)}</p>
    <div className={styles.rating}>
      <div className={styles.ratingScore}>{ info.reviewCount } reviews</div>
      <div className={styles.stars}>
        <div className={styles.emptyStars}></div>
        <div className={styles.fullStars} style={{ width: `${info.rating / 5 * 100}%` }}></div>
      </div>
    </div>
    <img className={styles.details_image} src={info.image_url} />
  </div>
);

Details.propTypes = {
  info: PropTypes.object,
};

export default Details;
