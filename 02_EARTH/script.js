let scene, camera, renderer, earthMesh;

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

//add a sphere (sphere geometry)
geometry = new THREE.SphereGeometry(5, 50, 50, 0, Math.PI * 2, 0, Math.PI * 2);
material = new THREE.MeshPhongMaterial();
earthMesh = new THREE.Mesh( geometry, material );

//add img texture
material.map = THREE.ImageUtils.loadTexture('img/earth.jpg')

// TASK 3 : add bump


// TASK 1 : add  ambiant and hemisphere light


// TASK 4 : add stars in background


};

//Make render
function animate () {
  requestAnimationFrame(animate);

  // TASK 2 : Make it moves

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