import { Color, ShaderMaterial } from "three";

export const gradientShaderMaterial = new ShaderMaterial({
  uniforms: {
    color1: { value: new Color("purple") },
    color2: { value: new Color("black") },
  },
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform vec3 color1;
    uniform vec3 color2;
    varying vec2 vUv;
    void main() {
      gl_FragColor = vec4(mix(color1, color2, vUv.y), 1.0);
    }
  `,
});
