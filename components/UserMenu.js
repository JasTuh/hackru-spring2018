import React, { Component } from 'react';
import 'isomorphic-fetch';
import getPlaylists from '../utils/getPlaylists';
import getTracksOfPlaylist from '../utils/getTracksOfPlaylist';

export default class UserMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playlists: [],
      selectedPlaylists: [],
    };
    this.selectPlaylist = this.selectPlaylist.bind(this)
  }
  componentDidMount() {
    getPlaylists(this.props.url.query.accessToken).then((res) => {
      console.log(res);
      this.setState({
        playlists: res,
      });
    });
  }

  selectPlaylist(playlist) {
    return () => {
      console.log(this.state.selectedPlaylists);
      var index = this.state.selectedPlaylists.indexOf(playlist);
      if (index > -1) {
        this.state.selectedPlaylists.splice(index,1);

      }//remove it 
      else {
        this.state.selectedPlaylists.push(playlist);
      }
      this.setState({selectedPlaylists: this.state.selectedPlaylists})
    }
  }

  render() {
    if (!this.state.playlists.items) {
      return (<div />);
    }
    const listItems = this.state.playlists.items.map((playlist) =>
      <AlbumSquare key={playlist.id} playlist={playlist} clickedMethod={this.selectPlaylist(playlist.id)} childClass="col-md-3"/>
    );
    return (
      <div>
        {listItems}
      </div>
    );
  }
}

function AlbumSquare(props){
return (
  <div className={props.childClass + ' playlistBlock'} onClick={props.clickedMethod}>
    <AlbumImage playlist = {props.playlist}/>
    <h3 className="playlistName">{props.playlist.name}</h3>
  </div>
  );
} 

function AlbumImage(props) {
    if (!props.playlist.images) {
      return <div />
    } else {
      return <img src={props.playlist.images[0].url} className="playlistImage"/>
    }
  }
