function make_album(artistName, albumTitle, tracks) {
    var album = {
        artistName: artistName,
        albumTitle: albumTitle,
        tracks: tracks
    };
    return album;
}
var myAlbum = make_album("metallica", "ride the lightning", 8);
var myAlbum2 = make_album("beethoven", "ninth symphony", 6);
console.log(myAlbum);
console.log(myAlbum2);
