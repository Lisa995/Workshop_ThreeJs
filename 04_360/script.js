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
camera.target = new THREE.Vector3( 0, 0, 0 );
camera.position.set( 0, 0, 10 );

//renderer
renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//360 world 


//orbit
const controls = new THREE.OrbitControls(camera, renderer.domElement);
camera.position.set( 25, 10, 20 );
controls.update();

};

//make render
function animate () {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}



//call functions
init();
animate();