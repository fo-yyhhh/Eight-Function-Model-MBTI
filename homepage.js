import * as THREE from 'https://unpkg.com/three@latest/build/three.module.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

camera.position.z = 5;

function animate() {

	requestAnimationFrame( animate );


	renderer.render( scene, camera );

}

animate()


import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const loader = new GLTFLoader();
loader.load('../mbti figures/scene.gltf', function (gltf){
        scene.add(gltf.scene);
    },
    (xhr) => {
        console.log((xhr.loaded / xhr.total * 100) + '% 已加载');
    },
    (error) => {
        console.error(error);
    }
);