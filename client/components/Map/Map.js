import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import styles from './Map.css';

class Map extends Component {
  static propTypes = {
    coordinates: PropTypes.shape({
      longitude: PropTypes.number,
      latitude: PropTypes.number,
    }),
  }
  constructor(props) {
    super(props);
    this.mapTarget = createRef();
  }
  componentDidMount() {
    if (window.google) {
      const { coordinates } = this.props;
      const { longitude, latitude } = coordinates;

      const shapedCoordinates = { lat: latitude, lng: longitude };

      this.map = new window.google.maps.Map(
        this.mapTarget.current,
        {
          center: shapedCoordinates,
          zoom: 15,
        },
      );

      this.marker = new window.google.maps.Marker({
        position: shapedCoordinates,
        map: this.map,
      });
    }
  }
  render() {
    return (
      <div className={styles.container}>
        <div ref={this.mapTarget} className={styles.map}/>
      </div>
    );
  }
}

export default Map;
