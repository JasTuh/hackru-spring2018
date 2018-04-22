import React from 'react';

import Listen from './listen';

export default (props) => (
  <div className="container-full welcomeContainer">
    <div className="row">
      <div className="center-block text-center">
        <div className="container" id="mainContainer">
          <img src="/static/img/spotifly.png" id="spotifly" />
          <h1 className="welcomeText">
            Spoti<i>fly</i>
          </h1>
          <Listen url={props.url}/>
        </div>
      </div>
    </div>
  </div>
);
