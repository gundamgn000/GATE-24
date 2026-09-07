(function(){
  const saved=localStorage.getItem('gate-24-theme')||'paper';
  document.documentElement.dataset.initialTheme=saved;
  document.addEventListener('DOMContentLoaded',()=>{document.body.dataset.theme=saved==='night'?'night':'paper'});
})();
