import{r as d,j as F}from"./index-Ca3CAcmx.js";import{G as E,R as B,P as L,M as N}from"./Mesh-uU8OXhrh.js";const g={black:"#000000",white:"#ffffff",red:"#ff0000",green:"#00ff00",blue:"#0000ff",fuchsia:"#ff00ff",cyan:"#00ffff",yellow:"#ffff00",orange:"#ff8000"};function h(e){e.length===4&&(e=e[0]+e[1]+e[1]+e[2]+e[2]+e[3]+e[3]);const o=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return o||console.warn(`Unable to convert hex string ${e} to rgb values`),[parseInt(o[1],16)/255,parseInt(o[2],16)/255,parseInt(o[3],16)/255]}function P(e){return e=parseInt(e),[(e>>16&255)/255,(e>>8&255)/255,(e&255)/255]}function y(e){return e===void 0?[0,0,0]:arguments.length===3?arguments:isNaN(e)?e[0]==="#"?h(e):g[e.toLowerCase()]?h(g[e.toLowerCase()]):(console.warn("Color format not recognised"),[0,0,0]):P(e)}class w extends Array{constructor(o){return Array.isArray(o)?super(...o):super(...y(...arguments))}get r(){return this[0]}get g(){return this[1]}get b(){return this[2]}set r(o){this[0]=o}set g(o){this[1]=o}set b(o){this[2]=o}set(o){return Array.isArray(o)?this.copy(o):this.copy(y(...arguments))}copy(o){return this[0]=o[0],this[1]=o[1],this[2]=o[2],this}}class T extends E{constructor(o,{attributes:a={}}={}){Object.assign(a,{position:{size:2,data:new Float32Array([-1,-1,3,-1,-1,3])},uv:{size:2,data:new Float32Array([0,0,2,0,0,2])}}),super(o,a)}}const _=`#version 300 es
in vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`,I=`#version 300 es
precision highp float;

uniform float uTime;
uniform float uAmplitude;
uniform vec3 uColorStops[3];
uniform vec2 uResolution;
uniform float uBlend;

out vec4 fragColor;

vec3 permute(vec3 x) {
  return mod(((x * 34.0) + 1.0) * x, 289.0);
}

float snoise(vec2 v){
  const vec4 C = vec4(
      0.211324865405187, 0.366025403784439,
      -0.577350269189626, 0.024390243902439
  );
  vec2 i  = floor(v + dot(v, C.yy));
  vec2 x0 = v - i + dot(i, C.xx);
  vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod(i, 289.0);

  vec3 p = permute(
      permute(i.y + vec3(0.0, i1.y, 1.0))
    + i.x + vec3(0.0, i1.x, 1.0)
  );

  vec3 m = max(
      0.5 - vec3(
          dot(x0, x0),
          dot(x12.xy, x12.xy),
          dot(x12.zw, x12.zw)
      ),
      0.0
  );
  m = m * m;
  m = m * m;

  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);

  vec3 g;
  g.x  = a0.x  * x0.x  + h.x  * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

struct ColorStop {
  vec3 color;
  float position;
};

#define COLOR_RAMP(colors, factor, finalColor) {                int index = 0;                                              for (int i = 0; i < 2; i++) {                                    ColorStop currentColor = colors[i];                         bool isInBetween = currentColor.position <= factor;         index = int(mix(float(index), float(i), float(isInBetween)));   }                                                           ColorStop currentColor = colors[index];                     ColorStop nextColor = colors[index + 1];                    float range = nextColor.position - currentColor.position;   float lerpFactor = (factor - currentColor.position) / range;   finalColor = mix(currentColor.color, nextColor.color, lerpFactor); }

void main() {
  vec2 uv = gl_FragCoord.xy / uResolution;

  ColorStop colors[3];
  colors[0] = ColorStop(uColorStops[0], 0.0);
  colors[1] = ColorStop(uColorStops[1], 0.5);
  colors[2] = ColorStop(uColorStops[2], 1.0);

  vec3 rampColor;
  COLOR_RAMP(colors, uv.x, rampColor);

  float height = snoise(vec2(uv.x * 2.0 + uTime * 0.1, uTime * 0.25)) * 0.5 * uAmplitude;
  height = exp(height);
  height = (uv.y * 2.0 - height + 0.2);
  float intensity = 0.6 * height;

  float midPoint = 0.20;
  float auroraAlpha = smoothstep(midPoint - uBlend * 0.5, midPoint + uBlend * 0.5, intensity);

  vec3 auroraColor = intensity * rampColor;

  fragColor = vec4(auroraColor * auroraAlpha, auroraAlpha);
}
`;function M(e){const{colorStops:o=["#5227FF","#7cff67","#5227FF"],amplitude:a=1,blend:v=.5}=e,u=d.useRef(e);u.current=e;const x=d.useRef(null);return d.useEffect(()=>{const t=x.current;if(!t)return;const l=new B({alpha:!0,premultipliedAlpha:!0,antialias:!0}),r=l.gl;r.clearColor(0,0,0,0),r.enable(r.BLEND),r.blendFunc(r.ONE,r.ONE_MINUS_SRC_ALPHA),r.canvas.style.backgroundColor="transparent";let n;function c(){if(!t)return;const s=t.offsetWidth,i=t.offsetHeight;l.setSize(s,i),n&&(n.uniforms.uResolution.value=[s,i])}window.addEventListener("resize",c);const f=new T(r);f.attributes.uv&&delete f.attributes.uv;const A=o.map(s=>{const i=new w(s);return[i.r,i.g,i.b]});n=new L(r,{vertex:_,fragment:I,uniforms:{uTime:{value:0},uAmplitude:{value:a},uColorStops:{value:A},uResolution:{value:[t.offsetWidth,t.offsetHeight]},uBlend:{value:v}}});const S=new N(r,{geometry:f,program:n});t.appendChild(r.canvas);let m=0;const C=s=>{m=requestAnimationFrame(C);const{time:i=s*.01,speed:b=1}=u.current;n.uniforms.uTime.value=i*b*.1,n.uniforms.uAmplitude.value=u.current.amplitude??1,n.uniforms.uBlend.value=u.current.blend??v;const R=u.current.colorStops??o;n.uniforms.uColorStops.value=R.map(z=>{const p=new w(z);return[p.r,p.g,p.b]}),l.render({scene:S})};return m=requestAnimationFrame(C),c(),()=>{cancelAnimationFrame(m),window.removeEventListener("resize",c),t&&r.canvas.parentNode===t&&t.removeChild(r.canvas),r.getExtension("WEBGL_lose_context")?.loseContext()}},[a]),F.jsx("div",{ref:x,className:"aurora-container"})}export{M as default};
