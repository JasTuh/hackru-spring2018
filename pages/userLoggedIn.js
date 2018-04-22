import React from 'react';
import Page from '../layouts/main';
import UserMenu from '../components/UserMenu';

var makingPlaylist= false; 
export default class userLoggedIn extends React.Component{

  MergeTest() {
    fetch('http://localhost:3000/mergePlaylists', {method:'POST', body:JSON.stringify([1,2,3,4,5])}); 
  }
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
          <button onClick={this.MergeTest}>
            wheeee
          </button>
        </Page>
    ) 
  }
}
