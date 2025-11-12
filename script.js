// Theme toggle (dark <-> light) and store preference
const themeToggle = document.getElementById('themeToggle');
function applyTheme(theme){
  if(theme === 'light'){
    document.documentElement.classList.add('light');
    themeToggle.textContent = '🌞';
  } else {
    document.documentElement.classList.remove('light');
    themeToggle.textContent = '🌙';
  }
  localStorage.setItem('omotech_theme', theme);
}
const savedTheme = localStorage.getItem('omotech_theme') || 'dark';
applyTheme(savedTheme);
if(themeToggle){
  themeToggle.addEventListener('click', () => {
    const current = document.documentElement.classList.contains('light') ? 'light' : 'dark';
    applyTheme(current === 'light' ? 'dark' : 'light');
  });
}

// set years
document.getElementById('year')?.textContent = new Date().getFullYear();

// Instagram placeholder: replace '#' with your real Instagram url if you have it
const igLink = document.getElementById('igLink');
if(igLink && igLink.href === window.location.href + '#'){ /* noop */ }
if(igLink && igLink.getAttribute('href') === '#'){
  // leave as-is; easily replace in HTML or programmatically:
  // igLink.href = 'https://instagram.com/YOUR_USERNAME';
}

// small helper: ensure WhatsApp link includes number
const whLink = document.getElementById('whLink');
if(whLink && !whLink.href.includes('wa.me')) whLink.href = 'https://wa.me/2349166461965';
