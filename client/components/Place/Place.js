import React from 'react';
import PropTypes from 'prop-types';
import Title from '../Title/Title';

import Image from '../Image/Image';
import styles from './Place.css';

const Place = ({ place, withImage }) => {
  return (
    <div className={styles.root}>
      <div className={styles.name}>
        <Title url={`/place/${place.id}`}
          defaultTitle={!withImage ? 'Where for lunch?' : ''}
          title={place.name}
          className={styles.link} />
      </div>
      <div className={styles.box}>
        <div>{ place.address }</div>
        <div>{ place.phone }</div>
        <div>{ place.categories && place.categories.join(', ') }</div>
        <div>{ place.price }</div>
        { place.rating &&
        <div className={styles.rating}>
          <div className={styles.ratingScore}>{ place.reviewCount } reviews</div>
          <div className={styles.stars}>
            <div className={styles.emptyStars}></div>
            <div className={styles.fullStars} style={{ width: `${place.rating / 5 * 100}%` }}></div>
          </div>
        </div>
        }
      </div>
      { withImage && place.img && <Image src={place.img} /> }

    </div>
  );
};

Place.propTypes = {
  withImage: PropTypes.bool,
  place: PropTypes.object,
  router: PropTypes.object,
};

export default Place;
