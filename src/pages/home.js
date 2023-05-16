import { ReactSVG } from "react-svg";
import barcode from "../img/barcode.svg";
import * as THREE from "three";

// Step 1: Create a scene
const scene = new THREE.Scene();

// Step 2: Create a camera
const camera = new THREE.PerspectiveCamera(
  20,
  window.innerWidth / window.innerHeight,
  0.1,
  500
);
camera.position.set(0, 0, 10);

// Step 3: Create a renderer and add to the DOM
const renderer = new THREE.WebGLRenderer({ alpha: true }); // set alpha to true for transparent background
const container = document.createElement("div");
document.body.appendChild(container);
container.appendChild(renderer.domElement);

// Step 4: Add a mesh to the scene
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ wireframe: true });
const cube = new THREE.Mesh(geometry, material);
cube.position.set(0, 0, 0); // set position
cube.rotation.set(0.5, 0.5, 0); // set rotation
cube.scale.set(2, 2, 2); // set scale
scene.add(cube);

// Agregar el siguiente código después de crear el cubo

let isDragging = false;
let previousMousePosition = {
  x: 0,
  y: 0,
};

function onDocumentMouseDown(event) {
  isDragging = true;
}

function onDocumentMouseMove(event) {
  if (!isDragging) {
    return;
  }

  const deltaMove = {
    x: event.offsetX - previousMousePosition.x,
    y: event.offsetY - previousMousePosition.y,
  };

  const deltaRotationQuaternion = new THREE.Quaternion().setFromEuler(
    new THREE.Euler(
      toRadians(deltaMove.y * 1),
      toRadians(deltaMove.x * 1),
      0,
      "XYZ"
    )
  );

  cube.quaternion.multiplyQuaternions(deltaRotationQuaternion, cube.quaternion);
  previousMousePosition = {
    x: event.offsetX,
    y: event.offsetY,
  };
}

function onDocumentMouseUp() {
  isDragging = false;
}

function toRadians(angle) {
  return angle * (Math.PI / 180);
}

document.addEventListener("mousedown", onDocumentMouseDown);
document.addEventListener("mousemove", onDocumentMouseMove);
document.addEventListener("mouseup", onDocumentMouseUp);

function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
}
animate();

function home() {
  return (
    <div className="relative flex flex-col">
      <div className="absolute left-0 top-52 text-xs sm:text-sm transform -rotate-90 origin-top-left text-white z-0 w-20 font-mono">
        <h1 className="whitespace-nowrap text-xs mt-2">software developer</h1>
      </div>
      <div className="absolute left-0 top-64 ml-2">
        <ReactSVG src={barcode} />
      </div>
      <div className="absolute left-32 top-52">
        <h1 className="text-[#DBDBDB] font-mono text-3xl">
          I’m Cesar Marines <br /> Software/web Developer
        </h1>
      </div>
      <div className="fixed bottom-0 right-0 z-10 text-white font-mono text-xs">
        <h2 className="whitespace-nowrap p-3">#171717 // #F5F6F7</h2>
      </div>
    </div>
  );
}

export default home;
