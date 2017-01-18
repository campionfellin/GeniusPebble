var api_key = "grg-4g1zQxbkYllPNSWuJhbqiWXkGnwRc-pavD6EG4W-4TQpNXVAt3L3WJXeF_0y";
var lyricist = require('lyricist')(api_key);




lyricist.song({search: "hey whats up hello"}, function (err, song) {
  console.log("%s - %s", song.primary_artist.name, song.title);
  console.log();
  console.log(song.lyrics);
});


