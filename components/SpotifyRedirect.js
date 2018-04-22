import React from 'react';
import Page from '../layouts/main';
import ListenSquare from './ListenSquare';
import AboutUs from './AboutUs';

export default (props) => (
  <Page>
    <ListenSquare url={props.url}/>
  </Page>
);
