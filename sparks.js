// Анимация искр
const canvas=document.getElementById('sparks'),ctx=canvas.getContext('2d');
let w,h;function resize(){w=canvas.width=innerWidth;h=canvas.height=innerHeight;}
resize();addEventListener('resize',resize);
let sparks=[];
function spawn(){for(let i=0;i<3;i++){sparks.push({x:Math.random()*w,y:Math.random()*h,vx:(Math.random()-.5)*2,vy:Math.random()*-2-1,life:100+Math.random()*50});}}
function update(){ctx.clearRect(0,0,w,h);ctx.fillStyle='rgba(230,57,70,0.8)';sparks.forEach(s=>{s.x+=s.vx;s.y+=s.vy;s.vy+=0.05;s.life-=2;ctx.globalAlpha=Math.max(s.life/150,0);ctx.beginPath();ctx.arc(s.x,s.y,2,0,Math.PI*2);ctx.fill();});sparks=sparks.filter(s=>s.life>0);if(Math.random()<0.3)spawn();requestAnimationFrame(update);}update();