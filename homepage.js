import * as THREE from 'https://unpkg.com/three@latest/build/three.module.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'https://unpkg.com/three@latest/examples/jsm/controls/OrbitControls.js';



const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);


const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

camera.position.x = 0;
camera.position.y = 0;
camera.position.z = 18;


const SceneLight = new THREE.AmbientLight(0xffffff, 1); // light & strength
scene.add(SceneLight);

//add directionlight to show the shapes
const directionalLight1 = new THREE.DirectionalLight(0xffffff, 3);
directionalLight1.position.set(1, 1, 1); 
scene.add(directionalLight1);

const directionalLight2 = new THREE.DirectionalLight(0xffffff, 4);
directionalLight2.position.set(-1, -1, -1); 
scene.add(directionalLight2);

const pointLight = new THREE.PointLight(0xffffff, 3, 20); //strength & distance
pointLight.position.set(0, 0, 5);
scene.add(pointLight);


const controls = new OrbitControls(camera, renderer.domElement);
controls.enableZoom = false;
controls.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
controls.dampingFactor = 0.25;
controls.screenSpacePanning = false;





const loader = new GLTFLoader();

loader.load('../earth/scene.gltf', function (gltf1){
    const model1 = gltf1.scene;
    scene.add(model1);
},
(xhr) => {
    console.log((xhr.loaded / xhr.total * 100) + '% loaded');
},
(error) => {
    console.error(error);
}
);

/*
loader.load('../mbti figures/scene.gltf', function (gltf2){
        const model2 = gltf2.scene;
        model2.position.set(0, 0, -200);
        scene.add(model2);
    },
    (xhr) => {
        console.log((xhr.loaded / xhr.total * 100) + '% loaded 2');
    },
    (error) => {
        console.error(error);
    }
);
*/


function animate() {

	requestAnimationFrame( animate );

    controls.update();

	renderer.render( scene, camera );

}

animate()

