const body = require('body-parser');
const co = require('co');
const express = require('express');
const next = require('next');
const mysql = require('mysql');
const querystring = require('querystring');
const keys = require('./keys.json');
const request = require('request');
const cookieParser = require('cookie-parser');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const PORT = 3000;

//const con = mysql.createConnection({
//  host: 'sql9.freemysqlhosting.net',
//  user: 'sql9191528',
//  password: 'DBrXQSTtNh',
//  database: 'sql9191528',
//});

function createTables() {
  const createUserTable = 'CREATE TABLE IF NOT EXISTS Users (\
      `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,\
      SpotifyID int,\
      AccessToken VARCHAR(100) NOT NULL,\
      RefreshToken VARCHAR(100) NOT NULL);';
  con.query(createUserTable);
  const createPlaylistsTable = 'CREATE TABLE IF NOT EXISTS Playlists (\
      `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,\
      userID int NOT NULL,\
      playlists VARCHAR(600));';
  con.query(createPlaylistsTable);
}
//createTables();
function login(req, res) {
  const scope = 'playlist-read-private playlist-read-collaborative playlist-modify-public playlist-modify-private';
  res.redirect(`https://accounts.spotify.com/authorize?${querystring.stringify(
    {
      response_type: 'code',
      client_id: keys.client_id,
      scope,
      redirect_uri: 'http://localhost:3000/handleLogin',
    })}`);
}

function checkForUser(userID, accessToken, refreshToken) {
  const userQuery = `SELECT * FROM Users WHERE spotifyID = ${userID}`;
  con.query(userQuery, (err, rows) => {
    if (!rows || rows.length === 0) {
      const userInsertQuery = `INSERT INTO Users VALUES (NULL, ${userID}, '${accessToken}', '${refreshToken}')`;
      con.query(userInsertQuery);
      console.log('inserted!');
    }
  });
}
function insertUserIntoDB(accessToken, refreshToken) {
  const options = {
    url: 'https://api.spotify.com/v1/me',
    headers: { Authorization: 'Bearer ' + accessToken },
    json: true,
  };
  // use the access token to access the Spotify Web API
  request.get(options, function(error, response, body) {
    const userID = parseInt(body.id, 10);
    //checkForUser(userID, accessToken, refreshToken);
    console.log(userID);
  });
}
function handleLogin(req, res) {
  const code = req.query.code;
  const authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    form: {
      code,
      redirect_uri: 'http://localhost:3000/handleLogin',
      grant_type: 'authorization_code',
    },
    headers: {
      'Authorization': 'Basic ' + (new Buffer(keys.client_id + ':' + keys.client_secret).toString('base64'))
    },
    json: true,
  };
  request.post(authOptions, (error, response, data) => {
    const accessToken = data.access_token;
    const refreshToken = data.refresh_token;
    insertUserIntoDB(accessToken, refreshToken);
    res.cookie('user', accessToken);
    res.redirect(`/userLoggedIn?${querystring.stringify({ accessToken, refreshToken })}`);
  });
}
function handleLogout(req, res) {
  res.clearCookie('user');
  res.redirect('/');
}

function checkForCookies(req, res) {
  const user = req.cookies.user;
  if (user) {
    res.redirect(`/userLoggedIn?${querystring.stringify({ accessToken: user })}`);
  } else {
    handle(req, res);
  }
}
co(function* () {
  yield app.prepare();
  const server = express();
  server.use(cookieParser());
  server.use(body.json());
  server.get('/login', login);
  server.get('/handleLogin', handleLogin);
  server.get('/logout', handleLogout);
  server.get('/', checkForCookies);
  server.get('*', (req, res) => handle(req, res));
  server.listen(PORT);
  console.log(`Listening on ${PORT}`);
});
