const Scene = window.LoveWorld.World;
const VISUAL_CONFIG = window.LoveWorld.CONFIG;
const OPTIONAL_TITLE = '';
const canvas = document.querySelector('#world');
const portrait = document.querySelector('.portrait');
const title = document.querySelector('.title');
title.textContent = OPTIONAL_TITLE;
document.title = OPTIONAL_TITLE;
let world;
let initialized = false;
function initialize() {
  if (initialized) return;
  initialized = true;
  world = new Scene(canvas, portrait);
  addEventListener('scroll', () => {
    const range = document.documentElement.scrollHeight - innerHeight;
    world.progress = range > 0 ? Math.max(0, Math.min(1, scrollY / range)) : 0;
  }, { passive: true });
  const point = (e) => { const p=e.touches?.[0] || e; world.setPointer(p.clientX,p.clientY); };
  addEventListener('pointermove', (e) => {
    point(e);
    if (e.buttons && Math.random() < .22) world.trails.push({x:e.clientX,y:e.clientY,color:VISUAL_CONFIG.colors[Math.floor(Math.random()*VISUAL_CONFIG.colors.length)],life:1});
    if(world.trails.length>VISUAL_CONFIG.trailLimit)world.trails.shift();
  }, { passive:true });
  addEventListener('pointerdown', e => { world.setPointer(e.clientX,e.clientY); world.burst(e.clientX,e.clientY); }, { passive:true });
  addEventListener('deviceorientation', e => { if(e.gamma==null)return; world.setPointer(innerWidth/2+e.gamma*5,innerHeight/2+(e.beta||0)*3); }, { passive:true });
  const frame = t => { world.draw(t); requestAnimationFrame(frame); };
  requestAnimationFrame(frame);
}
if ('requestIdleCallback' in window) requestIdleCallback(initialize, { timeout: 900 });
else setTimeout(initialize, 120);
