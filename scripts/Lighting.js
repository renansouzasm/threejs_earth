export class Lighting {
  constructor({ scene }) {
    this.scene = scene;
    this.createLights();
  }

  createLights() {
    this.directLight = new THREE.DirectionalLight(0xffffff, 2);
    this.directLight.position.set(-10, 0, 10);
    this.directLight.target.position.set(0, 0, 0);

    this.ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    this.scene.add(this.ambientLight, this.directLight);
    this.scene.add(this.directLight.target);
  }
}
