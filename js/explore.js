/* PRISTYNE - explore */
(function(){
var D=[["VISION", "To build a platform where every young person gets an opportunity to learn, express, perform, lead and grow.", "#about"], ["MISSION", "To create meaningful experiences that develop confidence, creativity, communication and leadership while connecting young people with institutions, brands and communities.", "#about"], ["DISCOVER", "DISCOVER → DEVELOP → EXPERIENCE → CONNECT → LEAD", "#about"], ["DEVELOP", "DISCOVER → DEVELOP → EXPERIENCE → CONNECT → LEAD", "#about"], ["EXPERIENCE", "DISCOVER → DEVELOP → EXPERIENCE → CONNECT → LEAD", "#about"], ["CONNECT", "DISCOVER → DEVELOP → EXPERIENCE → CONNECT → LEAD", "#about"], ["LEAD", "DISCOVER → DEVELOP → EXPERIENCE → CONNECT → LEAD", "#about"], ["YOUTH DEVELOPMENT", "Future Leaders Workshops • Personality Development • Communication • Stage Presence", "#services"], ["YOUTH PLATFORMS", "Pageants • Competitions • Talent Showcases", "#services"], ["EXPERIENTIAL EVENTS", "Campus Events • Festivals • Fashion • Entertainment", "#services"], ["ORIGINAL IPs", "PRISTYNE-owned competitions , pageants , formats and experiences", "#services"], ["BRAND EXPERIENCES", "Sponsorships • Activations • Collaboration .", "#services"], ["01 — Discover", "Understanding strengths and individuality.", "#workshop"], ["02 — Express", "Communication and public speaking exercises.", "#workshop"], ["03 — Perform", "Stage presence and presentation challenges.", "#workshop"], ["04 — Lead", "Teamwork and leadership activities.", "#workshop"], ["Brands & Sponsors", "Connect with new audiences through meaningful event partnerships and brand activations.", "#collaborate"], ["Schools & Colleges", "Bring innovative competitions, platforms, and experiences to your campus or institution.", "#collaborate"], ["Talent & Creators", "Join our growing network of performers, models, creators, hosts, photographers, designers, and other creative professionals.", "#collaborate"], ["Event & Industry Partners", "Collaborate with us across production, venues, hospitality, media, fashion, entertainment, and other event requirements.", "#collaborate"]],ex=document.getElementById('ex'),it=document.getElementById('exi'),ar=document.getElementById('exa'),N=D.length,MX=3000;
var rm=matchMedia('(prefers-reduced-motion:reduce)').matches,run=false,started=false,phase=rm?'circle':'scatter',sc=0,m=0,rot=0,mx=0,tmx=0,io=1,prev=performance.now(),cards=[];
D.forEach(function(d){var e=document.createElement('div');e.className='cd';
e.innerHTML='<div class="in"><div class="fr"><b></b></div><div class="bk"><em></em><span></span><a>View →</a></div></div>';
e.querySelector('b').textContent=d[0];e.querySelector('em').textContent=d[0];e.querySelector('span').textContent=d[1];e.querySelector('a').href=d[2];
e.addEventListener('click',function(ev){if(ev.target.tagName!=='A')e.classList.toggle('f')});
ex.appendChild(e);cards.push({e:e,x:(Math.random()-.5)*1500,y:(Math.random()-.5)*1000,r:(Math.random()-.5)*180,s:.6,o:0,sx:0,sy:0,sr:0})});
function add(d){sc=Math.min(Math.max(sc+d,0),MX)}
function edge(d){return (sc>=MX&&d>0)||(sc<=0&&d<0)}
ex.addEventListener('wheel',function(e){if(edge(e.deltaY))return;e.preventDefault();add(e.deltaY)},{passive:false});
var ty=0;ex.addEventListener('touchstart',function(e){ty=e.touches[0].clientY},{passive:true});
ex.addEventListener('touchmove',function(e){var y=e.touches[0].clientY,d=ty-y;ty=y;if(edge(d))return;if(e.cancelable)e.preventDefault();add(d)},{passive:false});
ex.addEventListener('keydown',function(e){var d=e.key==='ArrowDown'||e.key==='PageDown'?160:e.key==='ArrowUp'||e.key==='PageUp'?-160:0;if(d&&!edge(d)){e.preventDefault();add(d)}});
ex.addEventListener('mousemove',function(e){var r=ex.getBoundingClientRect();tmx=((e.clientX-r.left)/r.width*2-1)*100});
new IntersectionObserver(function(e){run=e[0].isIntersecting;prev=performance.now();if(run&&!started){started=true;if(!rm){setTimeout(function(){phase='line'},500);setTimeout(function(){phase='circle'},2500)}}}).observe(ex);
function L(a,b,t){return a*(1-t)+b*t}
function f(now){requestAnimationFrame(f);if(!run)return;
var dt=Math.min(.05,(now-prev)/1000);prev=now;var W=ex.clientWidth,H=ex.clientHeight;
function k(r){return rm?1:1-Math.exp(-r*dt)}
m+=(Math.min(Math.max(sc/600,0),1)-m)*k(5);rot+=(Math.min(Math.max((sc-600)/2400,0),1)-rot)*k(5);mx+=(tmx-mx)*k(4);
var mob=W<768,md=Math.min(W,H),CR=Math.min(md*.35,350),AR=Math.min(W,H*1.5)*(mob?1.4:1.1),AY=H*(mob?.35:.25),CY=AY+AR,SP=mob?100:130,ST=-90-SP/2,STP=SP/(N-1),ls=Math.min(94,(W-60)/(N-1));
cards.forEach(function(c,i){var t;
if(phase==='scatter')t={x:c.sx0===undefined?c.x:c.x,y:c.y,r:c.r,s:.6,o:0};
else if(phase==='line')t={x:(i-(N-1)/2)*ls,y:0,r:0,s:1,o:1};
else{var ca=i/N*360,cr=ca*Math.PI/180,ang=ST+i*STP-rot*SP*.8,ar=ang*Math.PI/180;
t={x:L(Math.cos(cr)*CR,Math.cos(ar)*AR+mx,m),y:L(Math.sin(cr)*CR,Math.sin(ar)*AR+CY,m),r:L(ca+90,ang+90,m),s:L(.85,mob?1.3:1.6,m),o:1}}
if(phase==='scatter'){c.px=c.px===undefined?t.x:c.px;}
var q=k(4.5);c.sx=c.phx?c.sx:c.sx;
if(!c.i0){c.i0=1;c.cx=t.x;c.cy=t.y;c.cr=t.r;c.cs=t.s;c.co=t.o}
c.cx+=(t.x-c.cx)*q;c.cy+=(t.y-c.cy)*q;c.cr+=(t.r-c.cr)*q;c.cs+=(t.s-c.cs)*q;c.co+=(t.o-c.co)*q;
c.e.style.transform='translate(-50%,-50%) translate3d('+c.cx.toFixed(1)+'px,'+c.cy.toFixed(1)+'px,0) rotate('+c.cr.toFixed(1)+'deg) scale('+c.cs.toFixed(3)+')';c.e.style.opacity=c.co.toFixed(2)});
var ao=Math.min(Math.max((m-.8)/.2,0),1);ar_=ao;ar.style.opacity=ao;ar.style.transform='translateY('+((1-ao)*20)+'px)';
io+=((phase==='circle'&&m<.5?1-m*2:0)-io)*k(3);it.style.opacity=io}
var ar_=0;requestAnimationFrame(f)})();
