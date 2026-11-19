const cardNote=document.querySelector('#card-note');
document.querySelectorAll('.card').forEach(card=>card.addEventListener('click',()=>{cardNote.textContent=card.dataset.message;cardNote.animate([{opacity:0,transform:'translateY(6px)'},{opacity:1,transform:'translateY(0)'}],{duration:280});burst(card)}));
let hearts=0;document.querySelector('#send-heart').addEventListener('click',e=>{hearts++;document.querySelector('#heart-count').textContent=hearts===1?'1 heart sent. okay, maybe two more 💗':hearts+' hearts sent. absolutely normal behaviour 😌';burst(e.currentTarget)});
const findings = [
  "you’re actually the sweetest, don’t argue with the poll 💛",
  "i’m really glad you’re in my life, okay? 🫶",
  "you’re a genuinely lovely person. poll has spoken 🌷",
  "i’m very lucky to know you. that’s the result 😌"
];
document.querySelector('#study').addEventListener('click',e=>{document.querySelector('#study-result').textContent=findings[Math.floor(Math.random()*findings.length)];e.currentTarget.textContent='again!!';burst(e.currentTarget)});
function confetti(){const colors=['#ff8db7','#ffd98c','#fff2f6','#c99cff','#aee8db'];for(let i=0;i<95;i++){const p=document.createElement('i');p.className='confetti';p.style.left=Math.random()*100+'vw';p.style.top=(-10-Math.random()*25)+'px';p.style.background=colors[i%colors.length];p.style.setProperty('--dx',(Math.random()*240-120)+'px');p.style.animationDelay=Math.random()*.35+'s';document.body.appendChild(p);setTimeout(()=>p.remove(),2300)}}
function burst(el){const r=el.getBoundingClientRect();for(let i=0;i<5;i++){const h=document.createElement('span');h.className='floaty';h.textContent=['♥','✦','✨'][i%3];h.style.left=(r.left+r.width*Math.random())+'px';h.style.top=(r.top+r.height*.4)+'px';document.body.appendChild(h);setTimeout(()=>h.remove(),1500)}}
function celebrate(){document.querySelector('#finale').textContent='hehe okay, here comes the confetti! happy men’s dayyy 😋💗';confetti()}
document.querySelector('#yes').addEventListener('click',celebrate);document.querySelector('#also-yes').addEventListener('click',e=>{e.currentTarget.textContent='I knew you’d agree 😌';celebrate()});
