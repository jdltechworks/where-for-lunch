import { connect } from 'react-redux';
import React, { Component, Fragment } from 'react';
import placeActions from 'actions/placeActions';
import PropTypes from 'prop-types';

<<<<<<< HEAD
import Place from 'components/Place/Place';
import Image from 'components/Image';
import Map from 'components/Map';
=======
import Map from 'components/Map';
import Details from 'components/Details';
>>>>>>> Adding google maps feature plus test

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
          <Place place={details} />
          <Map coordinates={details.coor}
          <Image src={details.img} />
=======
          <Map coordinates={details.coordinates} />
          <Details info={details} />
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
