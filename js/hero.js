/* PRISTYNE - hero */
(function(){
var prog=document.getElementById('prog'),hero=document.getElementById('hero'),bd=document.getElementById('prb'),ha=document.getElementById('prh'),bt=document.getElementById('prc'),bu=document.getElementById('bu');
var rm=matchMedia('(prefers-reduced-motion:reduce)').matches,run=true,px=0,py=0,last=-1e9,gx=0,gy=0,said=-1,T,prev=performance.now();
var G=['BUILT FOR THE NEXT GENERATION','Discover','Express','Perform','Lead'];
function sc(){prog.style.transform='scaleX('+scrollY/Math.max(1,document.documentElement.scrollHeight-innerHeight)+')'}
addEventListener('scroll',sc,{passive:true});sc();
addEventListener('pointermove',function(e){px=e.clientX;py=e.clientY;last=performance.now()},{passive:true});
document.documentElement.addEventListener('pointerleave',function(){last=-1e9});
bt.addEventListener('click',function(){said=(said+1)%G.length;bu.textContent=G[said];bu.dataset.on='true';clearTimeout(T);T=setTimeout(function(){bu.dataset.on='false'},2200)});
new IntersectionObserver(function(e){run=e[0].isIntersecting;prev=performance.now()}).observe(hero);
function f(now){requestAnimationFrame(f);if(!run||rm)return;
var dt=Math.min(.05,(now-prev)/1000);prev=now;var r=bt.getBoundingClientRect(),cx=r.left+r.width/2,cy=r.top+r.height*.2,tx=0,ty=0;
if(now-last<3500){var m=Math.max(innerWidth,innerHeight),a=(px-cx)/(m*.3),b=(py-cy)/(m*.26);tx=a/Math.sqrt(1+a*a);ty=b/Math.sqrt(1+b*b)}
else{var t=now/1000;tx=Math.sin(t*.45)*.55+Math.sin(t*1.1)*.1;ty=Math.sin(t*.31+1)*.25}
var k=1-Math.exp(-7*dt);gx+=(tx-gx)*k;gy+=(ty-gy)*k;
bd.style.transform='translate3d('+(gx*12).toFixed(1)+'px,'+(Math.abs(Math.sin(now/620))*3).toFixed(1)+'px,0) rotate('+(gx*1.8).toFixed(2)+'deg) scale('+(1+Math.max(0,-gy)*.015).toFixed(3)+')';
ha.style.transform='translate('+(-gx*28).toFixed(1)+'px,'+(-gy*14).toFixed(1)+'px)'}
requestAnimationFrame(f)})();
