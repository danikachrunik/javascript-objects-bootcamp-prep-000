var playlist = {
  "Katy Perry": "Dark Horse"
};

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, {artistName: songTitle});
}