import { ImageSource, Loader } from "excalibur";
import sword from "./images/sword.png";
import bunny_ash from './images/rabbitv3_ash.png';
import bunny_batman from './images/rabbitv3_batman.png';
import bunny_bb8 from './images/rabbitv3_bb8.png';
import bunny_frankenstein from './images/rabbitv3_frankenstein.png';
import bunny_neo from './images/rabbitv3_neo.png';
import bunny_sonic from './images/rabbitv3_sonic.png';
import bunny_spidey from './images/rabbitv3_spidey.png';
import bunny_stormtrooper from './images/rabbitv3_stormtrooper.png';
import bunny_superman from './images/rabbitv3_superman.png';
import bunny_tron from './images/rabbitv3_tron.png';
import bunny_wolverine from './images/rabbitv3_wolverine.png';
import bunny_png from './images/rabbitv3.png';

export const Resources = {
  Sword: new ImageSource(sword),
  BunnyAsh: new ImageSource(bunny_ash),
  BunnyBatman: new ImageSource(bunny_batman),
  BunnyBb8: new ImageSource(bunny_bb8),
  BunnyFrankenstein: new ImageSource(bunny_frankenstein),
  BunnyNeo: new ImageSource(bunny_neo),
  BunnySonic: new ImageSource(bunny_sonic),
  BunnySpidey: new ImageSource(bunny_spidey),
  BunnyStormtrooper: new ImageSource(bunny_stormtrooper),
  BunnySuperman: new ImageSource(bunny_superman),
  BunnyTron: new ImageSource(bunny_tron),
  BunnyWolverine: new ImageSource(bunny_wolverine),
  BunnyPng: new ImageSource(bunny_png),
} as const;

export const BunnyImages = [
  Resources.BunnyAsh,
  Resources.BunnyBatman,
  Resources.BunnyBb8,
  Resources.BunnyFrankenstein,
  Resources.BunnyNeo,
  Resources.BunnySonic,
  Resources.BunnySpidey,
  Resources.BunnyStormtrooper,
  Resources.BunnySuperman,
  Resources.BunnyTron,
  Resources.BunnyWolverine,
  Resources.BunnyPng
];

export const loader = new Loader();
for (const res of Object.values(Resources)) {
  loader.addResource(res);
}
