class Timer {
  constructor() {
    this.seconds = 0;
    this.intervalId = null;
  }

  start() {
    if (this.intervalId) return;.
    this.intervalId = setInterval(() => {
      this.seconds++;
    }, 1000);
  }

  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }

  reset() {
    this.stop();
    this.seconds = 0;
  }
}
