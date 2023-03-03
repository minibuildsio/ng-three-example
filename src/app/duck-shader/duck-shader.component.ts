import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-duck-shader',
  templateUrl: './duck-shader.component.html',
  styleUrls: ['./duck-shader.component.css']
})
export class DuckShaderComponent implements AfterViewInit {
  
  @ViewChild('canvas') private canvas!: ElementRef;

  private cube!: THREE.Mesh;
  private scene!: THREE.Scene;
  private renderer!: THREE.WebGLRenderer;
  private camera!: THREE.Camera;
  private material!: THREE.ShaderMaterial;

  private vertexShader: string = `
    varying vec2 v_uv;
    varying vec3 v_position;

    void main() {
      v_uv = uv;
      v_position = position;

      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `;

  private fragmentShader = `
    uniform sampler2D u_texture;
    uniform float u_time;
    varying vec2 v_uv;
    varying vec3 v_position;

    void main() {
      if (cos(10.0 * (v_position.y + v_position.x + v_position.z) + 5.0 * u_time) < 0.0) {
        discard;
      }

      gl_FragColor = texture2D(u_texture, v_uv);
    }
  `;

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

    var uniforms = {
      u_texture: { value: loader.load('/assets/minibuilds-icon.png') },
      u_time: { value: 0 }
    };
    
    this.material = new THREE.ShaderMaterial({ uniforms, vertexShader: this.vertexShader, fragmentShader: this.fragmentShader });
    this.cube = new THREE.Mesh(new THREE.BoxGeometry(2, 2, 2), this.material);
    this.cube.rotation.x = Math.PI / 4;
    this.scene.add(this.cube);
  }

  render(): void {    
    this.renderer.render(this.scene, this.camera);
    
    this.material.uniforms['u_time'].value = Date.now() / 1000 % (2 * Math.PI);

    this.cube.rotation.y += 0.01;

    requestAnimationFrame(this.render.bind(this));
  }
}
