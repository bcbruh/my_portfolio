const playlist = [
  'sound/snaptik.vn_7519477720397499666.mp3',
  'sound/snaptik.vn_7284677664135220481.mp3',
  'sound/snaptik.vn_7561708883396316436.mp3'
];
const trimSeconds = 7;
const gapMs = 5000;
const storageKeyIndex = 'bgmusic-track-index';
const storageKeyTime = 'bgmusic-track-time';
let currentIndex = Number(localStorage.getItem(storageKeyIndex)) || 0;
let resumeTime = Number(localStorage.getItem(storageKeyTime)) || 0;
let currentAudio = new Audio();
let gapTimeout = null;
let readyToPlay = false;
let pausedForGap = false;

currentAudio.preload = 'metadata';
currentAudio.volume = 0.2;
currentAudio.loop = false;

function clearGap() {
  if (gapTimeout) {
    clearTimeout(gapTimeout);
    gapTimeout = null;
  }
}

function scheduleNext() {
  clearGap();
  currentIndex = (currentIndex + 1) % playlist.length;
  gapTimeout = setTimeout(() => {
    gapTimeout = null;
    playCurrent();
  }, gapMs);
}

function playCurrent() {
  pausedForGap = false;
  const src = playlist[currentIndex];
  currentAudio.src = src;
  currentAudio.load();

  let stopTime = null;
  let endedByTrim = false;

  currentAudio.onloadedmetadata = () => {
    stopTime = Math.max(0, currentAudio.duration - trimSeconds);
    if (resumeTime > 0 && resumeTime < stopTime) {
      currentAudio.currentTime = resumeTime;
      resumeTime = 0;
    } else {
      currentAudio.currentTime = 0;
    }
    const playPromise = currentAudio.play();
    if (playPromise && typeof playPromise.catch === 'function') {
      playPromise.catch(() => {
        // Autoplay may be blocked. We'll try again on the next user interaction.
      });
    }
  };

  currentAudio.ontimeupdate = () => {
    if (stopTime === null || currentAudio.currentTime < stopTime) return;
    if (currentAudio.paused) return;
    endedByTrim = true;
    pausedForGap = true;
    currentAudio.pause();
    scheduleNext();
  };

  currentAudio.onended = () => {
    if (!endedByTrim) scheduleNext();
  };

  currentAudio.addEventListener('pause', () => {
    if (!pausedForGap && document.visibilityState === 'visible' && readyToPlay) {
      currentAudio.play().catch(() => {});
    }
  });
}

function saveState() {
  if (!currentAudio) return;
  localStorage.setItem(storageKeyIndex, String(currentIndex));
  localStorage.setItem(storageKeyTime, String(currentAudio.currentTime));
}

function startBackgroundMusic() {
  if (readyToPlay) return;
  readyToPlay = true;
  playCurrent();
}

window.addEventListener('load', () => {
  startBackgroundMusic();
});

window.addEventListener('click', () => {
  if (currentAudio.paused && readyToPlay) {
    currentAudio.play().catch(() => {});
  }
}, { once: true });

window.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'visible' && readyToPlay) {
    currentAudio.play().catch(() => {
      // ignore play block from browser policies
    });
  } else if (document.visibilityState === 'hidden') {
    saveState();
  }
});

window.addEventListener('focus', () => {
  if (readyToPlay && currentAudio.paused && !pausedForGap) {
    currentAudio.play().catch(() => {});
  }
});

window.addEventListener('storage', event => {
  if (event.key === storageKeyIndex || event.key === storageKeyTime) {
    currentIndex = Number(localStorage.getItem(storageKeyIndex)) || currentIndex;
    resumeTime = Number(localStorage.getItem(storageKeyTime)) || resumeTime;
  }
});

window.addEventListener('pagehide', () => {
  clearGap();
  saveState();
});

window.addEventListener('beforeunload', () => {
  clearGap();
  saveState();
});
