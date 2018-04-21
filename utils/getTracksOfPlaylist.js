import 'isomorphic-fetch';

/*
 * getTracksOfPlaylist will take in a playlist href
 * a list of tracks 
 */

export default function getTracks(playlist, accessToken) {
  return new Promise((resolve, reject) => {
    fetch(playlist, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }).then(response => response.json())
      .then(responseJSON => {
        if (responseJSON.next){
          getTracks(responseJSON.next, accessToken).then((nextTracks) => {
            var tracks= responseJSON.items;
            tracks = tracks.concat(nextTracks.items);
            const toReturn = responseJSON;
            toReturn.items = tracks;
            resolve(toReturn);
          });
        }
        else {
          resolve(responseJSON);
        }
      });
  });
}
