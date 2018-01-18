var playlist = {
  "Katy Perry": "Dark Horse"
};

function updatePlaylist(pl, artist, title) {
  return Object.assign({}, pl, {artist: title});
}