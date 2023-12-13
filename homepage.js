import * as THREE from 'https://unpkg.com/three@latest/build/three.module.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'https://unpkg.com/three@latest/examples/jsm/controls/OrbitControls.js';



//set scene and camera
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

camera.position.x = 0;
camera.position.y = 0;
camera.position.z = 18;



//set light
const SceneLight = new THREE.AmbientLight(0xffffff, 1); // light & strength
scene.add(SceneLight);

//add directionlight to show the shapes
const directionalLight1 = new THREE.DirectionalLight(0xffffff, 3);
directionalLight1.position.set(1, 1, 1); 
scene.add(directionalLight1);

const directionalLight2 = new THREE.DirectionalLight(0xffffff, 4);
directionalLight2.position.set(-1, -1, -1); 
scene.add(directionalLight2);

const pointLight1 = new THREE.PointLight(0xffffff, 5, 20); //strength & distance
pointLight1.position.set(0, 0, 5);
scene.add(pointLight1);




//set rotation center & 3D dragable earth model
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableZoom = false;
controls.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
controls.dampingFactor = 0.25;
controls.screenSpacePanning = false;


//load earth model
let earthModel;
const loader = new GLTFLoader();
loader.load('../earth/scene.gltf', function (gltf1){
    const earth = gltf1.scene;
    scene.add(earth);
    earthModel = earth;
    
},
(xhr) => {
    console.log((xhr.loaded / xhr.total * 100) + '% loaded');
},
(error) => {
    console.error(error);
}
);




// 16IcosahedronGeometry mouseonclick to go to 16mbti's figure
const geometries = [];
const materials = [];
const icosahedrons = [];
const sphereRadius = 9.5; // 16IcosahedronGeometry equal distance to sphere center

const colors = [0xFFFF00, 0x00FF00, 0x0000FF, 0x800080]; // yellow, green, blue, purple
const colorImagePaths = [
    [`../mbti pic/yellow1.png`, `../mbti pic/yellow2.png`, `../mbti pic/yellow3.png`, `../mbti pic/yellow4.png`],
    [`../mbti pic/green1.png`, `../mbti pic/green2.png`, `../mbti pic/green3.png`, `../mbti pic/green4.png`],
    [`../mbti pic/blue1.png`, `../mbti pic/blue2.png`, `../mbti pic/blue3.png`, `../mbti pic/blue4.png`],
    [`../mbti pic/purple1.png`, `../mbti pic/purple2.png`, `../mbti pic/purple3.png`, `../mbti pic/purple4.png`]
];



// loop through to make 16IcosahedronGeometry
for (let i = 0; i < 16; i++) {
    const phi = Math.acos(-1 + (2 * i) / 16); // longitude
    const theta = Math.sqrt(16 * Math.PI) * phi; // latitude

    const x = sphereRadius * Math.cos(theta) * Math.sin(phi);
    const y = sphereRadius * Math.sin(theta) * Math.sin(phi);
    const z = sphereRadius * Math.cos(phi);

    const geometry = new THREE.IcosahedronGeometry(0.4, 0);
    const material = new THREE.MeshStandardMaterial({ color: colors[Math.floor(i / 4)], roughness: 0.7, metalness: 0 });

    geometries.push(geometry);
    materials.push(material);

    const icosahedron = new THREE.Mesh(geometry, material);
    icosahedron.position.set(x, y, z);
    icosahedron.userData.interactive = true;

    // Set image paths based on color
    icosahedron.userData.imagePaths = colorImagePaths[Math.floor(i / 4)];
    scene.add(icosahedron);
    icosahedrons.push(icosahedron);
}

const imageElement = document.createElement('img');
imageElement.style.position = 'absolute';
imageElement.style.width = '100px'; // pic width
imageElement.style.height = '100px'; // pic height
document.body.appendChild(imageElement);

// mouseclick to listen event
window.addEventListener('click', onMouseClick, false);



function onMouseClick(event) {
    // mouseclick--->
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);

    const intersects = raycaster.intersectObjects(scene.children, true);

    if (intersects.length > 0) {
        // get clicked position
        const clickPoint = intersects[0].point;

        intersects.forEach((intersect) => {
            if (intersect.object.userData.interactive) {
                console.log(clickPoint);
                const imagePaths = intersect.object.userData.imagePaths;
                // get image path
                const index = icosahedrons.indexOf(intersect.object);
                const image = imagePaths[index % 4];
                // find image according to the path
                console.log(index);
                showImageAtPosition(clickPoint, image);
                console.log('Clicked on an interactive object!');
            }
        });
    } else {
        // if not interactive object, hide picture
        imageElement.style.display = 'none';
    }
}


function showImageAtPosition(position, imageUrl) {
    const { x, y } = get2DPosition(position, camera, renderer);
    imageElement.src = imageUrl;
    imageElement.style.left = `${x}px`;
    imageElement.style.top = `${y}px`;
    imageElement.style.display = 'block';
}


// 3d to 2d position since pictures are 2d
function get2DPosition(point, camera, renderer) {
    const vector = point.clone().project(camera);
    const x = ((vector.x + 1) / 2) * window.innerWidth;
    const y = ((-vector.y + 1) / 2) * window.innerHeight;
    return { x, y };
}




// auto-rotation
function animate() {
    requestAnimationFrame(animate);


    scene.rotation.x += 0.00008;
    scene.rotation.y += 0.00008;

        icosahedrons.forEach((icosahedron) => {
        if (icosahedron.userData.interactive) {
            icosahedron.rotation.y += 0.01; 
        }
    });

    controls.update();
    renderer.render(scene, camera);
}

animate()
