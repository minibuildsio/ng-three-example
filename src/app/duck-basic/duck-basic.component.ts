import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-duck',
  templateUrl: './duck-basic.component.html',
  styleUrls: ['./duck-basic.component.css']
})
export class DuckBasicComponent implements AfterViewInit {
  
  @ViewChild('canvas') private canvas!: ElementRef;

  private cube!: THREE.Mesh;
  private scene!: THREE.Scene;
  private renderer!: THREE.WebGLRenderer;
  private camera!: THREE.Camera;

  ngAfterViewInit(): void {
    this.initScene();
    this.initCube();
    this.render();
  }

  initScene(): void {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0xBED3D4);

    let canvasElement = this.canvas.nativeElement;
    let aspectRatio = canvasElement.clientWidth / canvasElement.clientHeight;

    this.camera = new THREE.PerspectiveCamera(50, aspectRatio, 0.1, 1000);
    this.camera.position.z = 8;

    this.renderer = new THREE.WebGLRenderer({ canvas: canvasElement });
    this.renderer.setPixelRatio(devicePixelRatio);
    this.renderer.setSize(canvasElement.clientWidth, canvasElement.clientHeight);
  }

  initCube(): void {
    let loader = new THREE.TextureLoader();  
    
    let material = new THREE.MeshBasicMaterial({
      map: loader.load('/assets/minibuilds-icon.png')
    });
    this.cube = new THREE.Mesh(new THREE.BoxGeometry(2, 2, 2), material);
    this.cube.rotation.x = Math.PI / 4;
    this.scene.add(this.cube);
  }

  render(): void {    
    this.renderer.render(this.scene, this.camera);

    this.cube.rotation.y += 0.01;

    requestAnimationFrame(this.render.bind(this));
  }
}
