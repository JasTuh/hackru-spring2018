import React, { Component } from 'react';
import 'isomorphic-fetch';

export default class UserMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playlists: [],
      selectedPlaylists: [],
    };
    this.selectPlaylist = this.selectPlaylist.bind(this)
    this.merge = this.merge.bind(this)
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
      body:JSON.stringify({playlists:this.state.selectedPlaylists}),
      credentials: 'same-origin',
      headers: {
      'user-agent': 'Mozilla/4.0 MDN Example',
      'content-type': 'application/json'
      },
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
      <AlbumSquare key={playlist.id} playlist={playlist} selected={this.state.selectedPlaylists.includes(playlist.id)} clickedMethod={this.selectPlaylist(playlist.id)} childClass="col-md-3"/>
    );
    return (
      <div className="outerPlaylistBlock">
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
  <div className={className} onClick={props.clickedMethod}>
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
      return <img src={props.playlist.images[0].url} className="playlistImage"/>
    }
  }
