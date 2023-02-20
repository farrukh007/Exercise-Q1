interface musicAlbum {
    artistName: string;
    albumTitle:  string;
    tracks: number;
}

function make_album (artistName: string, albumTitle: string, tracks:number): musicAlbum{
    const album: musicAlbum = {
        artistName: artistName,
        albumTitle: albumTitle,
        tracks: tracks
    };
    return album;
}

const myAlbum = make_album("metallica", "ride the lightning",8);
const myAlbum2 = make_album("beethoven", "ninth symphony",6);
console.log(myAlbum);
console.log(myAlbum2);

