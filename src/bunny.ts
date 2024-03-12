import { BoundingBox, ImageSource, Sprite, vec } from "excalibur";

export class Bunny {
    view: Sprite;

    gravity = 0.75;

    speedX = Math.random() * 10;
    speedY = (Math.random() * 10) - 5;

    positionX = 0;
    positionY = 0;

    bounds: BoundingBox;

    constructor(texture: ImageSource, bounds: BoundingBox) {
        this.view = texture.toSprite();
        this.view.origin = vec(25 * .5, 32 * 1);
        this.bounds = bounds;
    }

    public update() {
        let pX = this.positionX;
        let pY = this.positionY;

        pX += this.speedX;
        pY += this.speedY;
        this.speedY += this.gravity;

        if (pX > this.bounds.right) {
            this.speedX *= -1;
            pX = this.bounds.right;
        }
        else if (pX < this.bounds.left) {
            this.speedX *= -1;
            pX = this.bounds.left;
        }

        if (pY > this.bounds.bottom) {
            this.speedY *= -0.85;
            pY = this.bounds.bottom;
            if (Math.random() > 0.5) {
                this.speedY -= Math.random() * 6;
            }
        }
        else if (pY < this.bounds.top) {
            this.speedY = 0;
            pY = this.bounds.top;
        }

        this.positionX = pX;
        this.positionY = pY;
    }

    public reset() {
        this.positionX = 0;
        this.positionY = 0;
    }
}