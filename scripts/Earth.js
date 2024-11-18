export class Earth {
  constructor({ scene }) {
    this.scene = scene;
    this.sphere = null;
  }

  createEarth() {
    const geometry = new THREE.SphereGeometry(2, 64, 32);
    const loader = new THREE.TextureLoader();

    const colorMap = loader.load("../images/earth.jpg");
    const normalMap = loader.load("../images/normal.jpg");
    const specMap = loader.load("../images/specular.jpg");

    const material = new THREE.MeshPhongMaterial({
      color: 0xffffff,
      map: colorMap,
      normalMap: normalMap,
      specularMap: specMap,
      specular: new THREE.Color(0x333333),
      shininess: 15,
    });

    this.sphere = new THREE.Mesh(geometry, material);
    this.scene.add(this.sphere);
  }

  animate() {
    this.sphere.rotation.y += 0.01;
  }
}
