import * as THREE from 'https://unpkg.com/three@latest/build/three.module.js';
import { GLTFLoader } from 'https://unpkg.com/three@latest/examples/jsm/loaders/GLTFLoader.js';
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


//resize the screen proportionally once the screen size is changed
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('resize', onWindowResize, false);



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
loader.load("./earth/scene.gltf", function (gltf1){
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



const colors = [0xFFFF00, 0x00FF00, 0x0000FF, 0x800080]; // yellow, green, blue, purple (IcosahedronGeometry color corresponding to mbti figure color)
const colorImagePaths = [
    ["../mbti pic/yellow1.png", "../mbti pic/yellow2.png", "../mbti pic/yellow3.png", "../mbti pic/yellow4.png"],
    ["../mbti pic/green1.png", "../mbti pic/green2.png", "../mbti pic/green3.png", "../mbti pic/green4.png"],
    ["../mbti pic/blue1.png", "../mbti pic/blue2.png", "../mbti pic/blue3.png", "../mbti pic/blue4.png"],
    ["../mbti pic/purple1.png", "../mbti pic/purple2.png", "../mbti pic/purple3.png", "../mbti pic/purple4.png"]
];

const altTexts = [
    ["ISFP","ISTP","ESFP","ESTP"],
    ["INFP","INFJ","ENFP","ENFJ"],
    ["ISFJ","ISTJ","ESFJ","ESTJ"],
    ["INTP","INTJ","ENTP","ENTJ"]
];



// loop through to create 16 IcosahedronGeometry
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
    icosahedron.userData.altText = altTexts[Math.floor(i / 4)];
    scene.add(icosahedron);
    icosahedrons.push(icosahedron);
}


const imageElement = document.createElement('img');
imageElement.style.position = 'absolute';
imageElement.style.width = '150px'; // pic width
imageElement.style.height = '150px'; // pic height
document.body.appendChild(imageElement);

// mouseclick to listen event
window.addEventListener('click', onMouseClick, false);


let isImageVisible = false;
let mbtiType;
const iconElement = document.createElement('img');


function onMouseClick(event) {
    // mouseclick--->; get mouseclick position
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;

    //check object and mouse intersection
    raycaster.setFromCamera(mouse, camera);

    const intersects = raycaster.intersectObjects(scene.children, true);


    if (intersects.length > 0) {
        // get clicked position
        const clickPoint = intersects[0].point;

        intersects.forEach((intersect) => {
            if (intersect.object.userData.interactive) {
                //console.log(clickPoint);
                const imagePaths = intersect.object.userData.imagePaths;
                // get image(& altText) path
                const index = icosahedrons.indexOf(intersect.object);
                const image = imagePaths[index % 4];

                const altTextPath = intersect.object.userData.altText;
                const altText = altTextPath[index % 4];
                console.log(altText);//print to check if personality type is correct
                // find image & altText according to the path
                
                showImageAtPosition(clickPoint, image,altText);
                //console.log('Clicked on an interactive object!');

                /*
                //link to personality detailed pages
                const urlMapping = {
                    "ISFP": "detailed character page.html",
                    "ISTP": "detailed character page.html",
                    "ESFP": "detailed character page.html",
                    "ESTP": "detailed character page.html",
                    "INFP": "detailed character page.html",
                    "INFJ": "detailed character page.html",
                    "ENFP": "detailed character page.html",
                    "ENFJ": "detailed character page.html",
                    "ISFJ": "detailed character page.html",
                    "ISTJ": "detailed character page.html",
                    "ESFJ": "detailed character page.html",
                    "ESTJ": "detailed character page.html",
                    "INTP": "detailed character page.html",
                    "INTJ": "detailed character page.html",
                    "ENTP": "detailed character page.html",
                    "ENTJ": "detailed character page.html"
                    // ... and so on for other alt texts
                };

                const url = urlMapping[altText];
                if (url) {
                    // go to the personality webpage
                    window.location.href = url;
                } else {
                    console.log("URL not defined for the alt text:", altText);
                }
    */
                console.log('Clicked on an interactive object!');
                isImageVisible = true;
                mbtiType=altText;
            }
        });
    } else {
        // if not interactive object, hide picture
        imageElement.style.display = 'none';
        iconElement.style.display = 'none'
    
        isImageVisible = false;
    }
}


function showImageAtPosition(position, imageUrl,altText) {
    const { x, y } = get2DPosition(position, camera, renderer);
    imageElement.src = imageUrl;
    imageElement.alt = altText;
    imageElement.style.left = `${x}px`;
    imageElement.style.top = `${y}px`;
    imageElement.style.display = 'block';

    // Show the indicator icon
    showIndicatorIcon();
}


// 3d to 2d position since pictures are 2d
function get2DPosition(point, camera, renderer) {
    const vector = point.clone().project(camera);
    const x = ((vector.x + 1) / 2) * window.innerWidth;
    const y = ((-vector.y + 1) / 2) * window.innerHeight;
    return { x, y };
}

function showIndicatorIcon() {
    const iconSize = 0.1 * window.innerWidth;

    iconElement.src = './earth/explore.png'; // Set the path to your icon image
    iconElement.style.width = `${iconSize}px`;
    iconElement.style.height = `${iconSize}px`;
    iconElement.style.position = 'absolute';
    iconElement.style.left = "85%";
    iconElement.style.top = `45%`;
    iconElement.style.display = 'block';
    iconElement.id = 'indicator-icon';

    document.body.appendChild(iconElement);
}

// Add event listener for keyboard 's' key
window.addEventListener('keydown', (event) => {
    if (event.key === 's' && isImageVisible) {
        // Navigate to the detailed page
        window.location.href = `detailed character page.html?mbti=${mbtiType}`;
    }
});



window.addEventListener('mousedown', onMouseDown, false);
//mousedown picture & icon disappear
function onMouseDown() {
    imageElement.style.display = 'none';
    iconElement.style.display = 'none';

    isImageVisible = false;
}


window.addEventListener('resize', function() {
    // Update elements or perform actions on window resize
    // You might want to debounce this event to avoid excessive calls
});




function animate() {
    requestAnimationFrame(animate);

    // whole scene auto-rotation
    scene.rotation.x += 0.0003;
    scene.rotation.y += 0.0003;

        // individual icosahedrons also auto-rotate
        icosahedrons.forEach((icosahedron) => {
        if (icosahedron.userData.interactive) {
            icosahedron.rotation.y += 0.01; 
        }
    });

    controls.update();
    renderer.render(scene, camera);
}

animate()

