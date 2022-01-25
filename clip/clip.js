import {
  HTMLClip,
  loadPlugin,
  CSSEffect,
  AudioPlayback,
} from "@donkeyclip/motorcortex";
import html from "./clip.html";
import css from "!!raw-loader!./clip.css";
import threejsPlugin from "@donkeyclip/motorcortex-threejs";
const threejs = loadPlugin(threejsPlugin);

import { initParamsValidationRules, initParams } from "./initParams";
import {
  targetObject,
  dragon,
  dragonMorph,
  dragonMorph1,
  dragonAnimation,
  cameraAnimation,
  dragonAnimation1,
  cameraAnimation1,
  cameraAnimation2,
  cameraAnimation3,
  cameraAnimation4,
  cameraAnimation5,
  cameraAnimation6,
  objectAnimation,
  objectAnimation1,
  dragonAnimation2,
  terrain,
  terrain1,
  terrain2,
  terrain3,
  castle,
  camera,
} from "./incidents";

export const clip = new HTMLClip({
  html,
  css,
  host: document.getElementById("clip"),
  initParamsValidationRules,
  initParams: initParams[1].value,
  audioSources: [
    {
      src: "./assets/audio.mp3",
      id: "soundtrack",
      classes: ["audio"],
      base64: false,
      startValues: {
        pan: -1,
        gain: 0,
      },
    },
  ],
  containerParams: {
    width: "800px",
    height: "450px",
  },
});
const songPlayback = new AudioPlayback({
  selector: "~#soundtrack",
  startFrom: 2000,
  duration: 30000,
});

clip.addIncident(songPlayback, 0);
const curtain = new CSSEffect(
  {
    animatedAttrs: {
      opacity: 0,
    },
  },
  { selector: ".curtain", duration: 2000 }
);
const flash = new CSSEffect(
  {
    animatedAttrs: {
      opacity: 1,
    },
  },
  { selector: ".curtain", duration: 100 }
);
const flashout = new CSSEffect(
  {
    animatedAttrs: {
      opacity: 0,
    },
  },
  { selector: ".curtain", duration: 100 }
);
clip.addIncident(flash, 10000);
clip.addIncident(flashout, 10100);

const curtainout = new CSSEffect(
  {
    animatedAttrs: {
      opacity: 1,
    },
  },
  { selector: ".curtain", duration: 200 }
);
clip.addIncident(curtain, 0);
clip.addIncident(curtainout, 27800);

const fog = new CSSEffect(
  {
    animatedAttrs: {
      transform: {
        scaleX: 1.5,
        scaleY: 1.5,
      },
    },
  },
  { selector: ".fog", duration: 6000 }
);
clip.addIncident(fog, 1000);
const threeClip = new threejs.Clip(
  {
    renderers: {
      parameters: [{ physicallyCorrectLights: true }],
      settings: {
        setClearColor: ["#C7DCFF"],
      },
    },
    scenes: {
      fog: ["#C7DCFF", 1, 7000],
    },
    lights: [
      {
        type: "AmbientLight",
        parameters: ["#cacaca"],
      },
      {
        id: "DirectionalLight",
        type: "DirectionalLight",
        parameters: ["0xfff", 1],
        settings: {
          position: { x: -5, y: 202.2, z: -3000 },
          // target: "!#castle",
        },
      },
    ],
    cameras: [camera],
    entities: [
      {
        geometry: { type: "SphereGeometry", parameters: [5000, 100, 50] },
        material: {
          type: "MeshBasicMaterial",
          parameters: [
            {
              color: "#999",
              side: "DoubleSide",
              textureMap: "./assets/skybox.jpg",
            },
          ],
        },
        settings: {
          position: { set: [0, 0, 0] },
          rotation: { x: 0, y: Math.PI / 2, z: 0 },
        },
      },
      {
        geometry: { type: "PlaneGeometry", parameters: [10000, 10000, 50] },
        material: {
          type: "MeshBasicMaterial",
          parameters: [
            {
              color: "#999",
              side: "DoubleSide",
              textureMap: "./assets/ice-terrain-2.png",
            },
          ],
        },
        settings: {
          position: { set: [0, 0, 0] },
          rotation: { x: Math.PI / 2, y: 0, z: 0 },
        },
      },
      {
        geometry: { type: "PlaneGeometry", parameters: [2000, 2000, 50] },
        material: {
          type: "MeshBasicMaterial",
          parameters: [
            {
              color: "#999",
              side: "DoubleSide",
              textureMap: "./assets/ice-terrain-2.png",
            },
          ],
        },
        settings: {
          position: { set: [0, 1, -3000] },
          rotation: { x: Math.PI / 2, y: 0, z: 0 },
        },
      },
      {
        geometry: { type: "PlaneGeometry", parameters: [500, 500, 50] },
        material: {
          type: "MeshBasicMaterial",
          parameters: [
            {
              color: "#999",
              side: "DoubleSide",
              textureMap: "./assets/ice-terrain-2.png",
            },
          ],
        },
        settings: {
          position: { set: [0, 2, -3000] },
          rotation: { x: Math.PI / 2, y: 0, z: 0 },
        },
      },
      terrain,
      terrain1,
      terrain2,
      terrain3,
      dragon,
      castle,
      targetObject,
      // snow,
    ],
    controls: { maxDistance: 50000, enable: true, enableEvents: true },
  },
  {
    selector: ".container",
    containerParams: {
      width: "1920px",
      height: "1080px",
    },
  }
);
// threeClip.addIncident(snowing(), 0);
// threeClip.addIncident(snowAnimation(), 0);
threeClip.addIncident(cameraAnimation(), 0);
threeClip.addIncident(dragonAnimation(), 3000);
threeClip.addIncident(dragonAnimation1(), 10000);
threeClip.addIncident(dragonMorph(), 3000);
threeClip.addIncident(dragonMorph1(), 10000);
threeClip.addIncident(cameraAnimation1(), 10000);
threeClip.addIncident(cameraAnimation2(), 13000);
threeClip.addIncident(objectAnimation(), 15000);
threeClip.addIncident(cameraAnimation3(), 15000);
threeClip.addIncident(cameraAnimation4(), 17000);
threeClip.addIncident(cameraAnimation5(), 20000);
threeClip.addIncident(cameraAnimation6(), 24000);
threeClip.addIncident(objectAnimation1(), 24000);
threeClip.addIncident(dragonAnimation2(), 26000);
window.clip = threeClip;
clip.addIncident(threeClip, 0);
