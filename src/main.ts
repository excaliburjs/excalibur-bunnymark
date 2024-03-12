import { Color, Engine, ExcaliburGraphicsContext } from "excalibur";
import { BunnyImages, loader } from "./resources";
import { Bunny } from "./bunny";

class Game extends Engine {
  bunnies: Bunny[] = [];
  constructor() {
    super({
      width: 800,
      height: 600,
      backgroundColor: Color.fromHex('#FFFFFF'),
      antialiasing: false,
      pixelRatio: 1
    });
  }


  initialize() {
    this.start(loader);
  }

  addBunny() {
    const bunny = new Bunny(BunnyImages[this.bunnies.length % BunnyImages.length], this.getWorldBounds());
    this.bunnies.push(bunny);
  }

  override onInitialize() {
    const params = new URLSearchParams(window.location.search);
    const totalBunnies = parseInt(params.get('count') ?? '100000') || 100000;
    for (let i = 0; i < totalBunnies; i++) {
      this.addBunny();
    }
  }

  override onPostUpdate() {
    for (let i = 0; i < this.bunnies.length; i++) {
      this.bunnies[i].update();
    }
  }

  override onPostDraw(ctx: ExcaliburGraphicsContext) {
    for (let i = 0; i < this.bunnies.length; i++) {
      ctx.drawImage(this.bunnies[i].view.image.image, this.bunnies[i].positionX, this.bunnies[i].positionY);
      // this.bunnies[i].view.draw(ctx, this.bunnies[i].positionX, this.bunnies[i].positionY);
    }
  }
}

export const game = new Game();
game.initialize();