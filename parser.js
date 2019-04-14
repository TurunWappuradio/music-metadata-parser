const Parser = require('icecast-parser');
const fetch = require('node-fetch');

const radioStation = new Parser('http://localhost:8000/metadata.mp3');

let currentSong = '';

radioStation.on('metadata', function(metadata) {
    const newSong = metadata.StreamTitle;
    if (newSong !== currentSong) {
        console.log('new song playing:', newSong);
        fetch(process.env.SERVER_URL, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ song: newSong })
        });
        currentSong = newSong;
    }
});
