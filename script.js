import { Earth } from "./scripts/Earth.js";
import { Lighting } from "./scripts/Lighting.js";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  90,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

camera.position.y = 2;
camera.position.z = 4;

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x000000);
renderer.setPixelRatio(window.devicePixelRatio);

document.body.appendChild(renderer.domElement);

window.addEventListener("resize", () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
});

const controls = new THREE.OrbitControls(camera, renderer.domElement);

const loader = new THREE.TextureLoader();
const spacebg = loader.load("images/space.jpg");
scene.background = spacebg;

new Lighting({ scene });

const earth = new Earth({ scene });
earth.createEarth();

function animate() {
  requestAnimationFrame(animate);
  controls.update();

  if (earth) earth.animate();

  renderer.render(scene, camera);
}
animate();
