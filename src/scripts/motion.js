
const reduced=matchMedia('(prefers-reduced-motion: reduce)');
const motionButton=document.querySelector('#motion-toggle');
function setMotion(paused){document.body.classList.toggle('motion-paused',paused);motionButton.setAttribute('aria-pressed',String(paused));motionButton.textContent=paused?'Увімкнути анімацію':'Зупинити анімацію'}
setMotion(reduced.matches);motionButton.addEventListener('click',()=>setMotion(!document.body.classList.contains('motion-paused')));
const progress=document.querySelector('.reading-progress');let scheduled=false;window.addEventListener('scroll',()=>{if(!scheduled){scheduled=true;requestAnimationFrame(()=>{const total=document.documentElement.scrollHeight-innerHeight;progress.style.transform=`scaleX(${total>0?scrollY/total:0})`;scheduled=false})}},{passive:true});
