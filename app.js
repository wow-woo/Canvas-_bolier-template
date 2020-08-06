class App {
  constructor() {
    this.canvas = document.createElement("canvas");
    this.ctx = this.canvas.getContext("2d");
    document.body.appendChild(this.canvas);

    window.addEventListener("resize", this.resize.bind(this), false);
    this.resize();

    window.requestAnimationFrame(this.animation.bind(this));
  }
  resize() {
    this.devicePixelRatio = window.devicePixelRatio > 1 ? 2 : 1;

    this.stageWidth = document.body.clientWidth;
    this.stageHeight = document.body.clientHeight;

    this.canvas.width = this.stageWidth * this.devicePixelRatio;
    this.canvas.height = this.stageHeight * this.devicePixelRatio;

    this.ctx.scale(this.devicePixelRatio, this.devicePixelRatio);
  }
  animation() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    window.requestAnimationFrame(this.animation.bind(this));
  }
}
window.onload = () => new App();
