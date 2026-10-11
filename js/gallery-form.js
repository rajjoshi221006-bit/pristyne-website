/* PRISTYNE - gallery-form */
(function(){var FORM_URL='';/* paste your Google Form link between the quotes */
var a=document.getElementById('apply');if(FORM_URL){a.href=FORM_URL;a.target='_blank';a.rel='noopener'}
var g=[].slice.call(document.querySelectorAll('#gal img'));
document.querySelectorAll('img[data-g]').forEach(function(i){var s=g[+i.dataset.g-1];if(s)i.src=s.src});
var t=document.getElementById('mqt');for(var k=0;k<2;k++)g.forEach(function(s){var c=document.createElement('img');c.alt='';c.src=s.src;t.appendChild(c)})})();
