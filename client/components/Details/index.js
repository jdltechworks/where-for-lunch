import React from 'react';
import PropTypes from 'prop-types';
import styles from './Details.css';

/**
 * Category tag shaper
 * can't test if this is added in the lib/utils
 * @param  {array} categories array of categories
 * @return {string} exploded tags
 */
export const categoriesToString = (categories) => {
  return categories.reduce((acc, value, key) => {
    acc[key] = value.alias;
    return acc;
  }, []).join(',');
};

const Details = ({ info }) => (
  <div className={styles.details_container}>
    <h2>{info.name}</h2>
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
    <div className={styles.details_footer}>
      <p><strong>Address:</strong>  {info.location.display_address.join(' ')}</p>
    </div>
  </div>
);

Details.propTypes = {
  info: PropTypes.object,
};

export default Details;
