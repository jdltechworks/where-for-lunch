import { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { hasLatLong } from 'lib/utils';
import conditionActions from 'actions/conditionActions';

class Condition extends Component {
  static propTypes = {
    children: PropTypes.func,
    condition: PropTypes.object,
    action: PropTypes.func,
    setRadius: PropTypes.func,
    setCategory: PropTypes.func,
  }
  handleSubmit = () => {
    this.props.action(this.props.condition);
  }

  render() {
    const { handleSubmit } = this;
    const { condition, children } = this.props;
    const { longitude, latitude } = condition;

    return children({
      ...condition,
      handleSubmit,
      searchDisabled: hasLatLong({ longitude, latitude }),
    });
  }
}


const mapStateToProps = state => ({
  condition: state.condition,
});

const mapDispatchToProps = {
  setCategory: conditionActions.setCategory,
  setRadius: conditionActions.setRadius,
};

export default connect(mapStateToProps, mapDispatchToProps)(Condition);
