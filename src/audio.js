export default class AudioController {
  constructor() {
    this.diesAudio = new Audio("./src/assets/snake-die.mp3");
    this.eatAudio = new Audio("./src/assets/snake-eat.mp3");
  }

  playFood() {
    this.eatAudio.play();
  }

  playDies() {
    this.diesAudio.play();
  }
}
