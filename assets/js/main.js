// Tiny JS to power filters, counters, theme, mobile menu
const $ = sel => document.querySelector(sel);
const $$ = sel => Array.from(document.querySelectorAll(sel));

const state = {
  theme: localStorage.getItem('theme') || 'light',
  lang: 'fr',
  projects: [
    { title:'Maintenance HTB — ONEE', area:'Software', tech:['Spring Boot','React','SQLite'], desc:'App web pour remplacer le suivi Excel: RBAC, équipements, planning, import Excel, reporting.', repo:'', demo:'' },
    { title:'Achat/Vente voiture', area:'Software', tech:['Django','JS'], desc:'Gestion ventes/achats avec supervision et centralisation des données.', repo:'', demo:'' },
    { title:'E-learning', area:'Software', tech:['Flask','Python'], desc:'Plateforme d’apprentissage — personnalisation & collaboration.', repo:'', demo:'' },
    { title:'Restaurant Manager', area:'Software', tech:['Flask','Python'], desc:'Commandes, rôles et back-office.', repo:'', demo:'' },
    { title:'ERP — Order-to-Cash', area:'ERP/BPMN', tech:['BPMN','SQL'], desc:'Processus, rôles & contrôles; schéma de données ERP.', repo:'', demo:'' },
    { title:'Data Mini — xG/xT', area:'Sports', tech:['Pandas','sklearn','mplsoccer'], desc:'xG logistic + calibration • xT heatmaps (données publiques).', repo:'', demo:'' },
    { title:'ETL + EDA Retail', area:'Data/AI', tech:['Pandas','Plotly'], desc:'Pipeline ETL et EDA reproductible avec rapport.', repo:'', demo:'' },
    { title:'CI/CD Demo', area:'Cloud/DevOps', tech:['Docker','GH Actions'], desc:'Lint → Test → Build → Push → Deploy.', repo:'', demo:'' },
  ],
  filter: 'Tous',
  q: ''
};

function setTheme(t){
  document.body.classList.toggle('theme-dark', t === 'dark');
  document.body.classList.toggle('theme-light', t !== 'dark');
  localStorage.setItem('theme', t);
}

function renderChips(){
  const cats = ['Tous','Software','Data/AI','Cloud/DevOps','ERP/BPMN','Sports'];
  const box = $('#chips'); box.innerHTML='';
  cats.forEach(c=>{
    const b = document.createElement('button');
    b.className='chip' + (state.filter===c ? ' active':'');
    b.textContent=c;
    b.onclick=()=>{ state.filter=c; renderGrid(); renderChips(); };
    box.appendChild(b);
  });
}

function match(p){
  const f = (state.filter==='Tous' || state.filter==='All') ? true : (p.area===state.filter);
  const q = state.q.trim().toLowerCase();
  const mQ = !q || p.title.toLowerCase().includes(q) || p.tech.join(' ').toLowerCase().includes(q);
  return f && mQ;
}

function renderGrid(){
  const grid = $('#grid');
  const visible = state.projects.filter(match);
  grid.innerHTML='';
  visible.forEach(p=>{
    const el = document.createElement('article');
    el.className = 'card';
    el.innerHTML = `
      <div class="flex between">
        <h3>${p.title}</h3>
        <span class="chip">${p.area}</span>
      </div>
      <p class="muted">${p.desc}</p>
      <div class="tags">${p.tech.map(t=>`<span class="chip">${t}</span>`).join(' ')}</div>
      <div class="mt">
        ${p.repo? `<a class="btn-outline" target="_blank" href="${p.repo}">Repo</a>`:''}
        ${p.demo? `<a class="btn-outline" target="_blank" href="${p.demo}">Demo</a>`:''}
      </div>
    `;
    grid.appendChild(el);
  });
  $('#empty').style.display = visible.length? 'none':'block';
}

function animateCounters(){
  $$('.num').forEach(el=>{
    const target = Number(el.dataset.target||0);
    const start = performance.now();
    const dur = 1200;
    const tick = (t)=>{
      const k = Math.min(1,(t-start)/dur);
      const ease = k<.5?4*k*k*k:1-Math.pow(-2*k+2,3)/2;
      el.textContent = Math.floor(target*ease);
      if(k<1) requestAnimationFrame(tick);
      else el.textContent = target;
    };
    requestAnimationFrame(tick);
  });
}

function initInteractions(){
  // theme
  setTheme(state.theme);
  $('#themeBtn').onclick = ()=>{
    state.theme = (state.theme==='dark') ? 'light' : 'dark';
    setTheme(state.theme);
  };
  // mobile menu
  const mobile = $('#mobileMenu');
  $('#burger').onclick = ()=>{
    mobile.style.display = mobile.style.display==='flex' ? 'none' : 'flex';
  };
  // search
  $('#search').addEventListener('input', (e)=>{ state.q = e.target.value; renderGrid(); });
  // year
  $('#year').textContent = new Date().getFullYear();
  // counters trigger when hero visible
  const hero = document.querySelector('.hero');
  const io = new IntersectionObserver((entries)=>{
    if(entries.some(e=>e.isIntersecting)){ animateCounters(); io.disconnect(); }
  },{threshold:.3});
  io.observe(hero);
}

document.addEventListener('DOMContentLoaded', ()=>{
  renderChips();
  renderGrid();
  initInteractions();
});
