/* ---------- Modal de proyectos ---------- */
function openProjectModal(id) {
  const modal = document.getElementById('modal-' + id);
  if (modal) modal.classList.remove('hidden');
}
function closeProjectModal(id) {
  const modal = document.getElementById('modal-' + id);
  if (modal) modal.classList.add('hidden');
}

/* ---------- Datos ---------- */
const courses = [
  { name: 'Junior Cybersecurity Analyst Career Path', issuer: 'Cisco Networking Academy', date: 'Sep 2026', desc: 'Controles de ciberseguridad, mitigación de amenazas de red y sistemas, evaluación de vulnerabilidades y respuesta a incidentes.', icon: 'fa-solid fa-shield-halved', pdf: 'certs/junior-cybersecurity-analyst.pdf', verify: 'https://www.credly.com/badges/ee5badbe-ac9d-461f-8763-1cecc2fedba8/public_url' },
  { name: 'CCNA: Switching, Routing & Wireless Essentials', issuer: 'Cisco Networking Academy', date: 'Abr 2026', desc: 'VLANs e Inter-VLAN, STP, EtherChannel, WLANs, seguridad de switches y enrutamiento estático IPv4/IPv6.', icon: 'fa-solid fa-network-wired', pdf: 'certs/ccna-switching-routing-wireless.pdf', verify: 'https://www.credly.com/badges/e890af8c-f06b-4df4-9963-a3a07951e501/public_url' },
  { name: 'Ethical Hacker', issuer: 'Cisco Networking Academy', date: 'Ago 2026', desc: 'Metodología de ethical hacking, escaneo de vulnerabilidades, explotación de redes y aplicaciones, y reportes de pentesting.', icon: 'fa-solid fa-user-secret', pdf: 'certs/ethical-hacker.pdf', verify: 'https://www.credly.com/badges/44dfc122-113f-4d1a-a427-2ee305fe5f4a/public_url' },
  { name: 'Introduction to Cybersecurity', issuer: 'Cisco Networking Academy', date: 'Mar 2023', desc: 'Amenazas, ataques y vulnerabilidades comunes, y cómo proteger a personas y organizaciones.', icon: 'fa-solid fa-lock', pdf: 'certs/introduction-to-cybersecurity.pdf', verify: 'https://www.credly.com/badges/2751889d-5b60-4228-9a30-5bc94dbaf984/public_url' },
  { name: 'Networking Essentials', issuer: 'Cisco Networking Academy', date: 'Jun 2023', desc: 'Fundamentos de redes, direccionamiento y protocolos.', icon: 'fa-solid fa-sitemap', pdf: 'certs/networking-essentials.pdf' },
  { name: 'Introduction to Internet of Things', issuer: 'Cisco Networking Academy', date: 'Mar 2023', desc: 'IoT y transformación digital, automatización e IA, redes basadas en intención y seguridad.', icon: 'fa-solid fa-microchip', pdf: 'certs/introduction-to-iot.pdf', verify: 'https://www.credly.com/badges/c5064d9f-0435-4c70-90c9-eb5482222a5d/public_url' },
  { name: 'Python Essentials 1', issuer: 'Cisco Networking Academy · OpenEDG Python Institute', date: 'Ago 2026', desc: 'Programación en Python 3: sintaxis, algoritmos y biblioteca estándar. Base para la certificación PCEP.', icon: 'fa-brands fa-python', pdf: 'certs/python-essentials-1.pdf', verify: 'https://www.credly.com/badges/b1b8162e-07d3-487a-998f-e41fe9da2e1c/public_url' },
  { name: 'Python Essentials 2', issuer: 'Cisco Networking Academy · OpenEDG Python Institute', date: 'Ago 2026', desc: 'Programas multi-módulo, programación orientada a objetos y aplicaciones IoT. Base para la certificación PCAP.', icon: 'fa-brands fa-python', pdf: 'certs/python-essentials-2.pdf', verify: 'https://www.credly.com/badges/62f36980-5406-4f8b-8fd8-9bc5db4c8a20/public_url' }
];

// Ruta del PDF de cada curso: certs/<nombre-en-minusculas-con-guiones>.pdf
// Si un archivo se llama distinto, agrega pdf: 'certs/mi-archivo.pdf' al curso.
// Opcional: agrega verify: 'https://www.credly.com/badges/...' a un curso para mostrar el botón "Verificar credencial".
// Las imágenes del visor se leen de certs/img/<mismo-nombre>.jpg
courses.forEach(c => {
  c.img = c.img || c.pdf.replace('certs/', 'certs/img/').replace(/\.pdf$/, '.jpg');
  c.pdf = c.pdf || 'certs/' + c.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') + '.pdf';
});

// Google Drive: agrega drive: 'ID_DEL_ARCHIVO' a un curso (el ID está en el link, entre /d/ y /view).
// Si no tiene drive, se usa el PDF local de certs/.
courses.forEach(c => {
  c.openUrl = c.drive ? 'https://drive.google.com/file/d/' + c.drive + '/view' : c.pdf;
  c.downloadUrl = c.drive ? 'https://drive.google.com/uc?export=download&id=' + c.drive : c.pdf;
});

const skills = [
  ['Redes y Conmutación', 'fa-solid fa-network-wired', 'text-cyan-400', 'Configuración de VLANs, Spanning Tree Protocol (STP) y EtherChannel (LACP) para alta disponibilidad.', 'cyber'],
  ['Enrutamiento Dinámico (OSPF v2/v3)', 'fa-solid fa-route', 'text-sky-400', 'Implementación de OSPF, rutas estáticas y topologías empresariales redundantes.', 'cyber'],
  ['Servicios de Red & Direccionamiento', 'fa-solid fa-globe', 'text-blue-400', 'Estructuración de IPv4 / IPv6 y despliegue de servicios (DNS, DHCP, HTTP).', 'cyber'],
  ['Análisis de Tráfico & Ciberseguridad', 'fa-solid fa-user-shield', 'text-emerald-400', 'Evaluación de redes y análisis de tráfico utilizando Wireshark y Nmap.', 'cyber'],
  ['Virtualización (VMware / VirtualBox)', 'fa-solid fa-cube', 'text-purple-400', 'Despliegue de máquinas virtuales (VMs) y configuración de redes virtuales (NAT, Bridged, Host-Only).', 'os'],
  ['Linux CLI & Kali Linux', 'fa-brands fa-linux', 'text-yellow-500', 'Administración mediante línea de comandos (CLI) en Linux.', 'os'],
  ['Windows Server', 'fa-brands fa-windows', 'text-blue-500', 'Administración básica de servidores.', 'os'],
  ['Python', 'fa-brands fa-python', 'text-yellow-400', 'Nivel intermedio. Lógica de programación y desarrollo de scripts de automatización.', 'prog'],
  ['SAP ERP', 'fa-solid fa-cubes', 'text-sky-400', 'Manejo del sistema corporativo en el módulo de inventarios, control documental y trazabilidad.', 'prog'],
  ['Microsoft Excel', 'fa-solid fa-file-excel', 'text-green-500', 'Automatización y procesamiento de datos a nivel intermedio.', 'prog']
];

document.getElementById('certsGrid').innerHTML = courses.map((c, i) => `
  <div class="glass-panel p-5 flex flex-col gap-3 hover:border-emerald-400 transition-all">
    <div class="flex items-center justify-between">
      <span class="font-mono text-[10px] text-emerald-400 uppercase tracking-wider">${c.date}</span>
      <i class="${c.icon} text-emerald-400"></i>
    </div>
    <h3 class="text-base font-bold text-white leading-snug">${c.name}</h3>
    <p class="text-[11px] font-mono text-slate-500">${c.issuer}</p>
    <p class="text-xs text-slate-400 leading-relaxed flex-1">${c.desc}</p>
    <button onclick="viewCert(${i})" class="w-full py-2 rounded-lg bg-slate-900 border border-emerald-500/30 text-emerald-400 font-mono text-xs hover:bg-emerald-500 hover:text-black transition-all flex items-center justify-center gap-2"><i class="fa-solid fa-eye"></i><span>Ver certificado</span></button>
  </div>`).join('');

document.getElementById('skillsContainer').innerHTML = skills.map(s => `
  <div class="skill-card ${s[4]} glass-panel p-5 flex items-start gap-4 hover:border-emerald-400 hover:-translate-y-1 transition-all">
    <i class="${s[1]} text-2xl ${s[2]} mt-1"></i>
    <div class="space-y-1">
      <h3 class="font-bold text-sm text-white">${s[0]}</h3>
      <p class="text-xs text-slate-400 leading-relaxed">${s[3]}</p>
    </div>
  </div>`).join('');

document.getElementById('cvCerts').innerHTML = courses.map(c => `<li>${c.name}</li>`).join('');

/* ---------- Audio ---------- */
let audioEnabled = false, audioCtx = null;
function toggleAudio() {
  audioEnabled = !audioEnabled;
  const icon = document.getElementById('soundIcon');
  if (audioEnabled) {
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    icon.className = 'fa-solid fa-volume-high text-emerald-400';
    beep(800, .08); showToast('Efectos de sonido activados', 'success');
  } else {
    icon.className = 'fa-solid fa-volume-xmark text-slate-400';
    showToast('Sonido desactivado', 'info');
  }
}
function beep(freq = 600, dur = .05) {
  if (!audioEnabled || !audioCtx) return;
  try {
    const o = audioCtx.createOscillator(), g = audioCtx.createGain();
    o.type = 'sine'; o.frequency.setValueAtTime(freq, audioCtx.currentTime);
    g.gain.setValueAtTime(.05, audioCtx.currentTime);
    g.gain.exponentialRampToValueAtTime(.001, audioCtx.currentTime + dur);
    o.connect(g); g.connect(audioCtx.destination); o.start(); o.stop(audioCtx.currentTime + dur);
  } catch (e) { console.error(e); }
}

/* ---------- Fondo Matrix ---------- */
// En móvil (o con "reducir movimiento") no se anima: es lo que más CPU/GPU consume.
const lowPower = matchMedia('(max-width: 768px), (pointer: coarse), (prefers-reduced-motion: reduce)').matches;
const canvas = document.getElementById('cyberCanvas'), ctx = canvas.getContext('2d');
const chars = '01101001ERIC_SOLSOL_CYBER_UTP_SENATI_CISCO_PYTHON_KALI', fs = 12;
let drops = [], matrixRaf = null, lastFrame = 0;
function resizeCanvas() {
  canvas.width = innerWidth; canvas.height = innerHeight;
  drops = Array.from({ length: Math.floor(innerWidth / fs) }, () => Math.floor(Math.random() * -100));
}
function drawMatrix() {
  ctx.fillStyle = 'rgba(5,8,17,.1)'; ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#10B981'; ctx.font = fs + "px 'JetBrains Mono', monospace";
  drops.forEach((d, i) => {
    ctx.fillText(chars.charAt(Math.floor(Math.random() * chars.length)), i * fs, d * fs);
    if (d * fs > canvas.height && Math.random() > .975) drops[i] = 0;
    drops[i]++;
  });
}
function matrixLoop(t) {
  matrixRaf = requestAnimationFrame(matrixLoop);
  if (t - lastFrame < 40) return; // ~25 FPS
  lastFrame = t; drawMatrix();
}
function startMatrix() {
  if (lowPower) {
    canvas.style.display = 'none';
    const sl = document.querySelector('.scanline-overlay'); if (sl) sl.style.display = 'none';
    return;
  }
  resizeCanvas(); addEventListener('resize', resizeCanvas);
  matrixRaf = requestAnimationFrame(matrixLoop);
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) cancelAnimationFrame(matrixRaf);
    else matrixRaf = requestAnimationFrame(matrixLoop);
  });
}

/* ---------- Terminal ---------- */
const cmds = {
  help: 'Comandos disponibles: whoami, certs, skills, contact, cv, clear, date',
  whoami: 'Eric Eli Solsol Fasabi - Estudiante de Ing. de Sistemas e Informática (UTP / SENATI)',
  certs: 'Cisco Networking Academy: Junior Cybersecurity Analyst, CCNA: Switching Routing & Wireless Essentials, Ethical Hacker, Intro to Cybersecurity, Networking Essentials, Intro to IoT, Python Essentials 1 y 2',
  skills: 'Redes (VLANs, STP, OSPF, IPv4/IPv6), Wireshark, Nmap, VMware/VirtualBox, Linux CLI & Kali, Windows Server, Python, SAP ERP, Excel',
  contact: 'Email: solsolfasabierick@gmail.com | LinkedIn: linkedin.com/in/eric-solsol | GitHub: github.com/ericsolsol'
};
function handleTerminalSubmit(e) {
  e.preventDefault();
  const input = document.getElementById('terminalInput'), out = document.getElementById('terminalOutput');
  const cmd = input.value.trim().toLowerCase();
  if (!cmd) return;
  beep(900, .04);
  const line = document.createElement('div');
  line.innerHTML = `<span class="text-emerald-400">eric@solsol:~$</span> <span class="text-white">${escapeHTML(cmd)}</span>`;
  out.appendChild(line);
  const reply = (txt, cls) => {
    const p = document.createElement('p');
    p.className = cls + ' pl-4 border-l-2 my-1'; p.innerText = txt; out.appendChild(p);
  };
  const ok = 'text-emerald-300 border-emerald-500/40';
  if (cmd === 'clear') out.innerHTML = '';
  else if (cmd === 'cv') { openCVModal(); reply('-> Abriendo visor de CV...', ok); }
  else if (cmd === 'date') reply(new Date().toLocaleString('es-PE'), ok);
  else if (cmds[cmd]) reply(cmds[cmd], ok);
  else reply(`Comando no reconocido: '${cmd}'. Escribe 'help' para ver la lista.`, 'text-red-400 border-red-500/40');
  input.value = ''; out.scrollTop = out.scrollHeight;
}
function escapeHTML(s) {
  return s.replace(/[&<>'"]/g, t => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[t]));
}

/* ---------- Skills ---------- */
function filterSkills(cat, btn) {
  beep(700, .03);
  document.querySelectorAll('.skill-tab').forEach(t => t.classList.remove('on'));
  btn.classList.add('on');
  document.querySelectorAll('.skill-card').forEach(c => {
    c.style.display = (cat === 'all' || c.classList.contains(cat)) ? 'flex' : 'none';
  });
}

/* ---------- Modal CV, contacto, toasts ---------- */
function openCVModal() { beep(850, .05); const m = document.getElementById('cvModal'); m.classList.remove('hidden'); m.classList.add('flex'); }
function closeCVModal() { const m = document.getElementById('cvModal'); m.classList.add('hidden'); m.classList.remove('flex'); }
// Pega aquí el ID de Drive del CV (entre /d/ y /view). Vacío = usa cv/CV_Eric_Solsol_Practicante_TI.pdf
const CV_DRIVE_ID = '';
function downloadCV() {
  beep(1000, .08);
  const a = document.createElement('a');
  a.href = CV_DRIVE_ID ? 'https://drive.google.com/uc?export=download&id=' + CV_DRIVE_ID : 'cv/CV_Eric_Solsol_Practicante_TI.pdf';
  a.download = 'CV_Eric_Solsol_Practicante_TI.pdf';
  document.body.appendChild(a); a.click(); a.remove();
  showToast('Descargando CV...', 'success'); closeCVModal();
}
function handleContactSubmit(e) {
  e.preventDefault(); beep(1000, .1);
  showToast('¡Mensaje enviado exitosamente! Te responderé pronto.', 'success'); e.target.reset();
}
function viewCert(i) {
  beep(850, .05);
  const c = courses[i];
  document.getElementById('certTitle').innerText = c.name;
  const img = document.getElementById('certImg');
  img.src = c.img; img.alt = 'Certificado de ' + c.name;
  document.getElementById('certOpen').href = c.openUrl;
  document.getElementById('certDownload').href = c.downloadUrl;
  const v = document.getElementById('certVerify');
  if (c.verify) { v.href = c.verify; v.classList.remove('hidden'); v.classList.add('flex'); }
  else { v.classList.add('hidden'); v.classList.remove('flex'); }
  const m = document.getElementById('certModal'); m.classList.remove('hidden'); m.classList.add('flex');
}
function closeCertModal() {
  const m = document.getElementById('certModal');
  m.classList.add('hidden'); m.classList.remove('flex');
  document.getElementById('certImg').removeAttribute('src');
}
addEventListener('keydown', e => { if (e.key === 'Escape') { closeCertModal(); closeCVModal(); closeProjectModal('proyecto1'); } });
function toggleMobileMenu() { document.getElementById('mobileMenu').classList.toggle('hidden'); }
function showToast(msg, type = 'info') {
  const box = document.getElementById('toastContainer'), t = document.createElement('div');
  const bg = type === 'success' ? 'bg-emerald-950 border-emerald-500/80 text-emerald-300' : 'bg-slate-900 border-slate-700 text-slate-200';
  const ic = type === 'success' ? 'fa-solid fa-circle-check text-emerald-400' : 'fa-solid fa-circle-info text-blue-400';
  t.className = `pointer-events-auto flex items-center gap-3 px-4 py-3 rounded-xl border ${bg} shadow-neon-glow font-mono text-xs transition-all duration-300 translate-y-2 opacity-0`;
  t.innerHTML = `<i class="${ic}"></i> <span>${escapeHTML(msg)}</span>`;
  box.appendChild(t);
  setTimeout(() => t.classList.remove('translate-y-2', 'opacity-0'), 10);
  setTimeout(() => { t.classList.add('opacity-0', 'translate-y-2'); setTimeout(() => t.remove(), 300); }, 3500);
}

/* ---------- Inicio ---------- */
window.onload = function () {
  startMatrix();
  const titles = ['Estudiante de Ingeniería de Sistemas', 'Ciberseguridad & Redes Cisco (CCNA)', 'Automatización con Python', 'Despliegue de Entornos Virtualizados'];
  let ti = 0, ci = 0, del = false;
  const el = document.getElementById('typedTitle');
  (function loop() {
      const cur = titles[ti];
      if (ci > cur.length) ci = cur.length; // Evita que el cursor se desplace más allá del texto
      el.textContent = cur.substring(0, del ? --ci : ++ci);
      if (!del && ci === cur.length) { del = true; setTimeout(loop, 2000); }
      else if (del && ci === 0) { del = false; ti = (ti + 1) % titles.length; setTimeout(loop, 500); }
      else setTimeout(loop, del ? 30 : 60);
    })();
};
