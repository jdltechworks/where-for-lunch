import React, { Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';
import Input from 'components/Input/Input';
import styles from './Condition.css';

export default class Condition extends PureComponent {
  static propTypes = {
    condition: PropTypes.object,
    action: PropTypes.func,
    children: PropTypes.func,
  };

  handleOnBlurAction = (e) => {
    this.props.action(e.target.value);
  }

  render() {
    const { handleOnBlurAction } = this;
    const { children, condition: { radius, categories } } = this.props;
    return (
      <Fragment>
        <div className={styles.root}>
          <span>radius:</span>
          <Input defaultValue={radius} onBlurAction={handleOnBlurAction}></Input>
          <span>meters</span>
        </div>
        {children(categories)}
      </Fragment>
    );
  }
}
