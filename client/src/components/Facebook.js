import * as React from 'react';
import FacebookLogin from 'react-facebook-login';
import { NavLink } from 'react-router-dom';

export default class Facebook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      userID: '',
      name: '',
      email: '',
      picture: ''
    };
  }
  
  responseFacebook = (response) => {
    this.setState({
      isLoggedIn: true,
      userID: response.userID,
      name: response.name,
      email: response.email,
      picture: response.picture.data.url
    });
  }
  
  render() {
    if (this.state.isLoggedIn) {
      return (
        <div style={{ textAlign: 'center' }}>
          
          <img src={this.state.picture} alt={this.state.name} style={{ borderRadius: '50%', verticalAlign: 'middle', marginRight: '.5rem' }} width="50px"/>
          <span>Welcome, {this.state.name}.</span>
          
          <hr />

          <nav>
            <NavLink to="/" className="nav-link">Home</NavLink>
          </nav>
          
        </div>
      );
    } else {
      return (
        <FacebookLogin
        appId="610049170306402"
        autoLoad={false}
        cssClass="facebook-login-btn"
        fields="name,email,picture"
        onClick={this.componentClicked}
        callback={this.responseFacebook} />
      );
    }
  }
}