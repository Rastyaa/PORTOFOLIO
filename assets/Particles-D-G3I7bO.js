import{r as C,j as N}from"./index-Ca3CAcmx.js";import{T as X,a as y,V as l,R as Y,G as $,P as J,M as K}from"./Mesh-uU8OXhrh.js";const Q=new y,U=new l,Z=new l;class D extends X{constructor(t,{near:e=.1,far:s=100,fov:i=45,aspect:r=1,left:m,right:a,bottom:v,top:x,zoom:M=1}={}){super(),Object.assign(this,{near:e,far:s,fov:i,aspect:r,left:m,right:a,bottom:v,top:x,zoom:M}),this.projectionMatrix=new y,this.viewMatrix=new y,this.projectionViewMatrix=new y,this.worldPosition=new l,this.type=m||a?"orthographic":"perspective",this.type==="orthographic"?this.orthographic():this.perspective()}perspective({near:t=this.near,far:e=this.far,fov:s=this.fov,aspect:i=this.aspect}={}){return Object.assign(this,{near:t,far:e,fov:s,aspect:i}),this.projectionMatrix.fromPerspective({fov:s*(Math.PI/180),aspect:i,near:t,far:e}),this.type="perspective",this}orthographic({near:t=this.near,far:e=this.far,left:s=this.left||-1,right:i=this.right||1,bottom:r=this.bottom||-1,top:m=this.top||1,zoom:a=this.zoom}={}){return Object.assign(this,{near:t,far:e,left:s,right:i,bottom:r,top:m,zoom:a}),s/=a,i/=a,r/=a,m/=a,this.projectionMatrix.fromOrthogonal({left:s,right:i,bottom:r,top:m,near:t,far:e}),this.type="orthographic",this}updateMatrixWorld(){return super.updateMatrixWorld(),this.viewMatrix.inverse(this.worldMatrix),this.worldMatrix.getTranslation(this.worldPosition),this.projectionViewMatrix.multiply(this.projectionMatrix,this.viewMatrix),this}updateProjectionMatrix(){return this.type==="perspective"?this.perspective():this.orthographic()}lookAt(t){return super.lookAt(t,!0),this}project(t){return t.applyMatrix4(this.viewMatrix),t.applyMatrix4(this.projectionMatrix),this}unproject(t){return t.applyMatrix4(Q.inverse(this.projectionMatrix)),t.applyMatrix4(this.worldMatrix),this}updateFrustum(){this.frustum||(this.frustum=[new l,new l,new l,new l,new l,new l]);const t=this.projectionViewMatrix;this.frustum[0].set(t[3]-t[0],t[7]-t[4],t[11]-t[8]).constant=t[15]-t[12],this.frustum[1].set(t[3]+t[0],t[7]+t[4],t[11]+t[8]).constant=t[15]+t[12],this.frustum[2].set(t[3]+t[1],t[7]+t[5],t[11]+t[9]).constant=t[15]+t[13],this.frustum[3].set(t[3]-t[1],t[7]-t[5],t[11]-t[9]).constant=t[15]-t[13],this.frustum[4].set(t[3]-t[2],t[7]-t[6],t[11]-t[10]).constant=t[15]-t[14],this.frustum[5].set(t[3]+t[2],t[7]+t[6],t[11]+t[10]).constant=t[15]+t[14];for(let e=0;e<6;e++){const s=1/this.frustum[e].distance();this.frustum[e].multiply(s),this.frustum[e].constant*=s}}frustumIntersectsMesh(t,e=t.worldMatrix){if(!t.geometry.attributes.position||((!t.geometry.bounds||t.geometry.bounds.radius===1/0)&&t.geometry.computeBoundingSphere(),!t.geometry.bounds))return!0;const s=U;s.copy(t.geometry.bounds.center),s.applyMatrix4(e);const i=t.geometry.bounds.radius*e.getMaxScaleOnAxis();return this.frustumIntersectsSphere(s,i)}frustumIntersectsSphere(t,e){const s=Z;for(let i=0;i<6;i++){const r=this.frustum[i];if(s.copy(r).dot(t)+r.constant<-e)return!1}return!0}}const H=["#ffffff","#ffffff","#ffffff"],tt=u=>{u=u.replace(/^#/,""),u.length===3&&(u=u.split("").map(r=>r+r).join(""));const t=parseInt(u,16),e=(t>>16&255)/255,s=(t>>8&255)/255,i=(t&255)/255;return[e,s,i]},et=`
  attribute vec3 position;
  attribute vec4 random;
  attribute vec3 color;

  uniform mat4 modelMatrix;
  uniform mat4 viewMatrix;
  uniform mat4 projectionMatrix;
  uniform float uTime;
  uniform float uSpread;
  uniform float uBaseSize;
  uniform float uSizeRandomness;

  varying vec4 vRandom;
  varying vec3 vColor;

  void main() {
    vRandom = random;
    vColor = color;

    vec3 pos = position * uSpread;
    pos.z *= 10.0;

    vec4 mPos = modelMatrix * vec4(pos, 1.0);
    float t = uTime;
    mPos.x += sin(t * random.z + 6.28 * random.w) * mix(0.1, 1.5, random.x);
    mPos.y += sin(t * random.y + 6.28 * random.x) * mix(0.1, 1.5, random.w);
    mPos.z += sin(t * random.w + 6.28 * random.y) * mix(0.1, 1.5, random.z);

    vec4 mvPos = viewMatrix * mPos;

    if (uSizeRandomness == 0.0) {
      gl_PointSize = uBaseSize;
    } else {
      gl_PointSize = (uBaseSize * (1.0 + uSizeRandomness * (random.x - 0.5))) / length(mvPos.xyz);
    }

    gl_Position = projectionMatrix * mvPos;
  }
`,st=`
  precision highp float;

  uniform float uTime;
  uniform float uAlphaParticles;
  varying vec4 vRandom;
  varying vec3 vColor;

  void main() {
    vec2 uv = gl_PointCoord.xy;
    float d = length(uv - vec2(0.5));

    if(uAlphaParticles < 0.5) {
      if(d > 0.5) {
        discard;
      }
      gl_FragColor = vec4(vColor + 0.2 * sin(uv.yxx + uTime + vRandom.y * 6.28), 1.0);
    } else {
      float circle = smoothstep(0.5, 0.4, d) * 0.8;
      gl_FragColor = vec4(vColor + 0.2 * sin(uv.yxx + uTime + vRandom.y * 6.28), circle);
    }
  }
`,ot=({particleCount:u=200,particleSpread:t=10,speed:e=.1,particleColors:s,moveParticlesOnHover:i=!1,particleHoverFactor:r=1,alphaParticles:m=!1,particleBaseSize:a=100,sizeRandomness:v=1,cameraDistance:x=20,disableRotation:M=!1,pixelRatio:j=1,className:k=""})=>{const F=C.useRef(null),P=C.useRef({x:0,y:0});return C.useEffect(()=>{const h=F.current;if(!h)return;const z=new Y({dpr:j,depth:!1,alpha:!0}),c=z.gl;h.appendChild(c.canvas),c.clearColor(0,0,0,0);const S=new D(c,{fov:15});S.position.set(0,0,x);const b=()=>{const o=h.clientWidth,n=h.clientHeight;z.setSize(o,n),S.perspective({aspect:c.canvas.width/c.canvas.height})};window.addEventListener("resize",b,!1),b();const I=o=>{const n=h.getBoundingClientRect(),f=(o.clientX-n.left)/n.width*2-1,d=-((o.clientY-n.top)/n.height*2-1);P.current={x:f,y:d}};i&&h.addEventListener("mousemove",I);const g=u,E=new Float32Array(g*3),V=new Float32Array(g*4),_=new Float32Array(g*3),B=s&&s.length>0?s:H;for(let o=0;o<g;o++){let n,f,d,T;do n=Math.random()*2-1,f=Math.random()*2-1,d=Math.random()*2-1,T=n*n+f*f+d*d;while(T>1||T===0);const A=Math.cbrt(Math.random());E.set([n*A,f*A,d*A],o*3),V.set([Math.random(),Math.random(),Math.random(),Math.random()],o*4);const G=tt(B[Math.floor(Math.random()*B.length)]);_.set(G,o*3)}const q=new $(c,{position:{size:3,data:E},random:{size:4,data:V},color:{size:3,data:_}}),L=new J(c,{vertex:et,fragment:st,uniforms:{uTime:{value:0},uSpread:{value:t},uBaseSize:{value:a*j},uSizeRandomness:{value:v},uAlphaParticles:{value:m?1:0}},transparent:!0,depthTest:!1}),p=new K(c,{mode:c.POINTS,geometry:q,program:L});let R,O=performance.now(),w=0;const W=o=>{R=requestAnimationFrame(W);const n=o-O;O=o,w+=n*e,L.uniforms.uTime.value=w*.001,i?(p.position.x=-P.current.x*r,p.position.y=-P.current.y*r):(p.position.x=0,p.position.y=0),M||(p.rotation.x=Math.sin(w*2e-4)*.1,p.rotation.y=Math.cos(w*5e-4)*.15,p.rotation.z+=.01*e),z.render({scene:p,camera:S})};return R=requestAnimationFrame(W),()=>{window.removeEventListener("resize",b),i&&h.removeEventListener("mousemove",I),cancelAnimationFrame(R),h.contains(c.canvas)&&h.removeChild(c.canvas)}},[u,t,e,i,r,m,a,v,x,M,j]),N.jsx("div",{ref:F,className:`particles-container ${k}`})};export{ot as default};
