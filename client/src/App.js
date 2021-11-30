import * as React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import FacebookLogin from 'react-facebook-login';
import ViewData from './components/ViewData';
import AddData from './components/AddData';
import './styles/App.css';
import './styles/Main.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      userID: '',
      name: '',
      email: '',
      picture: ''
    }
  }

  responseFacebook = (response) => {
    this.setState({
      isLoggedIn: true,
      userID: response.userID,
      name: response.name,
      email: response.email,
      picture: response.picture.data.url
    });

    localStorage.setItem('isLoggedIn', true);
    localStorage.setItem('userID', response.userID);
    localStorage.setItem('name', response.name);
    localStorage.setItem('email', response.email);
    localStorage.setItem('picture', response.picture.data.url);
  }

  getLocalStorageLogin = () => {
    if (localStorage.getItem('isLoggedIn') === 'true') {
      this.setState({
        isLoggedIn: true,
        userID: localStorage.getItem('userID'),
        name: localStorage.getItem('name'),
        email: localStorage.getItem('email'),
        picture: localStorage.getItem('picture')
      });
    }
  }

  logout = () => {
    this.setState({
      isLoggedIn: false,
      userID: '',
      name: '',
      email: '',
      picture: ''
    });

    localStorage.setItem('isLoggedIn', false);
    localStorage.setItem('userID', '');
    localStorage.setItem('name', '');
    localStorage.setItem('email', '');
    localStorage.setItem('picture', '');
  }

  renderLogin = () => {
    return (
      <div className="app">
        <h1 className="app-title">Welcome to React</h1>
        <FacebookLogin
          appId="610049170306402"
          autoLoad={false}
          fields="name,email,picture"
          callback={this.responseFacebook}
        />
      </div>
    )
  }

  renderMain = () => {
    return (
      <div className="app" style={{ justifyContent: 'start', padding: '1rem' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h1 className="app-title">Welcome to React</h1>
          <img src={this.state.picture} alt={this.state.name} style={{ borderRadius: '50%', border: '2px solid #000' }} />
          <p>Now logged in as {this.state.name}, or <a href="javascript:void(0);" onClick={this.logout}>Logout.</a></p>
          

          <nav>
            <NavLink to="/" className="app-menu">Show Data</NavLink>
            <NavLink to="/add" className="app-menu">Add Data</NavLink>
          </nav>

          <hr />
            
          <Routes>
            <Route path="/" element={<ViewData />} />
            <Route path="/add" element={<AddData />} />
          </Routes>
        </div>
      </div>
    )
  }

  render() {

    if (this.state.isLoggedIn === false) {
      this.getLocalStorageLogin();
    }

    return (<div>{this.state.isLoggedIn ? this.renderMain() : this.renderLogin()}</div>);
  }
}