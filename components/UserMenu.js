import React, { Component } from 'react';
import 'isomorphic-fetch';
import getPlaylists from '../utils/getPlaylists';
import getTracksOfPlaylist from '../utils/getTracksOfPlaylist';

export default class UserMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playlists: {},
    };
  }
  componentDidMount() {
    getPlaylists(this.props.url.query.accessToken).then((res) => {
      console.log(res);
      this.setState({
        playlists: res,
      });
    });
  }
  render() {
    if (!this.state.playlists.items) {
      return (<div />);
    }
    return (
      <div>
        logged in
      </div>
    );
  }
}
