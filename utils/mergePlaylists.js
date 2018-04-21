import 'isomorphic-fetch';
import getTracksOfPlaylist from './getTracksOfPlaylist';
/*
 *
 * mergePlaylists will take in a list of playlist
 * IDs and then return a list with the tracks of all the playlists 
 *
 */

export default function mergePlaylists(playlists, accessToken) {
  const playlistTracksP = playlists.map(playlist => getTracksOfPlaylist(playlist, accessToken));
  const songSet = new Set();
  return new Promise((resolve, reject) => {
    Promise.all(playlistTracksP).then((playlistTracks) => {
      playlistTracks.forEach((playlist) => {
        playlist.forEach((song) => {
          songSet.add(song.track.uri);
        });
        resolve(Array.from(songSet));
      });
    });
  });
}
