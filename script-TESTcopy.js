let vinyl = document.querySelector('#vinyl');
let songNameDiv = document.querySelector('.songName');
let prevBtn = document.querySelector('.back');
let nextBtn = document.querySelector('.forward');
let playPauseBtn = document.querySelector('.playPause');
let muteBtn = document.querySelector('.mute');
let tracks = [
    {
        id: 'just_Dance',
        name: 'Just Dance',
        audioPath: 'music/LadyGaga/LG1/Lady_Gaga_-_Just_Dance.mp3'
    },
    {
        id: 'love_Game',
        name: 'LoveGame',
        audioPath: 'music/LadyGaga/LG1/Lady_Gaga_-_LoveGame.mp3'
    },
    {
        id: 'papa_RAZZI',
        name: 'Paparazzi',
        audioPath: 'music/LadyGaga/LG1/Lady_Gaga_-_Paparazzi.mp3'
    },
    {
        id: 'poker_Face',
        name: 'Poker Face',
        audioPath: 'music/LadyGaga/LG1/Lady_Gaga_-_Poker_Face.mp3'
    },
    {
        id: 'iLike_itRough',
        name: 'I Like It Rough',
        audioPath: 'music/LadyGaga/LG1/Lady_Gaga_-_I_Like_It_Rough.mp3'
    },
    {
        id: 'eh_Eh',
        name: 'Eh, Eh (Nothing Else I Can Say)',
        audioPath: 'music/LadyGaga/LG1/Lady_Gaga_-_Eh_Eh_Nothing_Else_I_Can_Say.mp3'
    },
    {
        id: 'BDR',
        name: 'Beautiful, Dirty, Rich',
        audioPath: 'music/LadyGaga/LG1/Lady_Gaga_-_Beautiful_Dirty_Rich.mp3'
    },
    {
        id: 'the_Fame',
        name: 'The Fame',
        audioPath: 'music/LadyGaga/LG1/Lady_Gaga_-_The_Fame.mp3'
    },
    {
        id: 'money_Honey',
        name: 'Money Honey',
        audioPath: 'music/LadyGaga/LG1/Lady_Gaga_-_Money_Honey.mp3'
    },
    {
        id: 'star_Struck',
        name: 'Starstruck (ft. Space Cowboy, Flo Rida)',
        audioPath: 'music/LadyGaga/LG1/Lady_Gaga_Flo_Rida_Space_Cowboy_-_Starstruck.mp3'
    },
    {
        id: 'bBb',
        name: 'Boys Boys Boys',
        audioPath: 'music/LadyGaga/LG1/Lady_Gaga_-_Boys_Boys_Boys.mp3'
    },
    {
        id: 'paper_Gangsta',
        name: 'Paper Gangsta',
        audioPath: 'music/LadyGaga/LG1/Lady_Gaga_-_Paper_Gangsta.mp3'
    },
    {
        id: 'vanity',
        name: 'Vanity',
        audioPath: 'music/LadyGaga/LG1/Lady_Gaga_-_Vanity.mp3'
    },
    {
        id: 'brown_Eyes',
        name: 'Brown Eyes',
        audioPath: 'music/LadyGaga/LG1/Lady_Gaga_-_Brown_Eyes.mp3'
    },
    {
        id: 'summer_Boy',
        name: 'Summerboy',
        audioPath: 'music/LadyGaga/LG1/Lady_Gaga_-_Summerboy.mp3'
    },
    {
        id: 'again_Again',
        name: 'Again Again',
        audioPath: 'music/LadyGaga/LG1/Lady_Gaga_-_Again_Again.mp3'
    },
    {
        id: 'disco_Heaven',
        name: 'Disco Heaven',
        audioPath: 'music/LadyGaga/LG1/Lady_Gaga_-_Disco_Heaven.mp3'
    },
    {
        id: 'retro_Dance_Freak',
        name: 'Retro, Dance, Freak',
        audioPath: 'music/LadyGaga/LG1/Lady_Gaga_-_Retro_Dance_Freak.mp3'
    },
];
let currentTrackIndex = -1;
let currentAudio = null;
let isPlaying = false;
let isMuted = false;

function updateSongName() {
    if (currentTrackIndex >= 0 && currentTrackIndex < tracks.length) {
        songNameDiv.textContent = tracks[currentTrackIndex].name;
    } else {
        songNameDiv.textContent = 'N/A';
    }
};

function stopCurrentTrack() {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }
};

function resetAllTrackButtons() {
    tracks.forEach(track => {
        const btn = document.querySelector('#' + track.id);
        if (btn) {
            btn.src = 'media/play.png';
        }
    });
};

function playTrack(index) {
    if (index < 0 || index >= tracks.length) {
        return;
    }
    if (currentAudio && currentAudio !== (tracks[index]._audio || null)) {
        stopCurrentTrack();
    }
    currentTrackIndex = index;
    if (!tracks[index]._audio) {
        tracks[index]._audio = new Audio(tracks[index].audioPath);
    }
    currentAudio = tracks[index]._audio;
    if (isMuted) {
        currentAudio.volume = 0;
    } else {
        currentAudio.volume = 1;
    }
    currentAudio.play();
    isPlaying = true;
    playPauseBtn.src = 'media/pause.png';
    vinyl.classList.add('spinning');
    updateSongName();
    resetAllTrackButtons();
    const currentBtn = document.querySelector('#' + tracks[index].id);
    if (currentBtn) {
        currentBtn.src = 'media/pause.png';
    }
};

function togglePlayPause() {
    if (currentTrackIndex < 0 || !currentAudio) {
        return;
    }
    if (isPlaying) {
        currentAudio.pause();
        isPlaying = false;
        playPauseBtn.src = 'media/play.png';
        vinyl.classList.remove('spinning');
        const trackBtn = document.querySelector('#' + tracks[currentTrackIndex].id);
        if (trackBtn) {
            trackBtn.src = 'media/play.png';
        }
    } else {
        currentAudio.play();
        isPlaying = true;
        playPauseBtn.src = 'media/pause.png';
        vinyl.classList.add('spinning');
        const trackBtn = document.querySelector('#' + tracks[currentTrackIndex].id);
        if (trackBtn) {
            trackBtn.src = 'media/pause.png';
        }
    }
};

function nextTrack() {
    if (currentTrackIndex < 0) {
        return;
    }
    const nextIndex = currentTrackIndex + 1;
    if (nextIndex < tracks.length) {
        playTrack(nextIndex);
    } else {
        stopCurrentTrack();
        currentTrackIndex = -1;
        currentAudio = null;
        isPlaying = false;
        playPauseBtn.src = 'media/play.png';
        vinyl.classList.remove('spinning');
        updateSongName();
        resetAllTrackButtons();
    }
};

function prevTrack() {
    if (currentTrackIndex < 0) {
        return;
    }
    const prevIndex = currentTrackIndex - 1;
    if (prevIndex >= 0) {
        playTrack(prevIndex);
    } else {
        stopCurrentTrack();
        currentTrackIndex = -1;
        currentAudio = null;
        isPlaying = false;
        playPauseBtn.src = 'media/play.png';
        vinyl.classList.remove('spinning');
        updateSongName();
        resetAllTrackButtons();
    }
};

function toggleMute() {
    isMuted = !isMuted;
    if (isMuted) {
        if (currentAudio) {
            currentAudio.volume = 0;
        }
        muteBtn.src = 'media/mute_on.png';
    } else {
        if (currentAudio) {
            currentAudio.volume = 1;
        }
        muteBtn.src = 'media/mute_off.png';
    }
};

tracks.forEach(function(track, index) {
    const button = document.querySelector('#' + track.id);
    if (button) {
        button.addEventListener('click', function() {
            if (currentTrackIndex === index) {
                togglePlayPause();
            } else {
                playTrack(index);
            }
        });
    }
});
if (prevBtn) {
    prevBtn.addEventListener('click', prevTrack);
};
if (nextBtn) {
    nextBtn.addEventListener('click', nextTrack);
};
if (playPauseBtn) {
    playPauseBtn.addEventListener('click', togglePlayPause);
};
if (muteBtn) {
    muteBtn.addEventListener('click', toggleMute);
};
updateSongName();