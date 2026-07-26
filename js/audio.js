class AudioPlayer {
  constructor() {
    this.synth = window.speechSynthesis;
    this.utterance = null;
    this.playing = false;
    this.rate = 0.9;
    this.onPlayCallback = null;
    this.onPauseCallback = null;
    this.onEndCallback = null;
  }

  speak(text, rate = null) {
    this.stop();

    if (rate !== null) this.rate = rate;

    this.utterance = new SpeechSynthesisUtterance(text);
    this.utterance.lang = 'es-ES';
    this.utterance.rate = this.rate;
    this.utterance.pitch = 1.0;
    this.utterance.volume = 1.0;

    this.utterance.onend = () => {
      this.playing = false;
      if (this.onEndCallback) this.onEndCallback();
    };

    this.utterance.onerror = (event) => {
      console.error('Speech synthesis error:', event);
      this.playing = false;
      if (this.onPauseCallback) this.onPauseCallback();
    };

    this.synth.speak(this.utterance);
    this.playing = true;
    if (this.onPlayCallback) this.onPlayCallback();
  }

  pause() {
    if (this.playing) {
      this.synth.pause();
      this.playing = false;
      if (this.onPauseCallback) this.onPauseCallback();
    }
  }

  resume() {
    if (!this.playing && this.utterance) {
      this.synth.resume();
      this.playing = true;
      if (this.onPlayCallback) this.onPlayCallback();
    }
  }

  stop() {
    this.synth.cancel();
    this.playing = false;
    this.utterance = null;
  }

  toggle(text) {
    if (this.playing) {
      this.pause();
    } else if (this.utterance) {
      this.resume();
    } else {
      this.speak(text);
    }
  }

  setRate(rate) {
    this.rate = rate;
    if (this.playing) {
      const currentText = this.utterance ? this.utterance.text : '';
      if (currentText) {
        this.speak(currentText, rate);
      }
    }
  }

  isPlaying() {
    return this.playing;
  }
}

window.AudioPlayer = AudioPlayer;
