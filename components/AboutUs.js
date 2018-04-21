import React from 'react';

import FAQ from './FAQ';

export default () => (
  <div className="container-full welcomeAboutUsContainer">
    <div className="container welcomeAboutUsInnerContainer">
      <div className="row">
        <div className="center-block text-center welcomeAboutText">
          <h3>
            Spotify Playlist Manager is an app built to ... <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit sem quis accumsan imperdiet. Cras porta rutrum dignissim. Praesent vitae sem quis est aliquam auctor. Phasellus congue nec tortor vitae efficitur. Ut gravida tortor eget ligula fermentum semper. Cras vel mauris massa. Quisque et nunc ligula. Duis malesuada tempor eros, non laoreet dolor vulputate eget. Sed sollicitudin id nulla non molestie. Phasellus luctus libero fermentum purus sodales, in posuere arcu sagittis. Duis pulvinar dolor non tincidunt vulputate.
          </h3>
        </div>
      </div>
      <br />
      <FAQ />
    </div>
  </div>
);
