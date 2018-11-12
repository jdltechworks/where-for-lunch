import React from 'react';
import PropTypes from 'prop-types';
import Title from '../Title/Title';
import styles from './Place.css';

import Map from '../Map/Map';
import Image from '../Image/Image';

const Place = ({ place, withImage, withMap }) => {
  return (
    <div className={styles.root}>
      <div className={styles.name}>
        <Title url={`/place/${place.id}`}
          defaultName={!withImage ? 'Where for lunch?' : ''}
          name={place.name}
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
      { withMap && place.coordinates && <Map coordinates={place.coordinates} /> }
      { withImage && place.img && <Image src={place.img} /> }

    </div>
  );
};

Place.propTypes = {
  withImage: PropTypes.bool,
  withMap: PropTypes.bool,
  place: PropTypes.object,
  router: PropTypes.object,
};

export default Place;
