import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/GLTFLoader.js';
import { OrbitControls } from 'three/addons/OrbitControls.js';
import { companyName } from './config.js';
import gsap from "gsap";

console.log(`Company name: ${companyName}`);

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM fully loaded and parsed');

  // Hero Section Animation
  const heroTitle = document.querySelector('#hero h2');
  const heroParagraph = document.querySelector('#hero p');
  const heroButton = document.querySelector('#hero .cta-button');

  gsap.fromTo(heroTitle, { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 1 });
  gsap.fromTo(heroParagraph, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, delay: 0.5 });
  gsap.fromTo(heroButton, { opacity: 0, scale: 0 }, { opacity: 1, scale: 1, duration: 0.8, delay: 1, ease: "back.out(1.7)" });

  // Services Grid Animation
  const servicesGridItems = document.querySelectorAll('.services-grid div');

  servicesGridItems.forEach((item, index) => {
    gsap.fromTo(item, { opacity: 0, y: 50 }, {
      opacity: 1, y: 0, duration: 1, delay: index * 0.2,
      ease: "power2.out"
    });
  });

  // Depoimentos Slider Animation (Basic - needs more sophisticated implementation)
  const depoimentosSlider = document.querySelector('.depoimentos-slider');
  if (depoimentosSlider) {
    gsap.to(depoimentosSlider, {
      xPercent: -50, // Adjust for continuous loop
      duration: 20,
      repeat: -1,
      ease: "linear"
    });
  }
});

// Three.js scene setup (Example)
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth / 2, window.innerHeight / 2); // Reduced size for example
// document.body.appendChild(renderer.domElement); // Append to body or another element as needed

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
}

// animate(); // Commented out to prevent running unless properly integrated