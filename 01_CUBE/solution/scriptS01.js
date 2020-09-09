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
renderer = new THREE.WebGLRenderer({ antialias : true});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// TASK 1:add a cube (box geometry) with color material
const geometry = new THREE.BoxGeometry(2, 2, 2);
const material = new THREE.MeshNormalMaterial( {color: 0x0000ff} );

//TASK 3: add a texture (texture loader)
//const texture = new THREE.TextureLoader().load('../textures/wood.jpg');
//const material = new THREE.MeshBasicMaterial( { map: texture } );

cube = new THREE.Mesh( geometry, material );
scene.add( cube );

};

//make render
function animate () {
  requestAnimationFrame(animate);

  // TASK 2: cube rotation

  cube.rotation.x += 0.005;
  cube.rotation.y += 0.005;

  renderer.render(scene, camera);
}

// TASK 4 : Resize window
function onWindowResize () {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
};
window.addEventListener('resize', onWindowResize, false)

//call functions
init();
animate();