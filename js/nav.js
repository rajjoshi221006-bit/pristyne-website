/* PRISTYNE - nav */
(function(){var n=document.querySelector('nav'),b=n.querySelector('.mt');function c(){n.classList.remove('open');b.setAttribute('aria-expanded','false')}
b.addEventListener('click',function(){b.setAttribute('aria-expanded',n.classList.toggle('open'))});
n.querySelectorAll('.nl a').forEach(function(a){a.addEventListener('click',c)});addEventListener('hashchange',c)})();
