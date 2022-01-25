import { loadPlugin } from "@donkeyclip/motorcortex";
import threejsPlugin from "@donkeyclip/motorcortex-threejs";
const { MorphAnimation, ObjectAnimation } = loadPlugin(threejsPlugin);
const cameraPosition = { x: 0, y: 3, z: 4000 };
export const terrain = {
  id: "terrain",
  model: {
    loader: "GLTFLoader",
    file: "./assets/terrain-no-normal.glb",
  },

  settings: {
    position: { x: 0, y: -10, z: -3000 },
    scale: { x: 40, y: 40, z: 400 },
  },
};
export const terrain1 = {
  id: "terrain1",
  model: {
    loader: "GLTFLoader",
    file: "./assets/terrain-no-normal.glb",
  },

  settings: {
    position: { x: 0, y: 1.7, z: -3030 },
    scale: { x: 4, y: 4, z: 4 },
    rotation: { x: 0, y: Math.PI / 10, z: 0 },
  },
};
export const terrain2 = {
  id: "terrain2",
  model: {
    loader: "GLTFLoader",
    file: "./assets/terrain-no-normal.glb",
  },

  settings: {
    position: { x: 0, y: 1.7, z: -3100 },
    scale: { x: 8, y: 8, z: 8 },
    rotation: { x: 0, y: -Math.PI / 10, z: 0 },
  },
};

export const terrain3 = {
  id: "terrain2",
  model: {
    loader: "GLTFLoader",
    file: "./assets/terrain-no-normal.glb",
  },

  settings: {
    position: { x: 0, y: 1.7, z: -3000 },
    scale: { x: 8, y: 8, z: 8 },
    rotation: { x: 0, y: -Math.PI / 4, z: 0 },
  },
};

export const dragon = {
  id: "dragon",
  model: {
    loader: "GLTFLoader",
    file: "./assets/dragon.glb",
  },

  settings: {
    position: { x: 0, y: 50, z: -700 },
    rotation: { x: 0, y: Math.PI, z: 0 },
  },
};

export const castle = {
  id: "castle",
  model: {
    loader: "GLTFLoader",
    file: "./assets/castle.glb",
  },

  settings: {
    position: { x: -5, y: 2, z: -3000 },
  },
};

export const camera = {
  id: "camera_1",
  type: "PerspectiveCamera",
  parameters: [45, 1920 / 1080, 0.01, 1000],
  settings: {
    position: cameraPosition,
    far: 10000000,
    near: 1,
  },
};

const cameraAnimationFunc = (
  values,
  easing,
  duration,
  targetEntity = "!#dragon"
) =>
  new ObjectAnimation(
    {
      animatedAttrs: {
        position: values,
        targetEntity,
      },
    },
    {
      selector: "!#camera_1",
      duration,
      easing,
    }
  );
const dragonAnimationFunc = (
  values,
  easing,
  duration,
  rotationSetY = Math.PI
) =>
  new ObjectAnimation(
    {
      animatedAttrs: {
        position: values,
        rotationSetY,
      },
    },
    {
      selector: "!#dragon",
      duration,
      easing,
    }
  );
export const dragonMorph = () =>
  new MorphAnimation(
    {
      attrs: {
        singleLoopDuration: 700,
        animationName: "Object_0",
      },
      animatedAttrs: {
        time: 11000,
      },
    },
    {
      selector: "!#dragon",
      duration: 7000,
    }
  );

export const dragonMorph1 = () =>
  new MorphAnimation(
    {
      attrs: {
        singleLoopDuration: 700,
        animationName: "Object_0",
      },
      animatedAttrs: {
        time: 20000,
      },
    },
    {
      selector: "!#dragon",
      duration: 20000,
    }
  );
export const dragonAnimation = () =>
  dragonAnimationFunc(
    {
      x: -45,
      y: 9,
      z: -2925,
    },
    "linear",
    7000
  );
export const dragonAnimation1 = () =>
  dragonAnimationFunc(
    {
      x: 120,
      y: 245,
      z: -3964,
    },
    "linear",
    4000
  );
export const targetObject = {
  id: "target",
  object: true,
  settings: {
    position: {
      x: 120,
      y: 245,
      z: -3964,
    },
  },
};
const objectAnimationFunc = (values, easing, duration) =>
  new ObjectAnimation(
    {
      animatedAttrs: {
        position: values,
      },
    },
    {
      selector: "!#target",
      duration,
      easing,
    }
  );
export const objectAnimation = () =>
  objectAnimationFunc({ x: -10, y: 7, z: -2992 }, "easeInOutExpo", 3000);

export const cameraAnimation = () =>
  cameraAnimationFunc(
    {
      x: -83,
      y: 5,
      z: -2762,
    },
    "easeInOutQuad",
    10000
  );
export const cameraAnimation1 = () =>
  cameraAnimationFunc(
    {
      x: 40,
      y: 120,
      z: -3023,
    },
    "easeInQuad",
    3000
  );
export const cameraAnimation2 = () =>
  cameraAnimationFunc(
    {
      x: -10,
      y: 50,
      z: -3040,
    },
    "linear",
    2000
  );
export const cameraAnimation3 = () =>
  cameraAnimationFunc(
    {
      x: -207,
      y: 79,
      z: -3156,
    },
    "linear",
    5000,
    "!#target"
  );
export const cameraAnimation4 = () =>
  cameraAnimationFunc(
    {
      x: -6.59,
      y: 16.44,
      z: -2987.68,
    },
    "linear",
    4000,
    "!#target"
  );
export const cameraAnimation5 = () =>
  cameraAnimationFunc(
    {
      x: 5.55,
      y: 21.5,
      z: -2960.29,
    },
    "linear",
    4000,
    "!#target"
  );
export const cameraAnimation6 = () =>
  cameraAnimationFunc(
    {
      x: 5.55,
      y: 21.5,
      z: -2960.29,
    },
    "linear",
    3000,
    "!#target"
  );
export const objectAnimation1 = () =>
  objectAnimationFunc(
    {
      x: 120,
      y: 245,
      z: -3964,
    },
    "easeInOutExpo",
    3000
  );

export const dragonAnimation2 = () =>
  dragonAnimationFunc(
    {
      x: 5.55,
      y: 20.5,
      z: -2960.29,
    },
    "linear",
    2000,
    0
  );
