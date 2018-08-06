import React from 'react';
import { connect } from 'dva';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from '../Login/Login';
import Products from '../Products/Products';
import UserManage from '../UserManage/UserManage';
import Menu from '../../components/Menu/Menu';
import Nav from '../../components/Nav/Nav';
import Layout from '../../components/Layout/Layout';

function Manage() {
  return (
      <Router>
        <div>
          <Nav></Nav>
          <menu id="page-manage-menu">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">My account</Link>
              </li>
              <li>
                <Link to="/topics">My project</Link>
              </li>
              <li>
                <Link to="/login">Upload project</Link>
              </li>
              <li>
                <Link to="/Products">User management</Link>
              </li>
              <li>
                <Link to="/Projects">Project management</Link>
              </li>
            </ul>
          </menu>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/topics" component={Topics} />
          <Route path="/login" component={Login} />
          <Route path="/Products" component={Products} />
          <Route path="/UserManage" component={UserManage} />
        </div>
      </Router>
  );
}

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>Rendering with React</Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>Components</Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic} />
    <Route
      exact
      path={match.url}
      render={() => <h3>Please select a topic.</h3>}
    />
  </div>
);

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);


Manage.propTypes = {
};

export default connect()(Manage);
