import { connect } from 'react-redux';
import React, { Component, Fragment } from 'react';
import placeActions from 'actions/placeActions';
import PropTypes from 'prop-types';









import Map from 'components/Map';
import Image from 'components/Image';
import Place from 'components/Place/Place';

const { placeById } = placeActions;

class PlaceDetails extends Component {
  static propTypes = {
    placeById: PropTypes.func,
    match: PropTypes.object,
  }
  componentDidMount() {
    const { params } = this.props.match;
    this.props.placeById(params.id);
  }
  render() {
    const { props } = this;
    const { details } = props;

    if (details) {
      return (
        <Fragment>
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
>>>>>>> Adding google maps feature plus test
=======
<<<<<<< HEAD
>>>>>>> Adding google maps feature plus test
          <Place place={details} />

          <Map coordinates={details.coordinates} />

          <Image src={details.img} />
<<<<<<< HEAD

=======
=======
          <Map coordinates={details.coordinates} />
          <Details info={details} />
>>>>>>> Adding google maps feature plus test
<<<<<<< HEAD
=======
=======
          <Map coordinates={details.coordinates} />
          <Details info={details} />
>>>>>>> Adding google maps feature plus test
>>>>>>> Adding google maps feature plus test
        </Fragment>
      );
    }

    return null;
  }
}

const mapStateToProps = ({ place }) => ({ details: place.details });


const mapDispatchToProps = {
  placeById,
};

export default connect(mapStateToProps, mapDispatchToProps)(PlaceDetails);
