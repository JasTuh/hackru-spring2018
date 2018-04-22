import React from 'react';

import Login from './login';

export default () => (
  <div className="container-full welcomeContainer">
    <div className="row">
      <div className="center-block text-center">
        <div className="container" id="mainContainer">
          <img src="/static/img/spotifly.png" id="spotifly" />
          <h1 className="welcomeText">
            Spoti<i>fly</i>
          </h1>
          <Login />
        </div>
      </div>
    </div>
  </div>
);
