function make_album (artist_name:string, album_Title:string, tracks?:number){
    let album: {artist: String, Title: String, tracks?: number}={artist:artist_name, Title:album_Title}
    
    if(tracks !== undefined){
        album.tracks = tracks
    }

    return album
}
let album1 = make_album("Arijit Singh", "Aashiqui");
let album2 = make_album("Atif Aslam", "Cock Studio");
let album3 = make_album("Rahat Fateh", "Qawali", 10);

console.log(album1);
console.log(album2);
console.log(album3);