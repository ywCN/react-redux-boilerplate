import React, { Component } from 'react';
import { connect } from 'react-redux';

import { login } from './../actions/authActions';

class Landing extends Component {
  componentWillMount() {
    console.log('token is', this.props.token);
    this.props.login();
  }
  render() {
    console.log('token is', this.props.token);

    return (
      <div>
        <h1>Hey I am Landing page and I render some login options.</h1>
        <ul>
          <li>Login Option1</li>
          <li>Login Option2</li>
          <li>Login Option3</li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return { token: auth.token };
};

export default connect(mapStateToProps, { login })(Landing);
