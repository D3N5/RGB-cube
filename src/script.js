import * as THREE from 'three'
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js'
import * as dat from 'lil-gui'
//import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js'

/**
 * Base
 */
// Debug
const gui = new dat.GUI()

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Helpers
 */
const axesHelper = new THREE.AxesHelper(5)
scene.add(axesHelper)

/**
 * Objects
 */
// Box
function box(width, height, depth) {
  ;(width = width * 0.5), (height = height * 0.5), (depth = depth * 0.5)

  const geometry = new THREE.BufferGeometry()
  const position = []

  position.push(
    -width,
    -height,
    -depth,
    -width,
    height,
    -depth,

    -width,
    height,
    -depth,
    width,
    height,
    -depth,

    width,
    height,
    -depth,
    width,
    -height,
    -depth,

    width,
    -height,
    -depth,
    -width,
    -height,
    -depth,

    -width,
    -height,
    depth,
    -width,
    height,
    depth,

    -width,
    height,
    depth,
    width,
    height,
    depth,

    width,
    height,
    depth,
    width,
    -height,
    depth,

    width,
    -height,
    depth,
    -width,
    -height,
    depth,

    -width,
    -height,
    -depth,
    -width,
    -height,
    depth,

    -width,
    height,
    -depth,
    -width,
    height,
    depth,

    width,
    height,
    -depth,
    width,
    height,
    depth,

    width,
    -height,
    -depth,
    width,
    -height,
    depth,
  )

  geometry.setAttribute(
    'position',
    new THREE.Float32BufferAttribute(position, 3),
  )

  return geometry
}

const geometryBox = box(10, 10, 10)

function colorSphere(color, radius) {
  const geometry = new THREE.SphereGeometry(radius || 0.2, 16, 8)
  const material = new THREE.MeshBasicMaterial({color})
  return new THREE.Mesh(geometry, material)
}

const whiteSphere = colorSphere(0xffffff)
whiteSphere.position.set(10, 10, 10)
scene.add(whiteSphere)

const blackSphere = colorSphere(0x000000)
blackSphere.position.set(0, 0, 0)
scene.add(blackSphere)

const redSphere = colorSphere(0xff0000)
redSphere.position.set(10, 0, 0)
scene.add(redSphere)

const greenSphere = colorSphere(0x00ff00)
greenSphere.position.set(0, 10, 0)
scene.add(greenSphere)

const blueSphere = colorSphere(0x0000ff)
blueSphere.position.set(0, 0, 10)
scene.add(blueSphere)

const cyanSphere = colorSphere(0x00ffff)
cyanSphere.position.set(0, 10, 10)
scene.add(cyanSphere)

const yellowSphere = colorSphere(0xffff00)
yellowSphere.position.set(10, 10, 0)
scene.add(yellowSphere)

const magentaSphere = colorSphere(0xff00ff)
magentaSphere.position.set(10, 0, 10)
scene.add(magentaSphere)

const lineSegments = new THREE.LineSegments(
  geometryBox,
  new THREE.LineDashedMaterial({color: 0xffaa00, dashSize: 0.3, gapSize: 0.15}),
)
lineSegments.computeLineDistances()
lineSegments.position.set(5, 5, 5)
scene.add(lineSegments)

// Vector
const material = new THREE.LineBasicMaterial({color: 0x0000ff})
const points = []
points.push(new THREE.Vector3(0, 0, 0))
points.push(new THREE.Vector3(9, 8, 4))

const geometry = new THREE.BufferGeometry().setFromPoints(points)
const line = new THREE.Line(geometry, material)
scene.add(line)

// const object1 = new THREE.Mesh(
//   new THREE.SphereGeometry(0.5, 16, 16),
//   new THREE.MeshBasicMaterial({color: '#ff0000'}),
// )
// object1.position.x = -2

// const object2 = new THREE.Mesh(
//   new THREE.SphereGeometry(0.5, 16, 16),
//   new THREE.MeshBasicMaterial({color: '#ff0000'}),
// )

// const object3 = new THREE.Mesh(
//   new THREE.SphereGeometry(0.5, 16, 16),
//   new THREE.MeshBasicMaterial({color: '#ff0000'}),
// )
// object3.position.x = 2

// object1.updateMatrixWorld()
// object2.updateMatrixWorld()
// object3.updateMatrixWorld()

//scene.add(object1, object2, object3)

/**
 * Raycaster
 */
//const raycaster = new THREE.Raycaster()
// const rayOrigin = new THREE.Vector3(-3, 0, 0)
// const rayDirection = new THREE.Vector3(10, 0, 0)
// rayDirection.normalize()

// raycaster.set(rayOrigin, rayDirection)

// const intersect = raycaster.intersectObject(object2)
// console.log(intersect)

// const intersects = raycaster.intersectObjects([object1, object2, object3])
// console.log(intersects)
/**
 * Sizes
 */
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
}

window.addEventListener('resize', () => {
  // Update sizes
  sizes.width = window.innerWidth
  sizes.height = window.innerHeight

  // Update camera
  camera.aspect = sizes.width / sizes.height
  camera.updateProjectionMatrix()

  // Update renderer
  renderer.setSize(sizes.width, sizes.height)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Mouse
 */
// const mouse = new THREE.Vector2()

// window.addEventListener('mousemove', (event) => {
//   mouse.x = (event.clientX / sizes.width) * 2 - 1
//   mouse.y = -((event.clientY / sizes.height) * 2 - 1)
// })

// window.addEventListener('click', () => {
//   if (currentIntersect) {
//     if (currentIntersect.object === object1) {
//       console.log('click on object 1')
//     }
//     if (currentIntersect.object === object2) {
//       console.log('click on object 2')
//     }
//     if (currentIntersect.object === object3) {
//       console.log('click on object 3')
//     }
//   }
// })

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  0.1,
  50,
)

camera.position.set(8, 13, 20)
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

/**
 * Model
 */
// const gltfLoader = new GLTFLoader()
// let model = null
// gltfLoader.load('./models/Duck/glTF-Binary/Duck.glb', (gltf) => {
//   model = gltf.scene
//   gltf.scene.position.y = -1.2
//   scene.add(model)
// })

/**
 * Lights
 */
// Ambient light
const ambientLight = new THREE.AmbientLight('#ffffff', 0.3)
scene.add(ambientLight)

// Directional light
const directionalLight = new THREE.DirectionalLight('#ffffff', 0.7)
directionalLight.position.set(1, 2, 3)
scene.add(directionalLight)

/**
 * Animate
 */
const clock = new THREE.Clock()

let currentIntersect = null

const tick = () => {
  const elapsedTime = clock.getElapsedTime()

  // Animate objects
  // object1.position.y = Math.sin(elapsedTime * 0.3) * 1.5
  // object2.position.y = Math.sin(elapsedTime * 0.8) * 1.5
  // object3.position.y = Math.sin(elapsedTime * 1.4) * 1.5

  // Cast a ray
  //   const rayOrigin = new THREE.Vector3(-3, 0, 0)
  //   const rayDirection = new THREE.Vector3(10, 0, 0)
  //   rayDirection.normalize()

  //   raycaster.set(rayOrigin, rayDirection)

  //   const objectsToTest = [object1, object2, object3]
  //   const intersects = raycaster.intersectObjects(objectsToTest)

  //   for (const object of objectsToTest) {
  //     object.material.color.set('#ff0000')
  //   }

  //   for (const intersect of intersects) {
  //     intersect.object.material.color.set('#0000ff')
  //   }

  // Cast a ray 2
  // raycaster.setFromCamera(mouse, camera)
  // const objectsToTest = [object1, object2, object3]
  // const intersects = raycaster.intersectObjects(objectsToTest)

  // for (const object of objectsToTest) {
  //   object.material.color.set('#ff0000')
  // }

  // for (const intersect of intersects) {
  //   intersect.object.material.color.set('#0000ff')
  // }

  // if (intersects.length) {
  //   if (currentIntersect === null) {
  //     console.log('mouse enter')
  //   }
  //   currentIntersect = intersects[0]
  // } else {
  //   if (currentIntersect) {
  //     console.log('mouse leave')
  //   }
  //   currentIntersect = null
  // }

  // // Test intersect with model
  // if (model) {
  //   const modelIntersect = raycaster.intersectObject(model)
  //   if (modelIntersect.length) {
  //     model.scale.set(1.2, 1.2, 1.2)
  //   } else {
  //     model.scale.set(1, 1, 1)
  //   }
  // }

  // Update controls
  controls.update()

  // Render
  renderer.render(scene, camera)

  // Call tick again on the next frame
  window.requestAnimationFrame(tick)
}

tick()
