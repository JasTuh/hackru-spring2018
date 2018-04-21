import React, { Component } from 'react';
import 'isomorphic-fetch';

export default class UserMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playlists: [],
    };
  }
  componentDidMount() {
    fetch('http://localhost:3000/newPlaylist', {credentials: "same-origin"})
      .then(res => res.json())
      .then(json => {
        console.log(json);
        this.setState({playlists:json});
      })
      .catch((err) => {console.log(err)});
  }
  render() {
    if (!this.state.playlists.items) {
      return (<div />);
    }
    // const row = () => <div class="row">;
    // const col = () => <div class="col-md-3">;
    // let x = 0;

    // for (var i = 0; i < this.state.playlists.items.length; i++)

    const listItems = this.state.playlists.items.map((playlist) =>
      <AlbumSquare playlist={playlist} childClass="col-md-3"/>
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
  <div className={props.childClass + ' playlistBlock'}>
    <AlbumImage playlist = {props.playlist}/>
    <h3 className="playlistName">{props.playlist.name}</h3>
  </div>
  );
} 
function AlbumImage(props) {
    if (props.playlist === undefined || !props.playlist.images) {
      return <div />
    } else {
      return <img src={props.playlist.images[0].url} className="playlistImage"/>
    }
  }
