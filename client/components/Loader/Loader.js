import React from 'react';

import styles from './Loader.css';

console.log(styles);
const Loader = () => (
  <div className={styles.container}>
    <div className={styles.ellipsis}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
);


export default Loader;
