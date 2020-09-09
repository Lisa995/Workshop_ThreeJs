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
camera.position.z = 10;

//renderer
renderer = new THREE.WebGLRenderer({ antialias : true});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//Light
const light = new THREE.HemisphereLight( 0xffffbb, 0x080820, 1.5 );
const light2 = new THREE.AmbientLight( 0x404040 );

scene.add( light, light2 );

// instantiate a loader
const loader = new THREE.OBJLoader();
loader.setPath('./model/milk.obj');
loader.load("milk.obj", function(object){
    object.position.y -= 10;
    scene.add(object)
})

};

//Make render
function animate () {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
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