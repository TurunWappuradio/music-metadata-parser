# music-metadata-parser
##### Disclaimer: This is absolute awful bubblegum code for getting metadata out of Mixxx

Parse music from an Icecast stream from Mixxx and send it to a remote server.

Mixxx, an Icecast container and this app run on the studio computer.
Mixxx streams audio and metadata to Icecast. This application polls the audio stream
and parses its metadata and sends it to a [remote server](https://github.com/TurunWappuradio/music-metadata-server).
The remote server then serves that data to clients.
