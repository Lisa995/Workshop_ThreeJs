let scene, camera, renderer;

function init () {
//scene
scene = new THREE.Scene();

//camera
camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.set( 25, 10, 20 );

//renderer
renderer = new THREE.WebGLRenderer({ antialias : true});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//Background
const bgImg = new THREE.TextureLoader().load('./model/bg.png');
scene.background = bgImg;


// TASK 1 : Add the gltf model
const loader = new THREE.GLTFLoader();
loader.load("./model/scene.gltf", function(gltf){
  scene.add(gltf.scene)
})

//TASK 2 : Add ambiant light, point light, hemisphere light ...
const ambiLight = new THREE.AmbientLight( 0x404040, 0 );
const light = new THREE.PointLight( 0xF5d8cc, 4 );
light.position.set( 50, 50, 50 );
const hemiLight = new THREE.HemisphereLight( 0x0000ff, 0x00ff00, 0.6 );
scene.add( ambiLight, light, hemiLight );


//TASK 3 : add Orbit Control
const controls = new THREE.OrbitControls(camera, renderer.domElement);
camera.position.set( 25, 10, 20 );
controls.update();
};

//Make render
function animate () {
  requestAnimationFrame(animate);

  renderer.render(scene, camera);
  console.log(camera.position)
}

//Resize window
function onWindowResize () {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
};
window.addEventListener('resize', onWindowResize, false)

//Call functions
init();
animate();