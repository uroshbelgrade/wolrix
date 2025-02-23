import * as THREE from 'three';

export interface ThreePoints extends THREE.Points {
  geometry: THREE.BufferGeometry;
  material: THREE.PointsMaterial;
}

export interface CanvasElement extends HTMLCanvasElement {
  getContext(contextId: '2d'): CanvasRenderingContext2D;
} 