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


// TASK 2 : Add ambiant light, point light, hemisphere light ...


// TASK 3 : add Orbit Control


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