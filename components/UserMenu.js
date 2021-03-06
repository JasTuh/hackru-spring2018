import React, { Component } from 'react';
import 'isomorphic-fetch';
import SpotifyRedirect from './SpotifyRedirect'

const errMethod = (err) => console.log(err);
export default class UserMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playlistName: "",
      playlists: [],
      selectedPlaylists: [],
    };
    this.selectPlaylist = this.selectPlaylist.bind(this);
    this.merge = this.merge.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
  }
  componentDidMount() {
    fetch('http://localhost:3000/newPlaylist', {credentials: "same-origin"})
      .then(res => res.json())
      .then(json => {
        console.log(json);
        this.setState({playlists:json.body});
      })
      .catch((err) => {console.log(err)});
  }

    merge() {
      console.log(this.state.selectedPlaylists);
    fetch('http://localhost:3000/mergePlaylists', {
      method:'POST',
      body:JSON.stringify({playlists:this.state.selectedPlaylists, playlistName:this.state.playlistName}),
      credentials: 'same-origin',
      headers: {
      'user-agent': 'Mozilla/4.0 MDN Example',
      'content-type': 'application/json'
      },
    }).then((res) => res.json())
      .then((json) => {
        this.setState({
          url:json.spotify,
        });
      })
      .catch(errMethod);
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

  handleNameChange(e){
    this.setState({playlistName: e.target.value});
  }
  render() {
    if (!this.state.playlists.items) {
      return (<div />);
    }
    if (this.state.url){
      return (<SpotifyRedirect url={this.state.url} />);
    }
    const listItems = this.state.playlists.items.map((playlist) =>
      <AlbumSquare key={playlist.id} playlist={playlist} selected={this.state.selectedPlaylists.includes(playlist.id)} clickedMethod={this.selectPlaylist(playlist.id)} childClass="col-md-3"/>
    );
    return (
      <div className="outerPlaylistBlock">
      <form onSubmit={this.handleSubmit} className="nameForm">
        <label>
          <h3>Playlist Name:</h3>
          <input type="text" value={this.state.playlistName} onChange={this.handleNameChange} />
        </label>
      </form>
        {listItems}
       <a id="bMerge" onClick={this.merge}>
           Merge
       </a>
      </div>
    );
  }
}

function AlbumSquare(props){
  var className = props.childClass + ' playlistBlock';
  if (props.selected) {
    className = className + ' selected';
  }
return (
  <div className={className} onClick={props.clickedMethod} >
    <img className="checkmark" src="static/img/green-check.png"/>
    <AlbumImage playlist = {props.playlist}/>
    <h3 className="playlistName">{props.playlist.name}</h3>
  </div>
  );
}

function AlbumImage(props) {
    if (props.playlist === undefined || !props.playlist.images || props.playlist.images.length === 0) {
      return <div />
    } else {
      return <img src={props.playlist.images[0].url} className="playlistImage" />
    }
  }
