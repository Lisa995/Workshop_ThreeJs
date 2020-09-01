let scene, camera, cube, renderer;

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
camera.position.z = 5;

//renderer
renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//TASK 1: add a cube (box geometry) with color material

//TASK 3: add a texture (texture loader)


};

//make render
function animate () {
  requestAnimationFrame(animate);

  //TASK 2: cube rotation


  renderer.render(scene, camera);
}

//TASK 4 : Resize window


//call functions
init();
animate();