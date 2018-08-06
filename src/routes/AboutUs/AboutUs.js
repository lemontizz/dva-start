import React from 'react';
import { Link } from "react-router-dom";
import {
  connect
} from 'dva';
import styles from './AboutUs.css';

function AboutUs() {
  return (
    <div className={styles.normal}>
        <h1 className={styles.title}>Yay! to dvaaaaa!</h1>
        <div className={styles.welcome} />
        <ul className={styles.list}>
          <li>
            <Link to="/Login" className="text-link">Login-INSIDE</Link>
            <Link to="/Register" className="text-link">Register-INSIDE</Link>
          </li>
          <li>To <code>src/index.js</code> xxxxxxxaxxxx.</li>
          <li><a href="https://github.com/dvajs/dva-docs/blob/master/v1/en-us/getting-started.md"> sssss</a></li>
        </ul>
      </div>
  );
}

AboutUs.propTypes = {};

export default connect()(AboutUs);