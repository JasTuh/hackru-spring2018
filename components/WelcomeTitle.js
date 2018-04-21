import React from 'react';

import Login from './login';

export default () => (
  <div className="container-full welcomeContainer">
    <div className="row">
      <div className="center-block text-center">
        <h1 className="welcomeText">
          Spotify Playlist Manager
        </h1>
      </div>
    </div>
    <div className="container">
      <div className="center-block text-center">
        <Login />
      </div>
    </div>
  </div>
);
