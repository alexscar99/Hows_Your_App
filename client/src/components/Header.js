import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import StripeBilling from './StripeBilling';

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li className="right">
            <a
              className="login-btn white-text text-darken-2 btn"
              href="/auth/google"
            >
              <i className="medium material-icons account-logo">account_box</i>Login
              With Google
            </a>
          </li>
        );
      default:
        return [
          <li key="1">
            <StripeBilling />
          </li>,
          <li key="2" className="credits-display">
            Credits:
            <span className="credits-number">{this.props.auth.credits}</span>
          </li>,
          <li key="3">
            <a className="logout-btn" href="/api/logout">
              Logout
            </a>
          </li>
        ];
    }
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link
            to={this.props.auth ? '/surveys' : '/'}
            className="left brand-logo"
          >
            How's Your App
          </Link>
          <ul className="right">{this.renderContent()}</ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
