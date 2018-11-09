<<<<<<< HEAD
<<<<<<< HEAD
import { connect } from 'react-redux';
import React, { Component } from 'react';
import placeActions from 'actions/placeActions';
import PropTypes from 'prop-types';

import Details from 'components/Details';

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
      return (<Details info={details} />);
    }

    return null;
  }
}

const mapStateToProps = ({ place }) => ({ details: place.details });


const mapDispatchToProps = {
  placeById,
};

export default connect(mapStateToProps, mapDispatchToProps)(PlaceDetails);
=======
=======
import { connect } from 'react-redux';
>>>>>>> Adding place details page plus compoenent test
import React, { Component } from 'react';
import placeActions from 'actions/placeActions';
import PropTypes from 'prop-types';

import Details from 'components/Details';

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
      return (<Details info={details} />);
    }

    return null;
  }
}

<<<<<<< HEAD
export default PlaceDetails;
>>>>>>> Adding partial implementation for task-3
=======
const mapStateToProps = ({ place }) => ({ details: place.details });


const mapDispatchToProps = {
  placeById,
};

export default connect(mapStateToProps, mapDispatchToProps)(PlaceDetails);
>>>>>>> Adding place details page plus compoenent test
