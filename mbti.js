import * as THREE from 'https://unpkg.com/three@latest/build/three.module.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'https://unpkg.com/three@latest/examples/jsm/controls/OrbitControls.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

camera.position.x = 0;
camera.position.y = 0;
camera.position.z = 18;

// 添加方向光
const directionalLight = new THREE.DirectionalLight(0xffffff, 1); // color, intensity
directionalLight.position.set(1, 1, 1); // 设置光源位置
scene.add(directionalLight);

const loader = new GLTFLoader();

loader.load('../mbti figures/scene.gltf', function (gltf2){
    const model2 = gltf2.scene;
    const scaleValue = 0.2;
    model2.scale.set(scaleValue, scaleValue, scaleValue);
    scene.add(model2);
},
(xhr) => {
    console.log((xhr.loaded / xhr.total * 100) + '% loaded 2');
},
(error) => {
    console.error(error);
});

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

animate();
