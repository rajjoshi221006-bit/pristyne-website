/* PRISTYNE - router */
(function(){var s=[].slice.call(document.querySelectorAll('section[data-p]')),a=[].slice.call(document.querySelectorAll('nav a')),io;
function show(){var h=(location.hash||'#home').slice(1);if(!s.some(function(x){return x.dataset.p===h}))h='home';
s.forEach(function(x){x.classList.toggle('show',x.dataset.p===h)});a.forEach(function(l){l.classList.toggle('on',l.hash==='#'+h)});document.getElementById('hero').style.display=h==='home'?'':'none';document.getElementById('intro').style.display=h==='home'?'':'none';document.getElementById('ex').style.display=h==='explore'?'':'none';window.scrollTo(0,0);obs();setTimeout(function(){document.querySelectorAll('section.show .r').forEach(function(e){e.classList.add('in')})},700)}
function obs(){var els=document.querySelectorAll('section.show .r:not(.in)');
if(!('IntersectionObserver' in window)){els.forEach(function(e){e.classList.add('in')});return}
io=io||new IntersectionObserver(function(en){en.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12});
els.forEach(function(e){io.observe(e)})}
window.addEventListener('hashchange',show);show();})();
