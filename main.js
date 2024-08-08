import "./style.css";

import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

const mapContainer = document.getElementById("map-js");

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000,
);
const light = new THREE.AmbientLight(); // soft white light
const loader = new GLTFLoader();

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);
mapContainer.appendChild(renderer.domElement);

loader.load("models/3d-map.glb", function (gltf) {
  console.log(gltf.asset);
  scene.add(gltf.scene);

  function animate() {
    gltf.scene.rotation.x += 0.01;
    gltf.scene.rotation.y += 0.01;

    renderer.render(scene, camera);
  }

  renderer.setAnimationLoop(animate);
});

scene.add(light);

camera.position.z = 2;
