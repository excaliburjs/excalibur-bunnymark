import { Color, Engine, ExcaliburGraphicsContext } from "excalibur";
import { BunnyImages, loader } from "./resources";
import { Bunny } from "./bunny";

const bunnyText = document.getElementById('num-bunnies')!;
const addBunnies = document.getElementById('add-bunnies')!;
const reset = document.getElementById('reset')!;
const DEFAULT_BUNNIES = 1000;
class Game extends Engine {
  bunnies: Bunny[] = [];
  constructor() {
    super({
      width: 800,
      height: 600,
      backgroundColor: Color.fromHex('#FFFFFF'),
      antialiasing: false,
      canvasElementId: 'game',
      enableCanvasTransparency: false,
      useDrawSorting: false,
      pixelRatio: 1
    });
    addBunnies.addEventListener('click', () => {
      this.addBunniesClick()
    });
    reset.addEventListener('click', () => {
      window.location =  window.location.href.replace(window.location.search, '') as any;
    })
  }


  initialize() {
    this.start(loader);
  }

  addBunniesClick() {
    for (let i = 0; i < 1000; i++) {
      this.addBunny();
    }
    if (window.location.search) {
      window.history.replaceState({}, 'Excalibur Bunnymark', window.location.href.replace(window.location.search, `?count=${this.bunnies.length}`));
    } else {
      window.history.replaceState({}, 'Excalibur Bunnymark', window.location.href + `?count=${this.bunnies.length}`);
    }
    bunnyText.innerText = `Number of Bunnies: ${this.bunnies.length}`;
  }

  addBunny() {
    const bunny = new Bunny(BunnyImages[this.bunnies.length % BunnyImages.length], this.getWorldBounds());
    this.bunnies.push(bunny);
  }

  override onInitialize() {
    const params = new URLSearchParams(window.location.search);
    const totalBunnies = parseInt(params.get('count') ?? DEFAULT_BUNNIES.toString()) || DEFAULT_BUNNIES;
    console.log('total bunnies', totalBunnies);
    bunnyText.innerText = 'Number of Bunnies: ' + totalBunnies;
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
      ctx.drawImage(
        this.bunnies[i].view.image.image, 
        this.bunnies[i].positionX,
        this.bunnies[i].positionY);
    }
  }
}

export const game = new Game();
game.initialize();