import React from 'react';
import Page from '../layouts/main';
import UserMenu from '../components/UserMenu';

var makingPlaylist= false; 
export default class userLoggedIn extends React.Component{

  render() {
    return (
      <Page>
          <nav className="navbar navbar-default userNavBar">
            <div className="container-fluid">
              <div className="navbar-header">
                <a className="navbar-brand" href="#">Spotify Playlist Manager</a>
              </div>
              <ul className="nav navbar-nav">
                <li className="active"><a href="#">Home</a></li>
                <li><a href="#">New Playlist</a></li>
              </ul>
              <ul className="nav navbar-nav navbar-right">
                <li><a href="/logout">Log Out</a></li>
              </ul>
            </div>
          </nav>
          <p>
            {makingPlaylist}
          </p>
          <UserMenu url={this.props.url} />
        </Page>
    ) 
  }
}
