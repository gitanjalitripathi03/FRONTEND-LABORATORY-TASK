

// Songs
let songs = [
    {
        name: "Dream Music",
        url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200"
    },
    {
        name: "Love Songs",
        url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
        image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=200"
    },
    {
        name: "Chill Beats",
        url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
        image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=200"
    },
    {
        name: "Acoustic Love",
        url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
        image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=200"
    }
];

let currentSong = 0;

let audio = document.getElementById("audio");

function playSong(index) {

    currentSong = index;

    audio.src = songs[currentSong].url;

    document.getElementById("songName").innerText =
    songs[currentSong].name;

    document.getElementById("currentImage").src =
    songs[currentSong].image;

    audio.play();

    document.getElementById("playButton").innerText = "⏸";

    document.getElementById("status").innerText =
    "Now Playing";
}

function togglePlay() {

    if (audio.src === "") {
        playSong(0);
        return;
    }

    if (audio.paused) {
        audio.play();
        document.getElementById("playButton").innerText = "⏸";
        document.getElementById("status").innerText = "Now Playing";
    }
    else {
        audio.pause();
        document.getElementById("playButton").innerText = "▶";
        document.getElementById("status").innerText = "Paused";
    }
}

function nextSong() {

    currentSong++;

    if (currentSong >= songs.length) {
        currentSong = 0;
    }

    playSong(currentSong);
}

function previousSong() {

    currentSong--;

    if (currentSong < 0) {
        currentSong = songs.length - 1;
    }

    playSong(currentSong);
}

// Volume
document.getElementById("volume").addEventListener("input", function() {
    audio.volume = this.value;
});

// Automatically play next song
audio.addEventListener("ended", nextSong);

// Search
function searchSongs() {

    let value = document.getElementById("search").value.toLowerCase();

    let cards = document.querySelectorAll("#recent .card");

    for (let i = 0; i < cards.length; i++) {

        let name = cards[i].querySelector("h3").innerText.toLowerCase();

        if (name.includes(value)) {
            cards[i].style.display = "block";
        }
        else {
            cards[i].style.display = "none";
        }
    }
}