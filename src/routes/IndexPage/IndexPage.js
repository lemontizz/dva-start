import React from 'react';
import {
  connect
} from 'dva';
import Menu from '../../components/Menu/Menu';
import Layout from '../../components/Layout/Layout';

function IndexPage() {
  return (
    <Layout></Layout>
  );
}

IndexPage.propTypes = {};

export default connect()(IndexPage);