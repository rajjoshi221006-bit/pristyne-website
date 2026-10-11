/* PRISTYNE - intro */
(function(){var lp=document.getElementById('lgp'),tp=document.getElementById('txp'),rm=matchMedia('(prefers-reduced-motion:reduce)').matches;
document.getElementById('cue').addEventListener('click',function(){document.getElementById('hero').scrollIntoView({behavior:rm?'auto':'smooth'})});
if(rm)return;function s(){var k=Math.min(scrollY/innerHeight,1);lp.style.transform='translateY('+(-60*k)+'px) scale('+(1-.22*k)+')';lp.style.opacity=Math.max(0,1-k*1.25);tp.style.transform='translateY('+(-30*k)+'px)';tp.style.opacity=Math.max(0,1-k*1.5)}
addEventListener('scroll',s,{passive:true});s()})();
