class Media {
    constructor(title, artist, duration, filePath) {
        this.#title = title;
        this.#artist = artist;
        this.#duration = duration;
        this.#filePath = filePath;
        this.#playCount = 0;
        this.#lastPlayed = null;
        this.#isPlaying = false;
        this.currentPosition = 0;
    }
    #title;
    #artist;
    #duration;
    #filePath;
    #playCount;
    #lastPlayed;
    #isPlaying;
    currentPosition;

    getTitle() {
        return this.#title;
    }
    getArtist() {
        return this.#artist;
    }
    getDuration() {
        return this.#duration;
    }
    getPlayCount() {
        return this.#playCount;
    }
    getLastPlayed() {
        return this.#lastPlayed;
    }
    isCurrentlyPlaying() {
        return this.#isPlaying;
    }
    setCurrentPlaying(bool) {
        this.#isPlaying = bool;
    }
    setCurrentPosition(position) {
        if (position >= 0 && position <= this.#duration) {
            this.currentPosition = position;    
        }
    }
    getCurrentPosition() {
        return this.currentPosition;
    }
    updatePlayStatistics() {
        this.#playCount += 1;
        this.#lastPlayed = new Date();
    }

    play() {
        throw new Error("Method 'play()' must be implemented.");
    }
    pause() {
        throw new Error("Method 'pause()' must be implemented.");
    }
    stop() {
        throw new Error("Method 'stop()' must be implemented.");
    }
    getMediaInfo() {
        throw new Error("Method 'getMediaInfo()' must be implemented.");
    }
    getFormattedDuration() {
        const minutes = Math.floor(this.#duration / 60);
        const seconds = this.#duration % 60;
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    }
    getProgress() {
        if (this.#duration === 0) return 0;
        return (this.currentPosition / this.#duration) * 100;
    }
};

class AudioFile extends Media {
    constructor(title, artist, duration, filePath, format, bitrate) {
        super(title, artist, duration, filePath);
        this.#format = format;
        this.#bitrate = bitrate;
        this.#volume = 50;
    }
    #format;
    #bitrate;
    #volume;
    #isPlay;
    // #updatePlayStatistics;
    play() {
        this.#isPlay = true;
        this.setCurrentPlaying(this.#isPlay);
        this.updatePlayStatistics();
        return `Playing audio: ${this.getTitle()} by ${this.getArtist()} playcount: ${this.getPlayCount()}`;
    }
    pause(){
        this.setCurrentPlaying(false);
        return `Paused audio: ${this.getTitle()}`;
    }
    stop(){
        this.setCurrentPlaying(false);
        this.currentPosition = 0;
    }
    getMediaInfo() {
        return {
            Title: this.getTitle(),
            Artist: this.getArtist(),
            Type: "Audio",
            Duration: this.getFormattedDuration(),
            Format: this.#format,
            Bitrate: `${this.#bitrate} kbps`
        }
    }
    setVolume(level){
        this.#volume = Math.max(0, Math.min(100, level));
        return `Volume set to ${this.#volume}%`;
    }
    getVolume(){
        return this.#volume;
    }
};

const song = new AudioFile("Zaalima", "Arijit Singh", 240, "/path/to/song.mp3", "mp3", 320);
// console.log(song.play());
// console.log(song.pause());
// console.log(song.getMediaInfo());
// console.log(song.getVolume());
console.log(song.getCurrentPosition());