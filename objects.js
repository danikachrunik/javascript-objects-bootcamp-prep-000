var playlist = {
  "Katy Perry": "Dark Horse"
};

function updatePlaylist(pl, artist, title) {
  Object.assign({}, pl, {artist: title});
}